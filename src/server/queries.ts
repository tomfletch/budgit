import { db } from "@/db/db";
import { monthlyPaymentsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export const queries = {
  getMonthlyPayments(budgetId: number) {
    return db
      .select()
      .from(monthlyPaymentsTable)
      .where(eq(monthlyPaymentsTable.budgetId, budgetId));
  },
  createMonthlyPayment(
    monthlyPayment: typeof monthlyPaymentsTable.$inferInsert,
  ) {
    console.log("inserting", monthlyPayment);
    return db.insert(monthlyPaymentsTable).values(monthlyPayment).returning();
  },
  deleteMonthlyPayment(id: number) {
    return db
      .delete(monthlyPaymentsTable)
      .where(eq(monthlyPaymentsTable.id, id));
  },
};
