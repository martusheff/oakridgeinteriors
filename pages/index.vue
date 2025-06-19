<script setup lang="ts">
import GetAnEstimateCard from '~/components/GetAnEstimateCard.vue';

  const { data: home } = await useAsyncData(() => queryCollection('pages').path('/page/home').first())
  useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
  })
</script>

<template>
  <section v-if="home">
    <div class="w-full">
      <div class='flex flex-col md:flex-row w-full bg-[#DCD7C9]/40'>
        <div class='flex-1 px-4 flex flex-col py-16 pb-24 md:py-48 space-y-3 md:space-y-4'>
          <h1 class='px-4 text-5xl md:text-7xl text-black text-center tracking-wide sm:text-left sm:pl-6 sm:pr-12 font-bebas-neue'>{{ home.title }}</h1>
          <p class='px-4 md:pl-6 md:pr-12 text-md md:text-xl font-light text-black/70 tracking-wider text-center md:text-left'>{{ home.description }}</p>
          <button class='bg-[#A27B5C] mt-6 md:w-[40%] mx-4 sm:mx-0 py-3 sm:py-4 px-6 uppercase text-white tracking-wider text-2xl leading-none md:ml-6 font-bebas-neue'>
            <NuxtLink :to="home.heroctaurl">
              {{ home.herocta }}
            </NuxtLink>
          </button>
        </div>
        <div class='flex-1 flex flex-col md:flex-row justify-end mt-28 md:mt-0'>
          <NuxtImg
            :src="home.hero"
            class='px-4 md:px-0 absolute h-[95vw] md:h-[75vh] w-screen md:w-[45vw] md:-translate-x-8 -translate-y-[5vh] md:translate-y-[12.5vh] object-cover'
          />
          <NuxtImg
            :src="home.herobackground"
            class='h-[80vw] md:h-screen md:w-[33vw] object-cover'
          />
        </div>
      </div>
    </div>
    <Accolades class="hidden md:flex"/>
    <Reviews :limit="3"/>
    <GetAnEstimateCard/>

  </section>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>