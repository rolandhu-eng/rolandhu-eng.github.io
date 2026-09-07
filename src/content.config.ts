import { z } from "astro/zod"
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  // Grabs every .md/.mdx under src/content/projects. Nesting one level deep
  // (e.g. aeolus/control.mdx) makes that file a subpage of the `aeolus` project.
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),

  schema: () => z.object({
    // --- every page ---
    title: z.string(),
    showHero: z.boolean().default(false),
    statusLabel: z.string().optional(),
    statusDot: z.boolean().default(false),

    // --- top-level project pages: drives the project cards and <head> ---
    description: z.string().optional(),
    dateRange: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    isVideo: z.boolean().default(false),
    /** Object-position for the hero crop. Mapped to a static Tailwind class in ProjectLayout. */
    heroPosition: z.enum(['top', 'center', 'bottom']).default('center'),
    /** Hide from /projects while keeping the page routable. */
    hidden: z.boolean().default(false),
    /** Heading above the sidebar nav. Defaults to "On This Page". */
    sidebarTitle: z.string().optional(),
    /** Social/link-preview image. Falls back to `cover`, then the site default. */
    ogImage: z.string().optional(),

    // --- subpages: position and label in the parent's sidebar ---
    order: z.number().optional(),
    navLabel: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
