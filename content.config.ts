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
            heroctaurl: z.string()
        })
    }),
    config: defineCollection({
        type: 'data',
        source: 'page/config.json',
        schema: z.object({
            title: z.string(),
            description: z.string(),
        })
    })
  }
})
