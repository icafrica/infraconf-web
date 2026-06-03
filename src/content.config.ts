import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('InfraConf Africa Team'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    speaker: z.string(),
    track: z.string(),
    duration: z.string().default('30 min'),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Intermediate'),
    description: z.string(),
    confirmed: z.boolean().default(false),
  }),
});

export const collections = { blog, talks };
