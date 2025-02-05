import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { budgetsTable } from "./budgets";

export const monthlyPaymentsTable = pgTable("monthly_payments", {
  id: serial().primaryKey(),
  budgetId: integer()
    .notNull()
    .references(() => budgetsTable.id, { onDelete: "cascade" }),
  type: varchar({ length: 255 }).notNull(),
  amount: integer().notNull(),
  dayOfMonth: integer(),
  company: varchar({ length: 255 }),
  reference: varchar({ length: 255 }),
  notes: text(),
  ...timestamps,
});

export const monthlyPaymentsRelations = relations(
  monthlyPaymentsTable,
  ({ one }) => ({
    budget: one(budgetsTable, {
      fields: [monthlyPaymentsTable.budgetId],
      references: [budgetsTable.id],
    }),
  }),
);
