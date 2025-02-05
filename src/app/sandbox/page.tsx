import { db } from "@/db/db";
import { budgetsTable, monthlyPaymentsTable } from "@/db/schema";
import { monthlyPayments } from "@/app/sandbox/mockData";

export default function SandboxPage() {
  async function createMonthlyPaymentsSeedData() {
    "use server";

    const [budget] = await db.insert(budgetsTable).values({}).returning();

    if (!budget) {
      throw new Error("Failed to create budget");
    }

    await db.insert(monthlyPaymentsTable).values(
      monthlyPayments.map((p) => ({
        ...p,
        budgetId: budget.id,
      })),
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
