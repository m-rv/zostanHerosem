import { defineCollection, z } from "astro:content";

const panelCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  panels: panelCollection,
};
