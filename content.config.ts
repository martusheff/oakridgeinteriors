import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    page: defineCollection({
      source: 'page/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        heroimage: z.string(),
        herobackgroundimage: z.string(),
        heroctalabel: z.string(),
        heroctaurl: z.string()
      })
    })
  }
})