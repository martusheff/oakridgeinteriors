<template>
  <div class="bg-white shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <!-- Image -->
    <div class="relative h-72 overflow-hidden">
      <img :src="image" :alt="meta?.imageAlt || title"
        class="w-full h-full object-cover transition-transform duration-300" />
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Date and Author -->
      <div class="flex items-center text-sm text-gray-500 mb-3">
        <span>{{ formatDate(date) }}</span>
        <span v-if="meta?.author" class="ml-4">
          by {{ meta.author }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-[#3F4F44] transition-colors">
        <NuxtLink :to="path" class="block">
          {{ title }}
        </NuxtLink>
      </h3>

      <!-- Description -->
      <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {{ description }}
      </p>

      <!-- Read More Link -->
      <div class="flex items-center justify-between">
        <NuxtLink :to="path"
          class="inline-flex items-center text-white px-4 py-2 text-xl bg-[#3F4F44] tracking-wide font-bebas-neue font-medium  transition-colors">
          Read More
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BlogPost {
  id: string
  title: string
  date: Date
  description: string
  image: string
  path: string
  tags?: string[]
  meta?: {
    author?: string
    imageAlt?: string
  }
}

defineProps<BlogPost>()

const formatDate = (date: Date | string) => {
  const dateObj = date instanceof Date ? date : new Date(date)
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>