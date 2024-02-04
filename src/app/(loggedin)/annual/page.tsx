import { unstable_noStore as noStore } from "next/cache";

export default async function AnnualPage() {
  noStore();

  return <>Annual Page</>;
}
