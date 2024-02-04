"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/trpc/react";

export function AddMonthlyPaymentForm() {
  const { mutate } = api.monthlyPayment.create.useMutation();

  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [day, setDay] = useState("");
  const [company, setCompany] = useState("");
  const [reference, setReference] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        mutate({
          sheetId: 1, // TODO: Find this out dynamically
          type,
          amount: Number(amount) * 100,
          day: Number(day),
          company,
          reference,
          notes,
        });
      }}
    >
      <h3>Add a Monthly Payment</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="type">Type</Label>
        <Input
          type="text"
          id="type"
          placeholder=""
          value={type}
          onChange={(e) => setType(e.currentTarget.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="amount">Amount</Label>
        <Input
          type="text"
          id="amount"
          placeholder="£10.00"
          value={amount}
          onChange={(e) => setAmount(e.currentTarget.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="day">Day of the Month</Label>
        <Input
          type="number"
          id="day"
          min="1"
          max="31"
          value={day}
          onChange={(e) => setDay(e.currentTarget.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="company">Company</Label>
        <Input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.currentTarget.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="reference">Reference</Label>
        <Input
          type="text"
          id="reference"
          value={reference}
          onChange={(e) => setReference(e.currentTarget.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.currentTarget.value)}
        />
      </div>
      <div>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}
