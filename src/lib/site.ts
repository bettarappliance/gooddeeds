export const site = {
  name: "Good Deeds",
  url: "https://www.gooddeeds.com",
  phone: "202-297-2432",
  email: "jack@gooddeeds.com",
};
export const journeys = [
  {
    title: "Buy thoughtfully.",
    label: "Buying a home",
    body: "Bring your priorities, budget, and timing. Start with the whole picture, including condition and the cost of making a home your own.",
    href: "/services/buy-a-home",
    action: "Plan your purchase",
  },
  {
    title: "Sell with a plan.",
    label: "Selling a home",
    body: "Decide what to repair, what to leave, and how to present your home. Focus your preparation on the work that matters.",
    href: "/services/sell-a-home",
    action: "Plan your sale",
  },
  {
    title: "Settle into a home.",
    label: "Furnished rentals",
    body: "Explore the property collection and ask about dates, lease terms, and what is included before choosing your next place.",
    href: "/services/rent-a-home",
    action: "Explore furnished rentals",
  },
];
export type Property = {
  slug: string;
  name: string;
  category: "Residential" | "Commercial";
  location: string;
  description: string;
  image?: string;
  gallery?: string[];
  source?: string;
  intent: string;
};
export const properties: Property[] = [
  {
    slug: "3618-rittenhouse",
    name: "3618 Rittenhouse",
    category: "Residential",
    image: "/properties/3618-rittenhouse-01.webp",
    gallery: ["/properties/3618-rittenhouse-01.webp"],
    location: "Chevy Chase · Washington, DC",
    description:
      "The Spanish-themed residence on the second and third floors of the Rittenhouse property. Contact Jack to discuss arrangements and future dates.",
    source:
      "https://www.zillow.com/homedetails/3618-Rittenhouse-St-NW-Washington-DC-20015/2062365596_zpid/",
    intent: "Rent",
  },
  {
    slug: "3620-rittenhouse",
    name: "3620 Rittenhouse",
    category: "Residential",
    image: "/properties/3620-rittenhouse-03.webp",
    gallery: ["/properties/3620-rittenhouse-03.webp"],
    location: "Chevy Chase · Washington, DC",
    description:
      "The downstairs, first-floor residence at the Rittenhouse property in Chevy Chase. Ask Jack about the home, arrangements, and future dates.",
    source:
      "https://www.zillow.com/homedetails/3620-Rittenhouse-St-NW-Washington-DC-20015/448825_zpid/",
    intent: "Rent",
  },
  {
    slug: "3420-patterson",
    name: "3420 Patterson",
    category: "Residential",
    image: "/properties/3420-patterson-01.webp",
    gallery: ["/properties/3420-patterson-01.webp", "/properties/3420-patterson-02.webp", "/properties/3420-patterson-03.webp", "/properties/3420-patterson-04.webp", "/properties/3420-patterson-05.webp"],
    location: "Chevy Chase · Washington, DC",
    description:
      "A furnished colonial with space for everyday living and working from home. Rental inquiries begin with dates and lease length; stays require at least 31 nights.",
    source:
      "https://www.zillow.com/homedetails/3420-Patterson-St-NW-Washington-DC-20015/452429_zpid/",
    intent: "Rent",
  },
  {
    slug: "5815-nevada",
    name: "5815 Nevada",
    category: "Residential",
    image: "/properties/5815-nevada-01.webp",
    gallery: ["/properties/5815-nevada-01.webp", "/properties/5815-nevada-02.webp", "/properties/5815-nevada-03.webp", "/properties/5815-nevada-04.webp", "/properties/5815-nevada-05.webp"],
    location: "Chevy Chase · Washington, DC",
    description:
      "A welcoming home with a porch and outdoor space. Part of the residential portfolio; ask about future rental opportunities.",
    source:
      "https://www.zillow.com/homedetails/5815-Nevada-Ave-NW-Washington-DC-20015/452418_zpid/",
    intent: "Rent",
  },
  {
    slug: "2215-reedie",
    name: "2215 Reedie",
    category: "Residential",
    location: "Wheaton · Maryland",
    description:
      "A residential renovation project reflecting a practical approach to space, improvements, and long-term property value.",
    source:
      "https://www.zillow.com/homedetails/2215-Reedie-Dr-Wheaton-MD-20902/37303299_zpid/",
    intent: "General",
  },
  {
    slug: "ennals",
    name: "2515 & 2517 Ennalls Avenue",
    category: "Commercial",
    location: "Silver Spring, MD 20902",
    description:
      "A commercial property in the Good Deeds portfolio. Contact Jack for property-specific information and leasing inquiries.",
    intent: "General",
  },
  {
    slug: "wheatley",
    name: "10503 Wheatley Street",
    category: "Commercial",
    location: "Kensington, MD 20895",
    description:
      "A commercial property on Wheatley Street, with space supporting local business activity. Ask Jack about the property and future possibilities.",
    intent: "General",
  },
];
