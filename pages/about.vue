<script setup lang="ts">
import GetAnEstimateCard from '~/components/GetAnEstimateCard.vue'
import LowImpactHero from '~/components/LowImpactHero.vue'


const { data: about } = await useAsyncData(() => queryCollection('pages').path('/page/about').first())

useSeoMeta({
  title: about.value?.title || 'About',
  description: about.value?.description || 'About our site'
})
</script>

<template>
  <div class="w-full flex flex-col">
    <LowImpactHero :title="about?.title" :image="about?.herobackground" />

    <div class="flex w-full flex-col lg:flex-row transition-all duration-300">
      <div class="flex-1 py-24 px-12">
        <div class="relative w-full max-w-md mx-auto">
          <NuxtImg :src="about?.hero || '/images/uploads/placeholder.jpg'"
            class="absolute top-0 left-0 w-full h-auto object-cover brightness-[30%]" alt="About page hero background"
            style="transform: rotate(12deg); z-index: 10;" />
          <NuxtImg :src="about?.hero || '/images/uploads/placeholder.jpg'" class="relative w-full h-auto object-cover"
            alt="About page hero" style="z-index: 20;" />
        </div>
      </div>
      <div class="flex-1 pb-16 md:py-24 px-6">
        <div class="w-full max-w-md mx-auto space-y-1">
          <p class="text-[#3F4F44] text-xs tracking-widest font-bold">WHO WE ARE</p>
          <h1 class="font-bebas-neue text-5xl text-black">{{ about?.title || 'About Us' }}</h1>
          <p class="text-md sm:text-lg text-black/70 font-light text-justify mb-8">{{ about?.description }}</p>
          <NuxtLink :href="about?.heroctaurl"
            class=" bg-[#3F4F44] px-6 py-4 text-white text-xl tracking-wider  font-bebas-neue">
            {{ about?.herocta }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <Accolades />
    <Reviews :limit="3"/>
    <GetAnEstimateCard/>

  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>