<script setup lang="ts">
import { GetAnEstimateCard } from '#components';
import LowImpactHero from '~/components/LowImpactHero.vue'

const { data: gallery } = await useAsyncData(() => queryCollection('pages').path('/page/gallery').first())

console.log(gallery?.value?.images![0])
useSeoMeta({
  title: gallery.value?.title || 'Gallery',
  description: gallery.value?.description || 'Gallery'
})
</script>

<template>
  <div class="w-full flex flex-col">
    <LowImpactHero :title="gallery?.title" :image="gallery?.herobackground" />
    
    <!-- Masonry Layout -->
    <div v-if="gallery?.images" class="masonry-container px-4 py-8 max-w-7xl mx-auto">
      <div class="masonry-grid">
        <div 
          v-for="(imageItem, index) in gallery.images" 
          :key="index"
          class="masonry-item"
        >
          <img 
            :src="imageItem.image!" 
            :alt="`Gallery image ${index + 1}`"
            class="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}

.masonry-container {
  width: 100%;
}

.masonry-grid {
  columns: 1;
  column-gap: 1rem;
  break-inside: avoid;
}

@media (min-width: 640px) {
  .masonry-grid {
    columns: 2;
  }
}

@media (min-width: 768px) {
  .masonry-grid {
    columns: 3;
  }
}

@media (min-width: 1024px) {
  .masonry-grid {
    columns: 4;
  }
}

@media (min-width: 1280px) {
  .masonry-grid {
    columns: 5;
  }
}

.masonry-item {
  display: inline-block;
  width: 100%;
  margin-bottom: 1rem;
  break-inside: avoid;
}

.masonry-item img {
  display: block;
  width: 100%;
  height: auto;
}
</style>