import { unstable_noStore as noStore } from "next/cache";
import { Header } from "../../_components/Header";
import { SignInWithGoogle } from "./_components/SignInWithGoogle";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  noStore();

  const session = await getServerAuthSession();

  if (session?.user) {
    console.log(session.user);
    redirect("/summary");
  }

  return (
    <>
      <Header />
      <main>
        <h1>Sign In</h1>
        <div>
          <SignInWithGoogle />
        </div>
      </main>
    </>
  );
}
