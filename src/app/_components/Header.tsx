"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex h-16 items-center justify-end border-b border-slate-200 p-6 drop-shadow-sm">
      <div className="flex-1">budgit</div>
      <Link
        className="rounded bg-sky-900 px-4 py-2 text-white hover:bg-sky-800"
        href="/sign-in"
      >
        Sign In
      </Link>
    </div>
  );
}
