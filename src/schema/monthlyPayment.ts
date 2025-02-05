import { z } from "zod";

export const monthlyPaymentSchema = z.object({
  type: z.string().min(1).max(50),
  amount: z.number().int(),
  dayOfMonth: z.number().min(1).max(31).optional(),
  company: z.string().max(50).optional(),
  reference: z.string().max(50).optional(),
  notes: z.string().max(255).optional(),
});

export const monthlyPaymentFormSchema = monthlyPaymentSchema
  .omit({ amount: true })
  .extend({
    amount: z.string().min(1).max(8),
  });

export type MonthlyPayment = z.infer<typeof monthlyPaymentSchema>;
export type MonthlyPaymentForm = z.infer<typeof monthlyPaymentFormSchema>;
