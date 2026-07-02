/**
 * ============================================================================
 *  SITE CONFIGURATION  —  SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  Edit ANYTHING about the business here. Every page, the header, footer,
 *  SEO tags, WhatsApp button and social links read from this one file.
 *
 *  No coding knowledge required — just change the text between the quotes.
 * ============================================================================
 */

export interface SocialLink {
  /** Shown as the accessible label / tooltip */
  label: string;
  /** Full URL to the profile */
  href: string;
  /** Icon key — see src/components/Icon.astro for available icons */
  icon: "whatsapp" | "instagram" | "facebook" | "youtube" | "x" | "linkedin" | "email" | "phone";
}

export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  /* ---------------------------------------------------------------------- */
  /*  BUSINESS IDENTITY                                                     */
  /* ---------------------------------------------------------------------- */
  /** Public brand / company name */
  name: "Himalayan Escapes",
  /** Short tagline shown in the hero and meta title */
  tagline: "Journeys through Kashmir & Ladakh",
  /** One-line description used for SEO + hero subtext */
  description:
    "Curated, hassle-free tour packages across Jammu, Kashmir & Ladakh. Handpicked stays, expert local guides and unforgettable Himalayan adventures.",
  /** Legal / registered business name (used in footer + JSON-LD) */
  legalName: "Himalayan Escapes Tours & Travels",
  /** Year the business was founded (used in footer copyright range) */
  foundedYear: 2016,

  /** Canonical production URL — no trailing slash. UPDATE before going live. */
  url: "https://himalayanescapes.example",

  /* ---------------------------------------------------------------------- */
  /*  CONTACT DETAILS                                                       */
  /* ---------------------------------------------------------------------- */
  contact: {
    /** Primary contact email */
    email: "hello@himalayanescapes.example",
    /** Displayed phone number (human readable) */
    phone: "+91 98765 43210",
    /** Same number, digits only with country code — used for tel: & wa.me links */
    phoneRaw: "919876543210",
    /** WhatsApp number, digits only with country code */
    whatsapp: "919876543210",
    /** Pre-filled WhatsApp message */
    whatsappMessage: "Hi! I'd like to know more about your Kashmir & Ladakh tour packages.",
  },

  /** Physical address (used in footer + Local Business structured data) */
  address: {
    street: "Boulevard Road, Dal Lake",
    city: "Srinagar",
    state: "Jammu & Kashmir",
    postalCode: "190001",
    country: "India",
    /** Google Maps embed/link */
    mapUrl: "https://maps.google.com/?q=Dal+Lake+Srinagar",
  },

  /** Business hours shown on the contact page */
  hours: "Mon – Sun: 9:00 AM – 8:00 PM (IST)",

  /* ---------------------------------------------------------------------- */
  /*  SOCIAL LINKS  —  add/remove freely; they render everywhere            */
  /* ---------------------------------------------------------------------- */
  socials: [
    { label: "WhatsApp", href: "https://wa.me/919876543210", icon: "whatsapp" },
    { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { label: "Facebook", href: "https://facebook.com/", icon: "facebook" },
    { label: "YouTube", href: "https://youtube.com/", icon: "youtube" },
  ] as SocialLink[],

  /* ---------------------------------------------------------------------- */
  /*  NAVIGATION                                                            */
  /* ---------------------------------------------------------------------- */
  nav: [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "Custom Trip", href: "/custom-package" },
    { label: "Kashmir", href: "/destinations/kashmir" },
    { label: "Ladakh", href: "/destinations/ladakh" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],

  /* ---------------------------------------------------------------------- */
  /*  SEO DEFAULTS                                                          */
  /* ---------------------------------------------------------------------- */
  seo: {
    /** Appended after each page title: "Page Title | <titleSuffix>" */
    titleSuffix: "Himalayan Escapes",
    /** Default social share image (place file in /public) */
    defaultImage: "/og-default.jpg",
    /** Twitter/X handle for card attribution (optional) */
    twitterHandle: "@himalayanescapes",
    /** Default keywords */
    keywords: [
      "Kashmir tour packages",
      "Ladakh tour packages",
      "Jammu and Kashmir travel",
      "Srinagar tours",
      "Leh Ladakh trip",
      "Kashmir honeymoon packages",
      "India Himalaya travel agency",
    ],
    /** Language / locale */
    locale: "en_IN",
    lang: "en",
  },

  /* ---------------------------------------------------------------------- */
  /*  THEME  —  tweak brand colours (used via CSS variables)                */
  /* ---------------------------------------------------------------------- */
  theme: {
    primary: "#0f766e", // teal-700
    primaryDark: "#115e59",
    accent: "#f59e0b", // amber-500
  },
} as const;

/** Convenience helper: build the WhatsApp click-to-chat URL from config. */
export const whatsappUrl = () =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage,
  )}`;

export type SiteConfig = typeof siteConfig;
