/**
 * TOUR PACKAGES
 * -------------
 * Add, remove or edit packages here. Each package auto-generates a card on the
 * home & packages pages. Images use free Unsplash photos — swap the URLs with
 * your own anytime (or drop files in /public and use "/my-image.jpg").
 */

export interface TourPackage {
  /** URL-safe unique id (used as anchor/link) */
  slug: string;
  title: string;
  /** Which region this belongs to */
  region: "Kashmir" | "Ladakh" | "Kashmir & Ladakh";
  /** e.g. "6 Days / 5 Nights" */
  duration: string;
  /** Starting (final, discounted) price in INR (number only) */
  priceFrom: number;
  /**
   * Optional discount percentage (e.g. 20 = 20% OFF).
   * When set, the card shows a struck-out original price + an "X% OFF" badge.
   * The original price is calculated automatically from priceFrom.
   */
  discountPercent?: number;
  /** Short summary shown on the card */
  summary: string;
  /** Bullet highlights */
  highlights: string[];
  /** Image URL (Unsplash, free to use) */
  image: string;
  /** Alt text for accessibility + SEO */
  imageAlt: string;
  /** Mark as featured to show on the homepage */
  featured?: boolean;
}

export const packages: TourPackage[] = [
  {
    slug: "kashmir-paradise-6d",
    title: "Kashmir Paradise Escape",
    region: "Kashmir",
    duration: "6 Days / 5 Nights",
    priceFrom: 24999,
    discountPercent: 25,
    summary:
      "Srinagar houseboats, the meadows of Gulmarg, Pahalgam valleys and a shikara ride on Dal Lake.",
    highlights: [
      "Deluxe houseboat stay on Dal Lake",
      "Gondola ride in Gulmarg",
      "Betaab & Aru Valley in Pahalgam",
      "Mughal Gardens tour",
    ],
    image:
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "Shikara boats on Dal Lake in Srinagar, Kashmir",
    featured: true,
  },
  {
    slug: "leh-ladakh-explorer-7d",
    title: "Leh Ladakh Explorer",
    region: "Ladakh",
    duration: "7 Days / 6 Nights",
    priceFrom: 32999,
    discountPercent: 20,
    summary:
      "High-altitude adventure across Leh, Nubra Valley, Pangong Lake and the world's highest motorable passes.",
    highlights: [
      "Pangong Tso lakeside camp",
      "Nubra Valley & Bactrian camels",
      "Khardung La pass",
      "Ancient monasteries of Leh",
    ],
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "Turquoise waters of Pangong Lake in Ladakh",
    featured: true,
  },
  {
    slug: "kashmir-ladakh-grand-11d",
    title: "Grand Kashmir & Ladakh",
    region: "Kashmir & Ladakh",
    duration: "11 Days / 10 Nights",
    priceFrom: 58999,
    discountPercent: 22,
    summary:
      "The ultimate Himalayan journey combining the lush valleys of Kashmir with the stark beauty of Ladakh.",
    highlights: [
      "Srinagar, Gulmarg & Pahalgam",
      "Sonamarg to Leh scenic drive",
      "Pangong & Nubra Valley",
      "Magnetic Hill & Sangam confluence",
    ],
    image:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "Snow-capped Himalayan mountains reflected in a lake",
    featured: true,
  },
  {
    slug: "kashmir-honeymoon-5d",
    title: "Kashmir Honeymoon Special",
    region: "Kashmir",
    duration: "5 Days / 4 Nights",
    priceFrom: 27999,
    discountPercent: 25,
    summary:
      "A romantic getaway with candle-lit houseboat dinners, private shikara rides and cosy mountain stays.",
    highlights: [
      "Private houseboat with candlelight dinner",
      "Gulmarg & Pahalgam sightseeing",
      "Couple shikara experience",
      "Handpicked romantic stays",
    ],
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "Romantic mountain lake getaway at golden hour in Kashmir",
  },
  {
    slug: "ladakh-bike-expedition-8d",
    title: "Ladakh Bike Expedition",
    region: "Ladakh",
    duration: "8 Days / 7 Nights",
    priceFrom: 38999,
    discountPercent: 20,
    summary:
      "For the thrill-seekers — ride the legendary Himalayan roads on a Royal Enfield with a support crew.",
    highlights: [
      "Royal Enfield motorcycle & fuel",
      "Backup vehicle & mechanic",
      "Manali–Leh highway",
      "Camping under the stars",
    ],
    image:
      "https://images.unsplash.com/photo-1591808216268-ce0b82787efe?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "Motorcyclist riding on a mountain road in Ladakh",
  },
  {
    slug: "srinagar-weekend-3d",
    title: "Srinagar Weekend Getaway",
    region: "Kashmir",
    duration: "3 Days / 2 Nights",
    priceFrom: 12999,
    discountPercent: 23,
    summary:
      "A quick, refreshing break in Srinagar — perfect for a long weekend of lakes, gardens and local cuisine.",
    highlights: [
      "Houseboat stay",
      "Shikara ride on Dal Lake",
      "Mughal Gardens",
      "Local Kashmiri Wazwan cuisine",
    ],
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=70",
    imageAlt: "Mughal garden with flowers overlooking a lake in Srinagar",
  },
];

export const featuredPackages = packages.filter((p) => p.featured);
