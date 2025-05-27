<template>
  <footer class="bg-[#3F4F44] text-center">
    <div class="p-4 flex">
      <div class="flex-1 flex flex-col">
        <NuxtLink to="/" class="font-bold  transition-opacity rounded invert outline-offset-8 pointer-events-auto">
          <img src="/logo.svg" alt="Logo"
            class=" opacity-80 hover:opacity-100 transition-all duration-300 h-40 px-2 sm:px-6"
            style="object-fit: contain;" />
        </NuxtLink>
        <hr class="mx-12 my-4 text-white/50"/>
        <div class="flex  text-white justify-between mx-12  tracking-wider text-lg font-extralight">
          <NuxtLink to="/" class=" opacity-80  hover:opacity-100 transition-all duration-300 ">
            Home
          </NuxtLink>
          <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition-all duration-300  ">
            About
          </NuxtLink>
          <NuxtLink to="/" class=" opacity-80 hover:opacity-100 transition-all duration-300 ">
            Reviews
          </NuxtLink>
          <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition-all duration-300">
            Portfolio
          </NuxtLink>
          <NuxtLink to="/" class="opacity-80 hover:opacity-100 transition-all duration-300">
            Contact
          </NuxtLink>
        </div>
      </div>
      <div class="flex-1">

      </div>
    </div>
    <div class="text-center bg-[#A27B5C] py-2 text-white font-extralight tracking-wider text-sm uppercase">
      <p>&copy; 2025 Oakridge Interiors LLC. Website by West Coast Softworks.</p>
    </div>
  </footer>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>