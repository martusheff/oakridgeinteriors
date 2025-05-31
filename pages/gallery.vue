<script setup lang="ts">
import Masonry from '~/components/Masonry.vue'

const { data: gallery } = await useAsyncData(() => queryCollection('pages').path('/page/gallery').first())

// Extract image URLs
const imageUrls = computed(() => {
  return gallery.value?.images?.map(item => item.image) || []
})
</script>

<template>
  <div class="w-full flex flex-col gap-8 md:gap-16">
    <LowImpactHero :title="gallery?.title" :image="gallery?.herobackground" />
    
    <div class="w-full flex flex-col items-center justify-center md:max-w-[70vw] mx-auto">
      <p class="text-[#3F4F44] font-bebas-neue tracking-wider text-xl text-center">GALLERY</p>
      <h2 class="font-bebas-neue tracking-wide text-5xl text-center mb-2">See Some Of The Work
        <br />We've Done Around The Willamette Valley
      </h2>
    </div>

    <Masonry size="large" :images="imageUrls" />
    
    <Accolades />
    <Reviews :limit="3" />
    <GetAnEstimateCard />
  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>