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
        ).optional(),
        services: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            image: z.string(),
            features: z.array(
              z.object({
                feature: z.string()
              })
            )
          })
        )
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
        location: z.string().optional(),
        image: z.string(),
        date: z.date(),
        images: z.array(
          z.object({
            image: z.string()
          })
        ).optional()
      }),

    }),
    reviews: defineCollection({
      type: 'data',
      source: 'reviews/*.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        clientname: z.string(),
        clientlocation: z.string()
      })
    })
  }
})
