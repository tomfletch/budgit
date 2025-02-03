export function getOrdinal(n: number): string {
  if (n % 100 >= 11 && n % 100 <= 13) return `${n}th`;
  const ordinal = ["st", "nd", "rd"][(n % 10) - 1] ?? "th";
  return `${n}${ordinal}`;
}
