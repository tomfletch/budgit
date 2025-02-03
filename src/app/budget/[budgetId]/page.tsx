import { MonthlyPaymentsTable } from "@/components/MonthlyPaymentsTable";

export default function BudgetPage() {
  return (
    <div className="container m-auto">
      <h1>Budgit Page</h1>
      <MonthlyPaymentsTable />
    </div>
  );
}
