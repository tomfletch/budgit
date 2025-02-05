"use client";
import { deleteMonthlyPayment } from "@/server/actions";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";

type DeleteMonthlyPaymentButtonProps = {
  monthlyPaymentId: number;
};

export function DeleteMonthlyPaymentButton({
  monthlyPaymentId,
}: DeleteMonthlyPaymentButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => deleteMonthlyPayment(monthlyPaymentId)}
    >
      <TrashIcon />
    </Button>
  );
}
