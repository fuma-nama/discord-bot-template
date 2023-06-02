# Discord Bot Template

The powerful discord bot template with Next.js Dashboard and Discord.js v14.

## Features

-   [x] Node.js Discord Bot with discord-fp
-   [x] Kafka Event Streaming
-   [x] Dashboard using Next.js App Router
-   [x] Documentation Website

## Quick Start

**Demo:** https://money-shark.vercel.app <br/>

### Installation

Clone the project:

```
git clone https://github.com/SonMooSans/discord-bot-template.git
```

Install dependencies, notice that this project uses [pNPM](https://pnpm.io/) as package manager:

```
pnpm i
```

### Commands

This project is a monorepo, You can run the project in development mode:

```
pnpm run dev
```

Create Production Build:

```
pnpm run build
```

### Discord OAuth

Add `https://<app_url>/api/auth/callback` as a Redirect Uri in Developer Portal.

### Environment Variables

Required variables are listed in [.env.example](/.env.example).

This project uses [Upstash Kafka](https://upstash.com/), you can register an account and get required credentials there.

Notice that you need to update Prisma schema as your database change.

### Database

This project uses [Prisma ORM](https://www.prisma.io/), you may migrate to other ORMs such as Drizzle ORM if you wanted.

Push database changes:

```
pnpm run db:push
```

Please make sure all environment variables are all settled before running the command.

Learn More about Prisma ORM from their [documentation](https://www.prisma.io/docs/getting-started/quickstart).

## Project Structure

This project is using Turborepo, you can learn more about it from their [documentation](https://turbo.build/).

| Package                                    | Description                        |
| ------------------------------------------ | ---------------------------------- |
| [apps/web](./apps/web/README.md)           | Web App + Documentation (Frontend) |
| [apps/bot](./apps/bot/README.md)           | Discord Bot                        |
| [packages/docs](./packages/docs/README.md) | Documentation (Content + Utils)    |
| [packages/ui](./packages/ui/)              | Components & Utils                 |
| packages/config                            | Configuration Files                |

_Learn more about these packages by reading their README.md file_

## Security

It'll checks for user permissions before doing any operations.

You can enable permission checking in a Server Action or Route Handler by doing:

```ts
import { checkPermissions } from "@/utils/actions/permissions";

export async function myAction() {
    "use server";

    //notice that it is an async function
    await checkPermissions();
}
```

## Scalability

### Don't depend on "Server"

We use Kafka for handling real operations via dashboard, so that no requests will be sent to the server that hosts the discord bot directly.

This brings a faster load speed and more better stability because the dashboad will still works even if the discord bot is temporarily unavailable.

### Serverless Ready

The dashboard is built for serverless, you are able to deploy it to any serverless hosting platforms such as Vercel, Azure and AWS.

Notice that the Discord bot server can only be deployed to traditional Node.js Server hosting services, serverless environment is incompatible.

## Typesafe

Typesafe is the key to maintain a large codebase. Although Javascript + JSDocs is perfect for libraries, it's still recommended to use Typescript for writing applications.

This template is fully written in Typescript, all the type errors will be reported at build time.

## Deploy

It is easy to deploy this application.

### Web App

The fastest way to deploy Next.js applications is to use [Vercel](https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app).

### Bot Server

Any hosting platform that supports Node.js, such as [AWS](https://aws.amazon.com/getting-started/hands-on/deploy-nodejs-web-app/), [Render](https://render.com/), [Railway](https://railway.app/).
