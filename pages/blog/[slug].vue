<script setup lang="ts">
// pages/blog/[slug].vue
const route = useRoute()
const slug = route.params.slug as string

// Fetch the specific blog post by slug
const { data: blogPost } = await useAsyncData(`blog-${slug}`, () => 
  queryCollection('blog').path(`/blog/${slug}`).first()
)

// Handle 404 if post not found
if (!blogPost.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}

// SEO
useSeoMeta({
  title: blogPost.value?.title || 'Blog Post',
  description: blogPost.value?.description || 'Blog post'
})

const formatDate = (date: Date | string) => {
  const dateObj = date instanceof Date ? date : new Date(date)
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="w-full">
    <!-- Hero Image -->
    <div class="relative h-96 overflow-hidden">
      <img :src="blogPost?.image" :alt="blogPost?.meta?.imageAlt || blogPost?.title"
        class="w-full h-full object-cover" />
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <!-- Header -->
      <header class="mb-8">
        <div class="flex items-center text-sm text-gray-500 mb-4">
          <span>{{ formatDate(blogPost?.date) }}</span>
          <span v-if="blogPost?.meta?.author" class="ml-4">
            by {{ blogPost.meta.author }}
          </span>
        </div>
        
        <h1 class="text-4xl font-bold text-gray-900 mb-4 font-bebas-neue tracking-wide">
          {{ blogPost?.title }}
        </h1>
        
        <p class="text-xl text-gray-600 leading-relaxed">
          {{ blogPost?.description }}
        </p>
      </header>

      <!-- Blog Content -->
      <article class="prose prose-lg max-w-none">
        <ContentRenderer :value="blogPost!.body" />
      </article>
    </div>
  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>