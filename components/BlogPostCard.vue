<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <img 
        :src="image" 
        :alt="meta?.imageAlt || title" 
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute top-4 left-4">
        <span 
          v-for="tag in tags" 
          :key="tag"
          class="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mr-2 mb-2"
        >
          #{{ tag }}
        </span>
      </div>
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
      <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
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
        <NuxtLink 
          :to="path"
          class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
        >
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
  date: string
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

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
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
</style>