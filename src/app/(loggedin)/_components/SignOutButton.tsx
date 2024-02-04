"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="rounded bg-sky-900 px-4 py-2 text-white hover:bg-sky-800"
    >
      Sign Out
    </button>
  );
}
