import { formatCurrency } from "@/utils/currency";
import { getOrdinal } from "@/utils/dates";
import { monthlyPaymentsTable } from "@/db/schema";
import { DeleteMonthlyPaymentButton } from "./DeleteMonthlyPaymentButton";

type MonthlyPaymentsTableProps = {
  monthlyPayments: (typeof monthlyPaymentsTable.$inferSelect)[];
};

export async function MonthlyPaymentsTable({
  monthlyPayments,
}: MonthlyPaymentsTableProps) {
  return (
    <table className="w-full text-sm">
      <thead className="border-b border-gray-500 text-muted-foreground uppercase text-xs">
        <tr>
          <td className="px-4 py-2">Type</td>
          <td className="px-4 py-2 text-right">Amount</td>
          <td className="px-4 py-2">Date</td>
          <td className="px-4 py-2">Company</td>
          <td className="px-4 py-2">Reference</td>
          <td className="px-4 py-2">Notes</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {monthlyPayments.map((monthlyPayment) => (
          <tr key={monthlyPayment.id} className="even:bg-muted">
            <td className="px-4 py-2">{monthlyPayment.type}</td>
            <td className="px-4 py-2 text-right">
              {formatCurrency(monthlyPayment.amount)}
            </td>
            <td className="px-4 py-2">
              {!!monthlyPayment.dayOfMonth &&
                getOrdinal(monthlyPayment.dayOfMonth)}
            </td>
            <td className="px-4 py-2">{monthlyPayment.company}</td>
            <td className="px-4 py-2">{monthlyPayment.reference}</td>
            <td className="px-4 py-2">{monthlyPayment.notes}</td>
            <td>
              <DeleteMonthlyPaymentButton
                monthlyPaymentId={monthlyPayment.id}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
