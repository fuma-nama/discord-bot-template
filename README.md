This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Discord Bot Template

🚧 This project is currently in active development

## Features

-   [x] Node.js Discord Bot with discord-fp
-   [x] Kafka Event Streaming
-   [x] Dashboard using Next.js App Router
-   [ ] Documentation Website (Work in progress)

## Project Structure

This project is using Turborepo, you can learn more about it from their [documentation](https://turbo.build/).

| Package                          | Description         |
| -------------------------------- | ------------------- |
| [apps/web](./apps/web/README.md) | Web App             |
| [apps/bot](./apps/bot/README.md) | Discord Bot         |
| packages/config                  | Configuration Files |

## Getting Started

You can run the project in development mode

```
pnpm run dev
```

Production Build

```
pnpm run build
```

### Environment Variables

Required variables are listed in [.env.example](/.env.example).

This project uses [Upstash Kafka](https://upstash.com/), you can register an account and get required credentials there.

Notice that you need to update Prisma schema as your database change.

## Scalability

### Don't depend on "Server"

We use Kafka for handling real operations via dashboard, so that no requests will be sent to the server that hosts the discord bot directly.

This brings a faster load speed and more better stability because the dashboad will still works even if the discord bot is temporarily unavailable.

### Serverless Ready

The dashboard is built for serverless, you are able to deploy it to any serverless hosting platforms such as Vercel, Azure and AWS.

Notice that the Discord bot server can only be deployed to traditional Node.js Server hosting services, serverless environment is incompatible.
