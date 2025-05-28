import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
        type: 'page',
        source: 'page/*.md',
        schema: z.object({
            title: z.string(),
            description: z.string(),
            hero: z.string(),
            herobackground: z.string(),
            herocta: z.string(),
            heroctaurl: z.string(),
            images: z.array(
              z.object({
                image: z.string()
              })
            ).optional()
        })
    }),
    config: defineCollection({
        type: 'data',
        source: 'page/config.json',
        schema: z.object({
            title: z.string(),
            description: z.string(),
        })
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    })
  }
})
