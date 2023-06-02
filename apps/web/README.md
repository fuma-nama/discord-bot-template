# Dashboard Template

The Powerful Dashboard with Accessibility and insane User Experience.
Built with Next.js App Router.

## Getting Started

You can run the project in development mode

```
pnpm run dev
```

Production Build

```
pnpm run build
```

Notice that this project uses Turborepo, you can learn more about it from their [documentation](https://turbo.build/)

## Examples

The template includes some implemented example features, they are:

| Feature         | Description                                     |
| --------------- | ----------------------------------------------- |
| Storage         | A simple storage that stores keynotes           |
| Welcome Message | Send a message when a new user joined the guild |

The other features are showcases for different components such as Chart, Select and Form.

## Project Structure

Learn more from [Next.js Docs](https://nextjs.org/docs/getting-started/project-structure).

| Path                    | Description                           |
| ----------------------- | ------------------------------------- |
| ./components            | UI Components                         |
| ./data/features.ts      | Information of features               |
| ./app                   | Pages & Route Handlers                |
| ./app/(info)            | Static Pages (Home & Documentation)   |
| ./app/dashboard         | App Dashboard Pages                   |
| ./app/api               | API Handlers                          |
| ./app/api/auth/callback | Discord OAuth2 callback handler       |
| ./public                | Pubilc Assets                         |
| ./utils                 | Utilities, 3rd party services clients |

## Next.js

This project is built with [Next.js App Router](https://nextjs.org/docs), and deeply using Server Side Rendering. It might be essential to learn more about it.

### Route Handler

it uses Route Handler for data fetching and client mutations.

You are able to use Edge Runtime instead of Serverless Node.js server.
