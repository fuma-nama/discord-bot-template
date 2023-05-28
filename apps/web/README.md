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

### Discord OAuth

Add `https://<app_url>/api/auth/callback` as a Redirect Uri in Developer Portal.

## Project Structure

Learn more from [Next.js Docs](https://nextjs.org/docs/getting-started/project-structure).

| Path                    | Description                           |
| ----------------------- | ------------------------------------- |
| ./components            | UI Components                         |
| ./app                   | Pages & Route Handlers                |
| ./app/(info)            | Static Pages (Home & Login Page)      |
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

## UI

### Design System

Based on Shadcn UI, you can easily customize the design system.

### Components

Using Radix UI and Tailwind CSS, many components are supported and well-styled:

-   Select
-   Dropdown Menu
-   Input (styled)
-   Table
-   Tabs
-   Text Area
-   Button (styled)
-   Slider

Some of the components are based on [Shadcn UI](https://github.com/shadcn/ui).

### Customize

As mentioned above, you may use Shadcn UI for more components.

Modifying those components requires some knowledge about web development, React.js and Tailwind css.

In Tailwind configuration file, you can edit theme configurations such as the color palette, and many others.
