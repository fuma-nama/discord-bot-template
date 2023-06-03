import type { Config } from "drizzle-kit";

if (process.env.POSTGRES_URL_NON_POOLING == null) {
    throw new Error("Missing environment variable: POSTGRES_URL_NON_POOLING");
}

export default {
    schema: "./src/schema.ts",
    out: "./drizzle",
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
} satisfies Config;
