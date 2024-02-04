import { unstable_noStore as noStore } from "next/cache";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { AddMonthlyPaymentForm } from "./_components/AddMonthlyPaymentForm";
import { MonthlyPaymentsTable } from "./_components/MonthlyPaymentsTable";

export default async function MonthlyPage() {
  noStore();

  return (
    <>
      <h2>Monthly Payments</h2>
      <MonthlyPaymentsTable />
      <AddMonthlyPaymentForm />
    </>
  );
}
