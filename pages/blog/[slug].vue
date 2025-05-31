<script setup lang="ts">
// pages/blog/[slug].vue
const route = useRoute()
const slug = route.params.slug as string

// Fetch the specific blog post by slug
const { data: blogPost } = await useAsyncData(`blog-${slug}`, () => 
  queryCollection('blog').path(`/blog/${slug}`).first()
)

const imageUrls = computed(() => {
  return blogPost.value?.images?.map(item => item.image) || []
})

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
  <div class="w-full bg-white">


    <BlogHero 
      :title="blogPost?.title" 
      :image="blogPost?.image" 
      :date="formatDate(blogPost!.date)" 
      :author="blogPost?.meta.author" 
    />

    <!-- Content -->
    <div class="container mx-auto px-4 sm:px-6 pt-12 max-w-4xl">


      <header class="mb-8 text-center">
        <div class="mb-6 flex justify-center space-x-2 text-sm text-gray-500">
          <span>{{ formatDate(blogPost!.date) }}</span>
          <span>•</span>
          <span>{{ blogPost?.meta.author }}</span>
          <span>•</span>
          <span>{{ blogPost?.location || "Willamette Valley" }}</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-bebas-neue tracking-wide leading-tight">
          {{ blogPost?.title }}
        </h1>
        
      </header>

      <!-- Blog Content -->
      <article class="prose prose-lg max-w-none prose-headings:font-bebas-neue prose-headings:tracking-wide
                     prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700
                     prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-img:rounded-lg
                     prose-img:shadow-md prose-blockquote:border-l-primary-600 text-center text-lg font-light">
        <ContentRenderer :value="blogPost!.body" />
      </article>

      <!-- Image Gallery -->
      <div v-if="imageUrls.length > 0" class="mt-12 pt-6 lg:pt-8">
        <h2 class="text-4xl md:text-5xl font-bebas-neue text-center tracking-wide text-gray-900 mb-6">GALLERY</h2>
        <Masonry size="small" :images="imageUrls" />
      </div>




    </div>

    <Reviews :limit="3"/>
    <GetAnEstimateCard/>
  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.05em;
}
</style>