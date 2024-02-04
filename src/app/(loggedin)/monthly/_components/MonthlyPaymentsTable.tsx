"use client";

import { formatCurrency } from "~/lib/formatters";
import { api } from "~/trpc/react";

export function MonthlyPaymentsTable() {
  const { data: monthlyPayments } = api.monthlyPayment.get.useQuery();

  return (
    <table>
      <thead>
        <tr>
          <th className="text-left">Type</th>
          <th>Amount</th>
          <th className="text-center">Day</th>
        </tr>
      </thead>
      <tbody>
        {monthlyPayments?.map((mp) => (
          <tr key={mp.id}>
            <td>{mp.type}</td>
            <td>
              <div className="flex justify-between">
                <span>£</span>
                <span>{formatCurrency(mp.amount)}</span>
              </div>
            </td>
            <td className="text-center">{mp.day}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
