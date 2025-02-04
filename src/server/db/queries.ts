import { db } from "@/server/db";
import { monthlyPaymentsTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const queries = {
  getMonthlyPayments(budgetId: number) {
    return db
      .select()
      .from(monthlyPaymentsTable)
      .where(eq(monthlyPaymentsTable.budgetId, budgetId));
  },
};
