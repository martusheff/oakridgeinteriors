<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('pages').path('/page/home').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <section v-if="home">
          <div class="w-full">
        <div class='flex flex-col sm:flex-row w-full bg'>
          <div class='flex-1 flex flex-col py-8 sm:py-32 space-y-3 sm:space-y-4'>
            <h1 class='px-4 text-3xl sm:text-6xl text-center sm:text-left sm:pl-6 sm:pr-12'>{{home.title}}</h1>
            <p class='px-4 sm:pl-6 sm:pr-12 text-md sm:text-lg font-light text-center sm:text-left'>{{home.description}}</p>
            <button class='bg-[#A27B5C] mx-4 sm:mx-0 py-3 sm:py-4 px-6 uppercase text-white tracking-wider text-xl leading-none sm:ml-6'>
              <Link href={{home.heroctaurl}}>
                {home?.heroctalabel}
              </Link>
            </button>
          </div>
          <div class='flex-1 flex flex-col sm:flex-row justify-end mt-28 sm:mt-0'>
            <img src={{home.hero}} class='px-4 sm:px-0 absolute h-[95vw] sm:h-[75vh] w-screen sm:w-[45vw] sm:-translate-x-8 -translate-y-[5vh] sm:translate-y-[12.5vh] object-cover' />
            <img src={{home.herobackground}} class='h-[80vw] sm:h-screen sm:w-[33vw] object-cover' />
          </div>
        </div>
      </div>
  </section>

</template>
