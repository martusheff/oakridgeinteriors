<template>
  <div class="relative h-96">
    <NuxtImg :src="image"
      class="absolute inset-0 h-full w-screen object-cover brightness-[60%]" alt="About page background" />
    <div>

    </div>
    <div class="flex flex-col absolute top-1/2 left-4 sm:left-6 transform -translate-y-1/2 pt-4 ">
      <p class="text-white text-xs font-bold tracking-widest">OAKRIDGE INTERIORS</p>
      <h1 class=" text-6xl md:text-7xl text-white tracking-wider font-bebas-neue leading-tight">
        {{ title }}
      </h1>
      <p class="text-white text-xs font-bold tracking-widest -translate-y-1.5">{{ date + " by " + author }}</p>


    </div>

  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  image: String,
  date: String,
  author: String
})
</script>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>