<script setup lang="ts">
import GetAnEstimateCard from '~/components/GetAnEstimateCard.vue';

  const { data: home } = await useAsyncData(() => queryCollection('pages').path('/page/home').first())
  console.log(await home.value?.herobackground)
  useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
  })
</script>

<template>
  <section v-if="home">
    <div class="w-full">
      <div class='flex flex-col sm:flex-row w-full bg-[#DCD7C9]/40'>
        <div class='flex-1 px-4 flex flex-col py-8 sm:py-48 space-y-3 sm:space-y-4'>
          <h1 class='px-4 text-3xl md:text-7xl text-center tracking-wide sm:text-left sm:pl-6 sm:pr-12 font-bebas-neue'>{{ home.title }}</h1>
          <p class='px-4 sm:pl-6 sm:pr-12 text-md sm:text-xl font-light text-black/70 tracking-wider text-center sm:text-left'>{{ home.description }}</p>
          <button class='bg-[#A27B5C] mt-6 sm:w-[40%] mx-4 sm:mx-0 py-3 sm:py-4 px-6 uppercase text-white tracking-wider text-2xl leading-none sm:ml-6 font-bebas-neue'>
            <NuxtLink :to="home.heroctaurl">
              {{ home.herocta }}
            </NuxtLink>
          </button>
        </div>
        <div class='flex-1 flex flex-col sm:flex-row justify-end mt-28 sm:mt-0'>
          <NuxtImg
            :src="home.hero"
            class='px-4 sm:px-0 absolute h-[95vw] sm:h-[75vh] w-screen sm:w-[45vw] sm:-translate-x-8 -translate-y-[5vh] sm:translate-y-[12.5vh] object-cover'
          />
          <NuxtImg
            :src="home.herobackground"
            class='h-[80vw] sm:h-screen sm:w-[33vw] object-cover'
          />
        </div>
      </div>
    </div>
    <Accolades/>
    <Reviews/>
    <GetAnEstimateCard/>

  </section>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>