import { getServerAuthSession } from "~/server/auth";
import { SignOutButton } from "./SignOutButton";

export async function Header() {
  const session = await getServerAuthSession();

  if (!session?.user) {
    return null;
  }

  return (
    <div className="flex h-16 items-center justify-end border-b border-slate-200 p-6 drop-shadow-sm">
      <div className="flex-1 lg:hidden">budgit</div>
      <div>{session.user.name}</div>
      <SignOutButton />
    </div>
  );
}
