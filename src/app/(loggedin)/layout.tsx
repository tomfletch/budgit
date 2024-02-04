import { Sidebar } from "./_components/Sidebar";
import { Header } from "./_components/Header";
import { ReactNode } from "react";

export default async function LoggedInLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="pl-0 lg:pl-72">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </>
  );
}
