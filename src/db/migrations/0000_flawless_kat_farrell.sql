CREATE TABLE "budgets" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "monthly_payments" (
	"id" serial PRIMARY KEY NOT NULL,
	"budgetId" integer NOT NULL,
	"type" varchar(255) NOT NULL,
	"amount" integer NOT NULL,
	"dayOfMonth" integer,
	"company" varchar(255),
	"reference" varchar(255),
	"notes" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "monthly_payments" ADD CONSTRAINT "monthly_payments_budgetId_budgets_id_fk" FOREIGN KEY ("budgetId") REFERENCES "public"."budgets"("id") ON DELETE cascade ON UPDATE no action;