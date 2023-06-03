import type { Config } from "drizzle-kit";

export default {
    schema: "./packages/db/schema.ts",
    out: "./packages/db/drizzle",
    connectionString: `${process.env.POSTGRES_URL_NON_POOLING}?sslmode=require`,
} satisfies Config;
