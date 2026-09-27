`CLAUDE.md` is a symlink to this file — edit this one, and keep the text here.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Run `npm run build` to check that every page still compiles before finishing.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Content conventions

Project pages live in `src/content/projects/`; the frontmatter schema is in
`src/content.config.ts`. The Aeolus pages are the most recent and are the
reference for new or updated content.

- **Projects and subpages.** `foo.mdx` is a project; `foo/bar.mdx` is a subpage
  of it, placed in the sidebar by its `order` and `navLabel` frontmatter. The
  display order of projects is `projectOrder` in `src/data/projects.ts`.
  `hidden: true` keeps a page off the listings but still routable.
- **Headings.** Top-level `#` headings become the sidebar entries, verbatim —
  no manual numbering (`# Testing`, not `# 03. Testing`). Nest `##`, then `###`,
  without skipping a level.
- **Images.** Put assets under `public/assets/<project>/`, as `.webp` (longest
  side around 2000px, EXIF orientation baked in). Use a `<figure>` with the
  image's real `width`/`height`, `loading="lazy" decoding="async"`, and a
  `<figcaption>` in the shared caption style — copy an existing figure from an
  Aeolus page. Group related figures in a `not-prose grid`.
- **Video.** `.webm` (VP9, audio stripped unless it matters), in a `<figure>`
  with `controls loop playsinline preload="metadata"` and its dimensions set.
- **Components.** `Dropdown`, `Table` and `Chart` in `src/components/` are
  imported at the top of the `.mdx` file that uses them.
