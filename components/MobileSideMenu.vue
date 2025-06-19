<template>
  <!-- Mobile Menu Overlay -->
  <Teleport to="body">
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="isOpen" class="fixed inset-0 bg-black/50 lg:hidden" 
           style="z-index: 9998; width: 100vw; height: 100vh; top: 0; left: 0;" 
           @click="$emit('close')"></div>
    </Transition>
  </Teleport>

  <!-- Mobile Menu Panel -->
  <Teleport to="body">
    <Transition enter-active-class="transition-transform duration-300 ease-out" enter-from-class="translate-x-full"
      enter-to-class="translate-x-0" leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0" leave-to-class="translate-x-full">
      <div v-if="isOpen"
        class="fixed bg-white shadow-2xl lg:hidden overflow-y-auto"
        style="z-index: 9999; top: 0; right: 0; width: 320px; max-width: 85vw; height: 100vh;">
        <!-- Mobile Menu Header -->
        <div class="flex items-center justify-between p-6 border-b border-black/10">
          <h2 class="text-xl font-bebas-neue tracking-wider text-[#2C3930]">Menu</h2>
          <button @click="$emit('close')"
            class="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation Links -->
        <nav class="py-6">
          <div v-for="item in navItems" :key="item.label" class="border-b border-black/5 last:border-b-0">
            <NuxtLink :to="item.href" @click="$emit('close')"
              class="flex items-center justify-between px-6 py-4 text-lg font-bebas-neue tracking-wider transition-colors hover:bg-gray-50"
              :class="{
                'text-[#A27B5C] bg-gray-50': isActive(item.href),
                'text-[#2C3930]': !isActive(item.href)
              }">
              {{ item.label }}
              <svg v-if="isActive(item.href)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </nav>

        <!-- Mobile Contact Info -->
        <div class="p-6 bg-gray-50 mt-6">
          <h3 class="text-lg font-bebas-neue tracking-wider text-[#2C3930] mb-4">Contact Us</h3>
          <div class="space-y-4">
            <!-- Phone -->
            <a href="tel:+19718038020"
              class="flex items-center space-x-3 text-[#2C3930] hover:text-[#A27B5C] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span class="text-sm">(971) 803 - 8020</span>
            </a>

            <!-- Email -->
            <a href="mailto:oakridgeinteriors22@gmail.com"
              class="flex items-center space-x-3 text-[#2C3930] hover:text-[#A27B5C] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span class="text-sm">oakridgeinteriors22@gmail.com</span>
            </a>

            <!-- Location -->
            <a href="https://www.google.com/maps/search/?api=1&query=Willamette+Valley,+OR" target="_blank"
              rel="noopener noreferrer"
              class="flex items-center space-x-3 text-[#2C3930] hover:text-[#A27B5C] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span class="text-sm">Willamette Valley, OR</span>
            </a>
          </div>
        </div>

        <!-- Mobile CTA Button -->
        <div class="p-6">
          <NuxtLink to="/contact" @click="$emit('close')"
            class="block w-full bg-[#A27B5C] text-white text-center py-4 text-lg font-bebas-neue tracking-wider hover:bg-[#8B6A4F] transition-colors">
            GET AN ESTIMATE
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  navItems: {
    type: Array,
    required: true
  }
})

// Emits
const emit = defineEmits(['close'])

// Methods
const isActive = (href) => {
  return href === '/' ? route.path === '/' : route.path.includes(href)
}

// Prevent body scroll when mobile menu is open
watch(() => props.isOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

// Clean up body scroll on component unmount
onUnmounted(() => {
  if (process.client) {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>