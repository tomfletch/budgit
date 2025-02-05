"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { DAYS_OF_MONTH, getOrdinal } from "@/utils/dates";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import {
  MonthlyPaymentForm,
  monthlyPaymentFormSchema,
} from "@/schema/monthlyPayment";
import { createMonthlyPayment } from "@/server/actions";

type AddMonthlyPaymentDialogProps = {
  budgetId: number;
};

export function AddMonthlyPaymentDialog({
  budgetId,
}: AddMonthlyPaymentDialogProps) {
  const form = useForm<MonthlyPaymentForm>({
    resolver: zodResolver(monthlyPaymentFormSchema),
  });

  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(data: MonthlyPaymentForm) {
    await createMonthlyPayment(budgetId, {
      ...data,
      amount: Math.round(parseFloat(data.amount) * 100),
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Monthly Payment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Monthly Payment</DialogTitle>
          <DialogContent>
            <Form {...form}>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 my-4"
              >
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Type
                        <RequiredMarker />
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Amount
                          <RequiredMarker />
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dayOfMonth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(
                              value === "unknown" ? undefined : parseInt(value),
                            )
                          }
                          defaultValue={field.value?.toString() ?? "unknown"}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Day of the Month" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="unknown">Unknown</SelectItem>
                            {DAYS_OF_MONTH.map((day) => (
                              <SelectItem key={day} value={day.toString()}>
                                {getOrdinal(day)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="reference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reference</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Add Monthly Payment</Button>
              </form>
            </Form>
          </DialogContent>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function RequiredMarker() {
  return <span className="text-red-400">*</span>;
}
