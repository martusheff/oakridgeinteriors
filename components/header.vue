<template>
  <header class="flex w-full min-h-32 bg-white border-b border-black/10 sticky top-0 z-50">
    <!-- Logo Section -->
    <div class="flex justify-center items-center bg-[#DCD7C9]/25">
      <NuxtLink to="/"
        class="font-bold opacity-80 hover:opacity-100 transition-opacity rounded outline-offset-8 pointer-events-auto">
        <img src="/logo.svg" alt="Logo" class="h-40 px-2 sm:px-6" style="object-fit: contain;" />
      </NuxtLink>
    </div>

    <!-- Navigation and Contact Section -->
    <div class="flex-1 flex flex-col w-full h-full min-h-40">
      <!-- Top Contact Info -->
      <div class="flex-1 flex gap-4 sm:gap-12 items-center justify-end px-6">
        <!-- Phone -->
        <HeaderContactCard title="CALL US 24/7" subtitle="Click To Call Us" icon="heroicons-outline:phone"
          url="tel:+15035551234">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </HeaderContactCard>
        <!-- Email -->
        <HeaderContactCard title="SEND A MESSAGE" subtitle="Click To Email Us" icon="heroicons-outline:mail"
          url="mailto:info@example.com">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>

        </HeaderContactCard>
        <!-- Location -->
        <HeaderContactCard title="LOCATION" subtitle="Willamette Valley" icon="heroicons-outline:map"
          url="https://www.google.com/maps/search/?api=1&query=Willamette+Valley,+OR">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </HeaderContactCard>
      </div>
      <hr class="border-black/10" />
      <!-- Navigation Links -->
      <div class="flex-1 px-4 flex justify-between items-center text-sm tracking-wider font-bebas-neue">
        <nav class="hidden sm:flex items-center space-x-8 px-12">
          <div v-for="item in navItems" :key="item.label" class="relative group">
            <NuxtLink :to="item.href"
              class="text-lg transition-colors hover:bg-transparent hover:text-secondary relative"
              :class="{ 'text-secondary': isActive(item.href) }">
              {{ item.label }}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F4F44] transition-transform duration-300 ease-out origin-left"
                :class="isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"></span>
            </NuxtLink>
          </div>
        </nav>
        <div class="flex w-full items-center justify-between sm:justify-end">
          <NuxtLink to="/contact" class="bg-[#A27B5C] px-2 py-3 sm:py-4 sm:px-6 text-white text-lg leading-none">
            GET AN ESTIMATE
          </NuxtLink>
          <button class="flex md:hidden">
            <div class="w-10 h-10 flex items-center justify-center ml-3 hover:scale-110 transition-all duration-300">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </div>

          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import HeaderContactCard from './HeaderContactCard.vue'

const route = useRoute()

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/faq', label: 'FAQs' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }

]

const isActive = (href) => {
  return href === '/' ? route.path === '/' : route.path.includes(href)
}
</script>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>