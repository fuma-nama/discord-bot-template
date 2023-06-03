# Database

This project uses Drizzle ORM with Vercel Postgres.

Read [their docs](https://orm.drizzle.team/kit-docs/overview) for list of commands supported by Drizzle Kit.

### Build

This package needs to be built before using it because the Discord Bot package relies on it.

## Push Changes

Run the built-in migrate script:

```
pnpm db:push
```

## Project Structure

| Name           | Path                    |
| -------------- | ----------------------- |
| Schema         | `./src/schema.ts`       |
| Client         | `./src/db.ts`           |
| Migrate Script | `./scripts/migrate.mjs` |
| Build Output   | `./dist`                |

## Customize

Despite Vercel Postgres, You may want to use another database provider, such as PlanetScale (MySQL) instead.

You need to update:

-   The `db:push` command in `package.json`
-   Migrate script in `./scripts/migrate.mjs`
-   Database client & schema in `./src/db.ts` and `./src/schema.ts`
