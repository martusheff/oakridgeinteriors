<script setup lang="ts">
import { GetAnEstimateCard } from '#components';
import LowImpactHero from '~/components/LowImpactHero.vue'
import { ref, onMounted } from 'vue'
import Accolades from '~/components/Accolades.vue';

const { data: gallery } = await useAsyncData(() => queryCollection('pages').path('/page/gallery').first())

// Generate random heights for each image
const imageHeights = ref<string[]>([])

const generateRandomHeights = () => {
  if (!gallery.value?.images) return
  
  const heights = ['250px', '300px', '350px', '280px', '380px', '320px', '400px', '270px']
  imageHeights.value = gallery.value.images.map(() => 
    heights[Math.floor(Math.random() * heights.length)]
  )
}

onMounted(() => {
  generateRandomHeights()
})

console.log(gallery?.value?.images![0])
useSeoMeta({
  title: gallery.value?.title || 'Gallery',
  description: gallery.value?.description || 'Gallery'
})
</script>

<template>
  <div class="w-full flex flex-col gap-8 md:gap-16">
    <LowImpactHero :title="gallery?.title" :image="gallery?.herobackground" />
    <div class="w-full flex flex-col items-center justify-center md:max-w-[70vw] mx-auto ">
      <p class="text-[#3F4F44] font-bebas-neue tracking-wider text-xl text-center">GALLERY</p>
      <h2 class="font-bebas-neue tracking-wide text-5xl text-center mb-2">See Some Of The Work
        <br />We've Done Around The Willamette Valley
      </h2>
    </div>

    <!-- Dynamic Height Masonry Layout -->
    <div v-if="gallery?.images && imageHeights.length" class="masonry-container px-4 max-w-7xl mx-auto">
      <div class="masonry-grid">
        <div 
          v-for="(imageItem, index) in gallery.images" 
          :key="index" 
          class="masonry-item"
          :style="{ height: imageHeights[index] }"
        >
          <img 
            :src="imageItem.image!" 
            :alt="`Gallery image ${index + 1}`"
            class="w-full h-full object-cover rounded-none  shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105" 
            loading="lazy" 
          />
        </div>
      </div>
    </div>
    <Accolades/>
    <Reviews/>
        <GetAnEstimateCard/>

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
  column-gap: 1.5rem;
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
  margin-bottom: 1.5rem;
  break-inside: avoid;
  overflow: hidden;
}

.masonry-item img {
  display: block;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}
</style>