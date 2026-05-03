import { defineCollection } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'

const sourceUrls = z.array(z.string().url())

const people = defineCollection({
  loader: glob({ base: './src/content/people', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    department: z.string(),
    institution: z.string(),
    location: z.string(),
    email: z.string().email(),
    phone: z.string(),
    fax: z.string(),
    mailingAddress: z.array(z.string()),
    affiliations: z.array(z.string()),
    education: z.array(z.string()),
    researchInterests: z.array(z.string()),
    summary: z.string(),
    sourceUrls,
  }),
})

const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().int(),
    sourceUrls,
  }),
})

const publications = defineCollection({
  loader: file('./src/content/publications/selected.yml'),
  schema: z.object({
    id: z.string(),
    year: z.number().int(),
    title: z.string(),
    citation: z.string(),
    sourceUrls,
  }),
})

const news = defineCollection({
  loader: file('./src/content/news.yml'),
  schema: z.object({
    id: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    summary: z.string(),
    sourceUrls,
  }),
})

export const collections = { people, research, publications, news }
