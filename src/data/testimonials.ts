/**
 * TESTIMONIALS
 * ------------
 * Real customer reviews. Edit freely — shown on the homepage.
 */

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number; // 1-5
}

export const testimonials: Testimonial[] = [
  {
    name: "Ananya & Rohit",
    location: "Mumbai",
    quote:
      "Our Kashmir honeymoon was flawless. The houseboat, the shikara dinner, every little detail was taken care of. Truly a paradise!",
    rating: 5,
  },
  {
    name: "Vikram S.",
    location: "Bengaluru",
    quote:
      "The Ladakh bike expedition was the adventure of a lifetime. Great bikes, a solid support crew and unbelievable landscapes.",
    rating: 5,
  },
  {
    name: "The Sharma Family",
    location: "Delhi",
    quote:
      "Travelling with kids and elderly parents can be stressful, but the team made our Grand Kashmir & Ladakh trip smooth and comfortable.",
    rating: 5,
  },
];
