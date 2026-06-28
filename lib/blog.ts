export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  category: string;
  readMinutes: number;
  cover?: string;
  body: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-a-vinyl-dance-floor-wrap",
    title: "What Is a Vinyl Dance Floor Wrap? The Complete Guide",
    excerpt:
      "Everything you need to know about custom vinyl dance floor wraps — how they work, what they cost, and why they're the hottest upgrade in event design.",
    date: "2026-06-01",
    author: "Houston Dance Floor Wraps",
    category: "Guides",
    readMinutes: 6,
    body: [
      {
        paragraphs: [
          "A vinyl dance floor wrap is a custom-printed, slip-resistant adhesive graphic applied directly over an existing floor to transform it into a one-of-a-kind centerpiece. Think of it as a giant, ultra-durable sticker engineered for foot traffic, dancing, high heels, and hours of celebration.",
          "Couples, event planners, and brands use dance floor wraps to add a personalized monogram, a full-color design, or a branded logo to weddings, galas, and corporate activations. The result is a floor that photographs beautifully and ties the entire room together.",
        ],
      },
      {
        heading: "How does a dance floor wrap work?",
        paragraphs: [
          "We start with your floor's exact dimensions and your design concept. Our team creates a custom proof, prints it on commercial-grade vinyl, and laminates it with a textured, slip-resistant finish. On event day, the wrap is installed over the venue's existing floor and removed cleanly afterward — no damage, no residue.",
        ],
      },
      {
        heading: "Popular dance floor wrap styles",
        list: [
          "Center monogram with the couple's initials and wedding date",
          "Full-coverage custom artwork or photo print",
          "Marble, wood, or geometric luxury patterns",
          "Corporate logo and brand activation floors",
          "Glow, neon, and themed party designs",
        ],
      },
      {
        heading: "Why choose a vinyl wrap over a rental floor?",
        paragraphs: [
          "Traditional rental floors are limited to a handful of generic finishes. A vinyl wrap is completely custom — any color, any logo, any design — at a fraction of the cost of a custom-built floor. It's lightweight, fast to install, and works over nearly any flat surface.",
        ],
      },
      {
        paragraphs: [
          "Ready to see what your floor could look like? Use our pricing calculator for an instant estimate, or call us at 832-450-9200 to start your custom design.",
        ],
      },
    ],
  },
  {
    slug: "wedding-dance-floor-wrap-ideas",
    title: "15 Wedding Dance Floor Wrap Ideas Guests Will Never Forget",
    excerpt:
      "From elegant monograms to full-floor florals, here are the most popular wedding dance floor wrap designs for 2026.",
    date: "2026-05-18",
    author: "Houston Dance Floor Wraps",
    category: "Weddings",
    readMinutes: 5,
    body: [
      {
        paragraphs: [
          "Your dance floor is where the most memorable moments of your reception happen — the first dance, the toasts, the late-night party. A custom vinyl wrap turns that floor into a personalized work of art. Here are 15 ideas to inspire your design.",
        ],
      },
      {
        heading: "Timeless & elegant",
        list: [
          "Classic monogram with initials and wedding date",
          "Script names encircled by a delicate floral wreath",
          "Marble finish with metallic gold accents",
          "Minimalist line-art crest",
        ],
      },
      {
        heading: "Bold & modern",
        list: [
          "Full-floor watercolor florals",
          "Geometric terrazzo or art-deco patterns",
          "Statement quote or 'better together' typography",
          "Custom map of where you met",
        ],
      },
      {
        heading: "Themed & seasonal",
        list: [
          "Garden / greenery for spring weddings",
          "Starry night sky for evening receptions",
          "Holiday and winter wonderland themes",
          "Cultural patterns and family crests",
        ],
      },
      {
        paragraphs: [
          "Whatever your vision, we'll turn it into a custom proof before printing. Get an instant estimate with our calculator or call 832-450-9200.",
        ],
      },
    ],
  },
  {
    slug: "how-much-does-a-dance-floor-wrap-cost",
    title: "How Much Does a Dance Floor Wrap Cost in 2026?",
    excerpt:
      "A transparent breakdown of dance floor wrap pricing — square footage, design complexity, installation, and how to get the best value.",
    date: "2026-05-02",
    author: "Houston Dance Floor Wraps",
    category: "Pricing",
    readMinutes: 4,
    body: [
      {
        paragraphs: [
          "The most common question we get is simple: how much does a dance floor wrap cost? The honest answer is that price depends on three things — the size of your floor, the complexity of your design, and whether you need professional installation.",
        ],
      },
      {
        heading: "What drives the price",
        list: [
          "Square footage — most dance floors range from 12x12 (144 sq ft) to 20x20 (400 sq ft)",
          "Design — a single-color monogram costs less than full-coverage photo artwork",
          "Installation — DIY-ready kits ship anywhere; pro install is available in Texas and select markets",
          "Turnaround — rush orders may include a small expedite fee",
        ],
      },
      {
        heading: "Typical investment",
        paragraphs: [
          "Most wedding monogram wraps fall between $500 and $1,200, while full-coverage custom floors for larger venues range higher. Corporate and brand activation floors are quoted based on scope.",
          "The fastest way to get a real number is our online pricing calculator — enter your floor size and options for an instant estimate, with no obligation.",
        ],
      },
    ],
  },
  {
    slug: "dance-floor-wraps-for-corporate-events",
    title: "Dance Floor Wraps for Corporate Events & Brand Activations",
    excerpt:
      "How brands use custom floor graphics to turn events into immersive, photo-worthy experiences that drive engagement.",
    date: "2026-04-15",
    author: "Houston Dance Floor Wraps",
    category: "Corporate",
    readMinutes: 4,
    body: [
      {
        paragraphs: [
          "A branded floor is one of the most underused tools in event marketing. When attendees look down, dance, and take photos, your logo and message travel across social media all night long.",
        ],
      },
      {
        heading: "Where branded floor graphics shine",
        list: [
          "Product launches and press events",
          "Trade show booths and expo floors",
          "Conference galas and award nights",
          "Pop-up activations and experiential marketing",
          "Holiday parties and company milestones",
        ],
      },
      {
        heading: "Built for high traffic",
        paragraphs: [
          "Our corporate wraps use commercial-grade, slip-resistant vinyl rated for heavy foot traffic, so they look sharp from setup through teardown. We can color-match to your exact brand guidelines and produce floors of nearly any size.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-your-venue-for-a-dance-floor-wrap",
    title: "How to Prepare Your Venue for a Dance Floor Wrap Installation",
    excerpt:
      "A quick checklist to make installation day fast, smooth, and flawless — what your venue needs and what to expect.",
    date: "2026-03-28",
    author: "Houston Dance Floor Wraps",
    category: "Guides",
    readMinutes: 3,
    body: [
      {
        paragraphs: [
          "A great installation starts with a clean, flat surface. Vinyl dance floor wraps adhere best to smooth, hard floors — hardwood, tile, polished concrete, laminate, and most event flooring.",
        ],
      },
      {
        heading: "Pre-installation checklist",
        list: [
          "Confirm the floor is clean, dry, and free of debris",
          "Make sure the install area is clear of tables and chairs",
          "Share your final floor dimensions and a venue contact",
          "Allow access roughly 2–4 hours before guests arrive",
        ],
      },
      {
        paragraphs: [
          "Our crew handles the rest — measuring, aligning, applying, and finishing the edges for a seamless look. After your event, removal is quick and leaves no residue.",
        ],
      },
    ],
  },
  {
    slug: "are-dance-floor-wraps-slippery",
    title: "Are Vinyl Dance Floor Wraps Slippery or Safe to Dance On?",
    excerpt:
      "Safety is the #1 concern for planners. Here's how modern dance floor wraps are engineered for grip, traffic, and all-night dancing.",
    date: "2026-03-10",
    author: "Houston Dance Floor Wraps",
    category: "Guides",
    readMinutes: 3,
    body: [
      {
        paragraphs: [
          "It's a fair question — nobody wants a beautiful floor that's a hazard. The short answer: our wraps are designed specifically to be safe to dance on.",
        ],
      },
      {
        heading: "Engineered for grip",
        paragraphs: [
          "We finish every wrap with a textured, slip-resistant laminate rated for commercial foot traffic. This top layer protects the print and provides traction for shoes, heels, and bare feet alike.",
        ],
      },
      {
        heading: "Installed for safety",
        list: [
          "Edges are sealed flush to prevent trips",
          "Material lies flat with no bubbling or lifting",
          "Slip-resistant finish on every floor",
          "Tested for high-traffic dancing",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostSlugs() {
  return blogPosts.map((p) => p.slug);
}

export const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
