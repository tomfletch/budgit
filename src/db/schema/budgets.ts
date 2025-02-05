import { pgTable, serial } from "drizzle-orm/pg-core";
import { timestamps } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { monthlyPaymentsTable } from "./monthlyPayments";

export const budgetsTable = pgTable("budgets", {
  id: serial().primaryKey(),
  ...timestamps,
});

export const budgetsRelations = relations(budgetsTable, ({ many }) => ({
  monthlyPayments: many(monthlyPaymentsTable),
}));
