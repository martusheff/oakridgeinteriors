<template>
  <div>
    <!-- Hero Section -->
    <section
      v-if="page"
      :style="{ backgroundImage: `url(${page.heroBackgroundImage})` }"
      class="relative bg-cover bg-center py-16 text-center text-white min-h-[400px] flex flex-col items-center justify-center"
    >
      <div class="absolute inset-0 bg-black/50"></div> <!-- Overlay for readability -->
      <div class="relative z-10">
        <img
          :src="page.heroImage"
          alt="Hero Image"
          class="mx-auto mb-6 max-w-full h-auto md:max-w-md rounded-lg shadow-lg"
        />
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ page.title }}</h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto mb-6">{{ page.description }}</p>
        <a
          :href="page.ctaUrl"
          class="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          {{ page.ctaLabel }}
        </a>
      </div>
    </section>

    <!-- Main Content -->
    <div v-if="page" class="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 prose prose-lg">
      <ContentRenderer :value="page" />
    </div>

    <!-- Loading and Error States -->
    <div v-if="pending" class="text-center py-12">Loading...</div>
    <div v-if="error" class="text-center py-12 text-red-600">
      Error: {{ error.message }}
    </div>
  </div>
</template>

<script setup>
const { data: page } = await useAsyncData('home', () =>
  queryCollection('pages').where({ slug: 'home' }).first()
)
</script>