<template>
  <div class="">
    <div class="flex flex-col md:flex-row w-full text-center md:text-left justify-center items-center  md:justify-between min-h-72 bg-[#3F4F44] p-8 md:p-12 gap-8 md:gap-0">
      <div class="flex flex-col gap-6 items-center md:items-start justify-center">
        <h2 class="font-bebas-neue text-white tracking-wider text-5xl">Thinking about going<br class="hidden md:flex"/> with Oakridge
          Interiors?</h2>
        <NuxtLink href="contact" class="px-8 py-4 text-2xl bg-white text-[#3F4F44] font-bebas-neue tracking-wider">
          Get in Touch
        </NuxtLink>
      </div>
      <div class="text-center flex flex-col justify-center gap-2 w-full md:max-w-sm ">
        <h2 class="font-bebas-neue text-white tracking-wider text-4xl mb-2">Available Hours</h2>
        <div class="flex justify-between items-center min-w-64">
          <span class="text-white text-xl font-light">Monday to Friday</span>
          <span class="text-white text-xl font-light">8AM - 6PM</span>
        </div>
        <div class="flex justify-between items-center min-w-64">
          <span class="text-white text-xl font-light">Saturday</span>
          <span class="text-white text-xl font-light">8AM - 3PM</span>
        </div>
        <div class="flex justify-between items-center min-w-64">
          <span class="text-white text-xl font-light">Sunday</span>
          <span class="text-white text-xl font-light">Closed</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>



</script>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>