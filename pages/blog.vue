<script setup lang="ts">
import { GetAnEstimateCard } from '#components';
import LowImpactHero from '~/components/LowImpactHero.vue'
import BlogPostCard from '~/components/BlogPostCard.vue'

const { data: blogPage } = await useAsyncData(() => queryCollection('pages').path('/page/blog').first())
const { data: blogPosts } = await useAsyncData(() => queryCollection('blog').all())

console.log(blogPosts.value)

// Computed properties for sidebar
const featuredPosts = computed(() => {
  return blogPosts.value?.filter(post => post.meta?.featured === true) || []
})

const recentPosts = computed(() => {
  const sorted = [...(blogPosts.value || [])].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return sorted.slice(0, 5) // Show 5 most recent posts
})

// Helper function for sidebar date formatting
const formatSidebarDate = (dateString: string | Date) => {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

useSeoMeta({
  title: blogPage.value?.title || 'Blog',
  description: blogPage.value?.description || 'Blog'
})
</script>

<template>
  <div class="w-full flex flex-col">
    <LowImpactHero :title="blogPage?.title" :image="blogPage?.herobackground" />

    <!-- Blog Layout -->
    <div class="container mx-auto px-4 py-12 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-9 gap-12">
        <!-- Main Content - Left Column -->
        <div class="lg:col-span-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BlogPostCard v-for="blogPost in blogPosts" :key="blogPost.id" :id="blogPost.id" :title="blogPost.title"
              :date="blogPost.date" :description="blogPost.description" :image="blogPost.image" :path="blogPost.path"
              :tags="blogPost.tags" :meta="blogPost.meta" />
          </div>
        </div>

        <!-- Sidebar - Right Column -->
        <div class="lg:col-span-3">
          <div class="space-y-8">
            <!-- Featured Posts -->
            <div v-if="featuredPosts.length > 0" class="p-4 border border-black/10">
              <h3 class="text-3xl tracking-wide text-gray-900 mb-4 pb-2 border-b-2 border-[#3F4F44] font-bebas-neue">
                Featured Posts
              </h3>
              <div class="space-y-4">
                <div v-for="post in featuredPosts" :key="post.id" class="group cursor-pointer">
                  <NuxtLink :to="post.path" class="block">
                    <div class="flex space-x-3">
                      <img :src="post.image" :alt="post.title"
                        class="w-16 h-16 object-cover flex-shrink-0" />
                      <div class="flex-1 min-w-0">
                        <h4
                          class="text-sm font-medium text-gray-900 group-hover:text-[#3F4F44] transition-colors line-clamp-2">
                          {{ post.title }}
                        </h4>
                        <p class="text-xs text-gray-500 mt-1">
                          {{ formatSidebarDate(post.date) }}
                        </p>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Recent Posts -->
            <div class="p-4 border border-black/10">
              <h3 class="text-3xl tracking-wide text-gray-900 mb-4 pb-2 border-b-2 border-[#3F4F44] font-bebas-neue">
                Recent Posts
              </h3>
              <div class="space-y-4">
                <div v-for="post in recentPosts" :key="post.id" class="group cursor-pointer">
                  <NuxtLink :to="post.path" class="block">
                    <div class="flex space-x-3 ">
                      <img :src="post.image" :alt="post.title"
                        class="w-16 h-16 object-cover  flex-shrink-0" />
                      <div class="flex-1 min-w-0">
                        <h4
                          class="text-sm font-medium text-gray-900 group-hover:text-[#3F4F44]  transition-colors line-clamp-2">
                          {{ post.title }}
                        </h4>
                        <p class="text-xs text-gray-500 mt-1">
                          {{ formatSidebarDate(post.date) }}
                        </p>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <GetAnEstimateCard />
  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>