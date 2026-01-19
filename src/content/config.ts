import { defineCollection, z } from "astro:content";

const prompts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = { prompts };
