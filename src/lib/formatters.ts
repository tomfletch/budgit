const CurrencyFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatCurrency(value: number) {
  return CurrencyFormatter.format(value / 100);
}
