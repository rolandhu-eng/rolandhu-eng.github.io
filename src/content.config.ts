import { z } from "astro/zod"
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Import the new loader

const projectsCollection = defineCollection({
  // The loader tells Astro to grab all .md and .mdx files in this folder
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  
  schema: () => z.object({
    title: z.string(),
    showHero: z.boolean().optional().default(false),
    statusLabel: z.string().optional(),
    statusDot: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'projects': projectsCollection,
};