"use server";

import { MonthlyPayment, monthlyPaymentSchema } from "@/schema/monthlyPayment";
import { queries } from "./queries";

export async function createMonthlyPayment(
  budgetId: number,
  data: MonthlyPayment,
) {
  try {
    const monthlyPayment = monthlyPaymentSchema.parse(data);
    await queries.createMonthlyPayment({ ...monthlyPayment, budgetId });
    return {
      error: false,
      message: "Successfully created the monthly payment",
    };
  } catch (error) {
    console.error(error);
    return {
      error: true,
      message: "There was an error creating the monthly payment",
    };
  }
}

export async function deleteMonthlyPayment(id: number) {
  try {
    await queries.deleteMonthlyPayment(id);
    return {
      error: false,
      message: "Successfully deleted the monthly payment",
    };
  } catch (error) {
    console.error(error);
    return {
      error: true,
      message: "There was an error deleting the monthly payment",
    };
  }
}
