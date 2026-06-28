"use client";

import { useState } from "react";
import { serviceAreas } from "@/lib/serviceAreas";

interface Props {
  compact?: boolean;
  defaultArea?: string;
  source?: string;
  estimate?: string;
}

export default function LeadForm({
  compact,
  defaultArea,
  source = "website",
  estimate,
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setMessage(
        "Thank you! Your request is in. We'll reach out shortly with your custom quote."
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please call us at 832-450-9200 and we'll help right away."
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-pink-500/40 bg-pink-500/10 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-2xl">
          ✓
        </div>
        <h3 className="font-display text-xl font-bold text-charcoal">
          Request received!
        </h3>
        <p className="mt-2 text-chrome">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {estimate && (
        <div className="rounded-xl border border-pink-500/30 bg-pink-500/10 p-3 text-sm text-gold-700">
          <span className="font-semibold">Your estimate:</span> {estimate}
          <input type="hidden" name="estimate" value={estimate} />
        </div>
      )}

      <div className={compact ? "" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label className="label" htmlFor="name">
            Full Name *
          </label>
          <input id="name" name="name" required className="field" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="label" htmlFor="phone">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="field"
            placeholder="(832) 450-9200"
          />
        </div>
      </div>

      <div className={compact ? "" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label className="label" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="field"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="label" htmlFor="eventDate">
            Event Date
          </label>
          <input id="eventDate" name="eventDate" type="date" className="field" />
        </div>
      </div>

      <div className={compact ? "" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label className="label" htmlFor="eventType">
            Event Type
          </label>
          <select id="eventType" name="eventType" className="field">
            <option value="Wedding">Wedding</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Quinceañera / Sweet 16">Quinceañera / Sweet 16</option>
            <option value="Birthday / Anniversary">Birthday / Anniversary</option>
            <option value="Brand Activation">Brand Activation</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="area">
            Service Area
          </label>
          <select id="area" name="area" defaultValue={defaultArea} className="field">
            {serviceAreas.map((a) => (
              <option key={a.slug} value={a.name}>
                {a.name}
              </option>
            ))}
            <option value="Other / Nationwide">Other / Nationwide</option>
          </select>
        </div>
      </div>

      <div>
        <label className="label" htmlFor="message">
          Tell us about your floor &amp; design
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          className="field"
          placeholder="Floor size (e.g. 16x16), venue, design ideas, monogram details..."
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full text-base disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Get My Free Quote →"}
      </button>
      <p className="text-center text-xs text-chrome-dark">
        No spam, ever. We&apos;ll only use your info to prepare your quote.
      </p>
    </form>
  );
}
