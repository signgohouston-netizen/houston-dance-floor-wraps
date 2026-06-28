import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/**
 * Lead capture endpoint.
 *
 * Out of the box this validates the submission and logs it to the server
 * console so the site works immediately. To deliver leads to your inbox or CRM,
 * set ONE of the following and the handler will use it automatically:
 *
 *  - RESEND_API_KEY + LEAD_TO_EMAIL  -> emails the lead via Resend
 *  - LEAD_WEBHOOK_URL                -> POSTs the lead JSON to Zapier / Make / CRM
 *
 * See README.md for setup details.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot — bots fill hidden fields
    if (body.company_website) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, phone } = body;
    if (!name || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const lead = {
      name,
      email,
      phone,
      eventDate: body.eventDate || "",
      eventType: body.eventType || "",
      area: body.area || "",
      message: body.message || "",
      estimate: body.estimate || "",
      source: body.source || "website",
      receivedAt: new Date().toISOString(),
    };

    // 1) Forward to a webhook (Zapier/Make/CRM) if configured
    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      }).catch((e) => console.error("Webhook error:", e));
    }

    // 2) Send email via Resend if configured
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.LEAD_TO_EMAIL || site.email;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || "leads@houstondancefloorwraps.com",
          to: toEmail,
          reply_to: email,
          subject: `New Lead: ${name} — ${lead.eventType || "Dance Floor Wrap"}`,
          html: `
            <h2>New Dance Floor Wrap Lead</h2>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Event Date:</strong> ${lead.eventDate}</li>
              <li><strong>Event Type:</strong> ${lead.eventType}</li>
              <li><strong>Service Area:</strong> ${lead.area}</li>
              <li><strong>Estimate:</strong> ${lead.estimate}</li>
              <li><strong>Source:</strong> ${lead.source}</li>
            </ul>
            <p><strong>Message:</strong><br/>${lead.message}</p>
          `,
        }),
      }).catch((e) => console.error("Resend error:", e));
    }

    // Always log so leads are never lost during setup
    console.log("📩 NEW LEAD:", JSON.stringify(lead, null, 2));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead route error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
