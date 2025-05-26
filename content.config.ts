import { defineCollection } from "@nuxt/content";

collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
