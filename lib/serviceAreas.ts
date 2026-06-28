export type AreaType = "primary" | "metro" | "state";

export interface ServiceArea {
  slug: string;
  name: string; // e.g. "Houston, TX" or "Florida"
  city?: string;
  state: string; // full state name
  stateAbbr?: string;
  type: AreaType;
  headline: string;
  blurb: string;
  // Localized SEO body paragraphs
  intro: string;
  // Nearby cities / neighborhoods for local relevance
  nearby: string[];
  // Common venue types or context
  venues: string[];
  popularEvents: string[];
}

const venuesDefault = [
  "Wedding venues & ballrooms",
  "Hotels & resorts",
  "Country clubs",
  "Banquet halls",
  "Corporate event spaces",
  "Private estates & backyards",
];

const eventsDefault = [
  "Weddings & receptions",
  "Quinceañeras & Sweet 16s",
  "Corporate galas & product launches",
  "Birthday & anniversary parties",
  "Holiday & New Year's events",
  "Trade shows & brand activations",
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: "houston-tx",
    name: "Houston, TX",
    city: "Houston",
    state: "Texas",
    stateAbbr: "TX",
    type: "primary",
    headline: "Custom Vinyl Dance Floor Wraps in Houston, TX",
    blurb:
      "Our home turf. Same-week consultations, local install crews, and the fastest turnaround in the Houston metro.",
    intro:
      "Houston Dance Floor Wraps is proudly based in Houston, TX. As a local company, we offer in-person consultations, hand-installed monogram and full-floor wraps, and rush turnaround for events across Greater Houston. From wedding monograms at The Astorian to full brand takeovers downtown, we make your floor the centerpiece of the room.",
    nearby: [
      "Katy",
      "Sugar Land",
      "The Woodlands",
      "Pearland",
      "Cypress",
      "Pasadena",
      "Spring",
      "Conroe",
      "Galveston",
      "Humble",
    ],
    venues: venuesDefault,
    popularEvents: eventsDefault,
  },
  {
    slug: "austin-tx",
    name: "Austin, TX",
    city: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    type: "metro",
    headline: "Vinyl Dance Floor Wraps in Austin, TX",
    blurb:
      "Wedding monograms and branded floors delivered and installed across the Austin area.",
    intro:
      "We bring custom vinyl dance floor wraps to Austin, TX for weddings, SXSW activations, and corporate events. Whether you're celebrating in a Hill Country venue or a downtown rooftop, we design, print, and install a floor that matches your theme perfectly.",
    nearby: ["Round Rock", "Cedar Park", "Georgetown", "San Marcos", "Pflugerville", "Dripping Springs"],
    venues: venuesDefault,
    popularEvents: eventsDefault,
  },
  {
    slug: "san-antonio-tx",
    name: "San Antonio, TX",
    city: "San Antonio",
    state: "Texas",
    stateAbbr: "TX",
    type: "metro",
    headline: "Vinyl Dance Floor Wraps in San Antonio, TX",
    blurb:
      "Custom monogram and full-coverage dance floor wraps for San Antonio weddings and events.",
    intro:
      "From Riverwalk celebrations to Hill Country weddings, Houston Dance Floor Wraps delivers custom vinyl dance floor wraps throughout San Antonio, TX. We handle design, printing, delivery, and professional installation so your floor looks flawless on the big day.",
    nearby: ["New Braunfels", "Schertz", "Boerne", "Helotes", "Converse", "Seguin"],
    venues: venuesDefault,
    popularEvents: eventsDefault,
  },
  {
    slug: "dallas-tx",
    name: "Dallas, TX",
    city: "Dallas",
    state: "Texas",
    stateAbbr: "TX",
    type: "metro",
    headline: "Vinyl Dance Floor Wraps in Dallas, TX",
    blurb:
      "Premium custom dance floor wraps for Dallas weddings, galas, and brand activations.",
    intro:
      "Houston Dance Floor Wraps serves the Dallas, TX metro with show-stopping custom vinyl dance floor wraps. Perfect for luxury weddings, corporate galas, and nightlife events, our wraps transform any venue floor into a custom-branded statement piece.",
    nearby: ["Plano", "Frisco", "Irving", "Arlington", "Garland", "McKinney", "Richardson"],
    venues: venuesDefault,
    popularEvents: eventsDefault,
  },
  {
    slug: "fort-worth-tx",
    name: "Fort Worth, TX",
    city: "Fort Worth",
    state: "Texas",
    stateAbbr: "TX",
    type: "metro",
    headline: "Vinyl Dance Floor Wraps in Fort Worth, TX",
    blurb:
      "Custom vinyl dance floor wraps for Fort Worth weddings, rodeo galas, and corporate events.",
    intro:
      "We design and install custom vinyl dance floor wraps across Fort Worth, TX. From classic wedding monograms to bold western-themed gala floors, our team delivers a durable, slip-resistant, photo-ready floor for any venue in the area.",
    nearby: ["Arlington", "Keller", "Southlake", "Grapevine", "Mansfield", "Burleson"],
    venues: venuesDefault,
    popularEvents: eventsDefault,
  },
  // Nationwide states (ship + install partner / shipped DIY-ready kits)
  ...[
    { name: "Oklahoma", abbr: "OK" },
    { name: "Utah", abbr: "UT" },
    { name: "Louisiana", abbr: "LA" },
    { name: "Florida", abbr: "FL" },
    { name: "Georgia", abbr: "GA" },
    { name: "Colorado", abbr: "CO" },
    { name: "Missouri", abbr: "MO" },
    { name: "Ohio", abbr: "OH" },
    { name: "California", abbr: "CA" },
    { name: "Illinois", abbr: "IL" },
    { name: "Arizona", abbr: "AZ" },
    { name: "Kansas", abbr: "KS" },
    { name: "Tennessee", abbr: "TN" },
  ].map(
    (s): ServiceArea => ({
      slug: s.name.toLowerCase().replace(/\s+/g, "-"),
      name: s.name,
      state: s.name,
      stateAbbr: s.abbr,
      type: "state",
      headline: `Vinyl Dance Floor Wraps in ${s.name}`,
      blurb: `Custom-printed vinyl dance floor wraps designed in Houston and shipped to ${s.name} as install-ready kits.`,
      intro: `Houston Dance Floor Wraps ships custom vinyl dance floor wraps nationwide to ${s.name}. We design and print your wrap to your exact floor dimensions, then deliver an install-ready kit with step-by-step instructions — or coordinate professional installation for larger events. Wherever you're celebrating in ${s.name}, we make sure your dance floor is the highlight of the night.`,
      nearby: [],
      venues: venuesDefault,
      popularEvents: eventsDefault,
    })
  ),
];

export const primaryArea = serviceAreas.find((a) => a.type === "primary")!;
export const texasMetros = serviceAreas.filter((a) => a.type === "metro");
export const nationwideStates = serviceAreas.filter((a) => a.type === "state");

export function getAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getAreaSlugs() {
  return serviceAreas.map((a) => a.slug);
}
