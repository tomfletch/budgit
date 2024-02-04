import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { monthlyPayments } from "~/server/db/schema";

export const monthlyPaymentRouter = createTRPCRouter({
  get: protectedProcedure.query(({ ctx }) => {
    return ctx.db.query.monthlyPayments.findMany();
  }),
  create: protectedProcedure
    .input(
      z.object({
        sheetId: z.number(),
        type: z.string().min(1),
        amount: z.number().int(),
        day: z.number().int().gte(1).lte(31),
        company: z.string(),
        reference: z.string(),
        notes: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      console.log("running insert");
      await ctx.db.insert(monthlyPayments).values({
        type: input.type,
        amount: input.amount,
        day: input.day,
        company: input.company,
        reference: input.reference,
        notes: input.notes,
        sheetId: input.sheetId,
      });
      console.log("insert complete");
    }),
});
