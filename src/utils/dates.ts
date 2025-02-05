export const DAYS_OF_MONTH = Array.from({ length: 31 }, (_, i) => i + 1);

export function getOrdinal(n: number): string {
  if (n % 100 >= 11 && n % 100 <= 13) return `${n}th`;
  const ordinal = ["st", "nd", "rd"][(n % 10) - 1] ?? "th";
  return `${n}${ordinal}`;
}
