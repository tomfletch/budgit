import { env } from "@/data/env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(env.DATABASE_URL, { prepare: false });
export const db = drizzle(client);
