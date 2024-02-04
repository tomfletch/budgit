import { unstable_noStore as noStore } from "next/cache";

export default async function SummaryPage() {
  noStore();

  return <>Summary Page</>;
}
