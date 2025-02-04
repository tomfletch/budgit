import { db } from "@/db";
import { budgetsTable, monthlyPaymentsTable } from "@/db/schema";
import { monthlyPayments } from "@/mockData";

export default function SandboxPage() {
  async function createMonthlyPaymentsSeedData() {
    "use server";

    await db.insert(budgetsTable).values({ id: 1 });

    await db.insert(monthlyPaymentsTable).values(
      monthlyPayments.map((p) => ({
        ...p,
        budgetId: 1,
      }))
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl">Sandbox</h1>
      <form action={createMonthlyPaymentsSeedData}>
        <button type="submit">Create monthly payments seed data</button>
      </form>
    </div>
  );
}
