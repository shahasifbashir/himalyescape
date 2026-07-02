/** Format a number as Indian Rupees, e.g. 24999 -> "₹24,999". */
export const inr = (amount: number): string =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

/**
 * Given a final (discounted) price and a discount percentage, work out the
 * "original" price to display with a strikethrough. Rounded to a clean figure.
 * e.g. finalPrice 24999 @ 25% off -> ~33332 -> rounded to 33499.
 */
export const originalPrice = (finalPrice: number, discountPercent: number): number => {
  const raw = finalPrice / (1 - discountPercent / 100);
  // Round up to the nearest ₹500 for a natural-looking "MRP".
  return Math.ceil(raw / 500) * 500 - 1;
};
