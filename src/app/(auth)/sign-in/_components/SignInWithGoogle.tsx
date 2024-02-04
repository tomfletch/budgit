"use client";
import { signIn } from "next-auth/react";

export function SignInWithGoogle() {
  return (
    <button onClick={() => signIn("google", { callbackUrl: "/summary" })}>
      Sign in with Google
    </button>
  );
}
