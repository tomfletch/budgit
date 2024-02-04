import Link from "next/link";

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 hidden w-72 flex-col bg-slate-800 text-slate-100 lg:flex">
      <div className="flex h-16 items-center px-6">budgit</div>
      <ul className="p-6">
        <li>
          <Link
            className="block rounded px-4 py-2 hover:bg-slate-700"
            href="summary"
          >
            Summary
          </Link>
        </li>
        <li>
          <Link
            className="block rounded px-4 py-2 hover:bg-slate-700"
            href="monthly"
          >
            Monthly Payments
          </Link>
        </li>
        <li>
          <Link
            className="block rounded px-4 py-2 hover:bg-slate-700"
            href="annual"
          >
            Annual Payments
          </Link>
        </li>
      </ul>
    </div>
  );
}
