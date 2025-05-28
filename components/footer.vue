<template>
  <footer class="bg-[#2C3930] text-center">
    <div class="p-4 flex">
      <div class="flex-1 flex flex-col">
        <NuxtLink to="/" class="font-bold  transition-opacity rounded invert outline-offset-8 pointer-events-auto">
          <Logo fill="fff"
            class="transition-opacity opacity-95 hover:opacity-100 h-45 w-80 px-2 lg:px-8 object-contain" />

        </NuxtLink>
        <div class="flex  text-white justify-between mx-12  tracking-wider text-lg font-extralight">
          <NuxtLink to="/" :class="navButton">
            Home
          </NuxtLink>
          <NuxtLink to="/" :class="navButton">
            About
          </NuxtLink>
          <NuxtLink to="/" :class="navButton">
            Reviews
          </NuxtLink>
          <NuxtLink to="/" :class="navButton">
            Portfolio
          </NuxtLink>
          <NuxtLink to="/" :class="navButton">
            Contact
          </NuxtLink>
        </div>
      </div>
      <div class="flex-1">

      </div>
    </div>
    <div class="text-center bg-[#3F4F44] py-2 text-white font-extralight tracking-wider text-sm uppercase ">
      <p>&copy; 2025 Oakridge Interiors LLC. Website by West Coast Softworks.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navButton = 'hover:bg-white text-xl px-3 py-1 text-white hover:text-[#2C3930] font-bebas-neue hover:scale-105 transition-all duration-300';
</script>


<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>