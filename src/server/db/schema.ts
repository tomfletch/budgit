import { sql } from "drizzle-orm";
import {
  int,
  singlestoreTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/singlestore-core";

const timestamps = {
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().default(
    sql`CURRENT_TIMESTAMP(6) on update CURRENT_TIMESTAMP(6)`
  ),
};

export const budgetsTable = singlestoreTable("budgets", {
  id: int().primaryKey(),
  ...timestamps,
});

export const monthlyPaymentsTable = singlestoreTable("monthly_payments", {
  id: int().primaryKey(),
  budgetId: int().notNull(),
  type: varchar({ length: 255 }).notNull(),
  amount: int({ unsigned: true }).notNull(),
  dayOfMonth: int({ unsigned: true }),
  company: varchar({ length: 255 }),
  reference: varchar({ length: 255 }),
  notes: text(),
  ...timestamps,
});
