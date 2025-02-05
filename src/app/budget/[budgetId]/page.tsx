import { AddMonthlyPaymentDialog } from "@/components/AddMonthlyPaymentDialog";
import { MonthlyPaymentsTable } from "@/components/MonthlyPaymentsTable";
import { queries } from "@/server/queries";

type BudgetPageProps = {
  params: Promise<{
    budgetId: string;
  }>;
};

export default async function BudgetPage({ params }: BudgetPageProps) {
  const { budgetId } = await params;

  const monthlyPayments = await queries.getMonthlyPayments(parseInt(budgetId));

  return (
    <div className="container m-auto">
      <h1>Budgit Page</h1>
      <MonthlyPaymentsTable monthlyPayments={monthlyPayments} />
      <AddMonthlyPaymentDialog budgetId={parseInt(budgetId)} />
    </div>
  );
}
