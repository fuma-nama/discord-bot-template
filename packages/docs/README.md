# Documentation

This project uses [Contentlayer](https://www.contentlayer.dev/) for scanning documents.

Run `pnpm run dev` in order to generate types.

## Add Document

All MDX files are located in [./content/docs](./content/docs).
For each file, you need to update the `meta.json` file in its folder to add this page to the sidebar.

For example, assume you created `content/docs/guide.mdx`:

```mdx
---
title: "My Cool Title"
---

## Hello World

some content here
```

You need to edit the `content/docs/meta.json` file:

```
{
    "title": "Docs",
    "pages": ["index", "---Guide---", "guide"]
}
```

### New Folder

It's required to have a `meta.json` file for every folders under `/docs`.

You can define the title and pages of the folder:

```
{
    "title": "Folder Name",
    "pages": ["index", "page"]
}
```

### Sidebar Separator

In `meta.json`, surround the separator text with `---` in `pages` property:

```
{
    "title": "Folder Name",
    "pages": ["index", "---Guide---", "guide"]
}
```
