import { unstable_noStore as noStore } from "next/cache";
import { Header } from "./_components/Header";

export default async function HomePage() {
  noStore();

  return (
    <>
      <Header />
      <main></main>
    </>
  );
}
