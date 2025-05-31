<template>
  <header :class="[
    'transition-all duration-300 ease-in-out flex w-full bg-white border-b border-black/10 sticky top-0 z-50',
    collapsed ? 'min-h-16 h-20' : 'min-h-32 h-40'
  ]">
    <!-- Logo Section -->
    <div class="flex justify-center items-center border-r border-r-black/5">
      <NuxtLink to="/" class="font-bold transition-opacity rounded outline-offset-8 pointer-events-auto">
        <Logo fill="#2C3930" :class="[
          'transition-all duration-300 ease-in-out opacity-95 hover:opacity-100  px-2 sm:px-4 object-contain',
          collapsed ? 'h-20 w-40 py-1' : 'h-40 w-40 md:w-60'
        ]" />
      </NuxtLink>
    </div>

    <!-- Navigation and Contact Section -->
    <div :class="[
      'flex-1 flex flex-col w-full h-full transition-all duration-300 ease-in-out',
      collapsed ? 'min-h-20 h-20' : 'min-h-40 h-40'
    ]">
      <!-- Top Contact Info -->
      <div :class="[
        'flex-1 flex gap-4 sm:gap-12 items-center justify-end px-6 transition-all duration-300 ease-in-out',
        collapsed ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-20 opacity-100'
      ]">
        <!-- Phone -->
        <HeaderContactCard title="CALL US 24/7" subtitle="Click To Call Us" icon="heroicons-outline:phone"
          url="tel:+19718038020">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </HeaderContactCard>
        <!-- Email -->
        <HeaderContactCard title="SEND A MESSAGE" subtitle="Click To Email Us" icon="heroicons-outline:mail"
          url="mailto:oakridgeinteriors22@gmail.com">
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
        <nav class="hidden lg:flex items-center space-x-8 px-12">
          <div v-for="item in navItems" :key="item.label" class="relative group">
            <NuxtLink :to="item.href"
              class="text-lg transition-colors hover:bg-transparent hover:text-secondary relative"
              :class="{ 'text-[#3F4F44]': isActive(item.href) }">
              {{ item.label }}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F4F44] transition-transform duration-300 ease-out origin-left"
                :class="isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"></span>
            </NuxtLink>
          </div>
        </nav>
        <div class="flex w-full items-center justify-end">
          <!-- Top Contact Info -->
          <div :class="[
            'flex-1 flex gap-8 w-full items-center justify-start px-6 transition-all duration-300 ease-in-out',
            collapsed ? ' lg:hidden' : 'max-h-20 opacity-100 hidden'
          ]">
            <!-- Phone -->
            <HeaderContactCard title="CALL US 24/7" subtitle="Click To Call Us" icon="heroicons-outline:phone"
              url="tel:+19718038020">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </HeaderContactCard>
            <!-- Email -->
            <HeaderContactCard title="SEND A MESSAGE" subtitle="Click To Email Us" icon="heroicons-outline:mail"
              url="mailto:oakridgeinteriors22@gmail.com">
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
          <NuxtLink to="/contact" :class="['bg-[#A27B5C] px-2 py-3 sm:py-4 sm:px-6 text-white text-lg leading-none', collapsed ? 'hidden lg:flex' : '']">
            GET AN ESTIMATE
          </NuxtLink>
          <button class="flex lg:hidden" @click="toggleMobileMenu">
            <div class="w-10 h-10 flex items-center justify-center ml-3 hover:scale-110 transition-all duration-300">
              <!-- Hamburger/X Icon with Animation -->
              <div class="w-6 h-6 flex flex-col justify-center items-center gap-1">
                <span :class="[
                  'bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm',
                  mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                ]"></span>

                <span :class="[
                  'bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm',
                  mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                ]"></span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="mobileMenuOpen" class="fixed inset-0 bg-black/50 z-40 lg:hidden" @click="closeMobileMenu"></div>
    </Transition>

    <!-- Mobile Menu Panel -->
    <Transition enter-active-class="transition-transform duration-300 ease-out" enter-from-class="translate-x-full"
      enter-to-class="translate-x-0" leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0" leave-to-class="translate-x-full">
      <div v-if="mobileMenuOpen"
        class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
        <!-- Mobile Menu Header -->
        <div class="flex items-center justify-between p-6 border-b border-black/10">
          <h2 class="text-xl font-bebas-neue tracking-wider text-[#2C3930]">Menu</h2>
          <button @click="closeMobileMenu"
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
            <NuxtLink :to="item.href" @click="closeMobileMenu"
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
          <NuxtLink to="/contact" @click="closeMobileMenu"
            class="block w-full bg-[#A27B5C] text-white text-center py-4 text-lg font-bebas-neue tracking-wider hover:bg-[#8B6A4F] transition-colors">
            GET AN ESTIMATE
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import HeaderContactCard from './HeaderContactCard.vue'
import Logo from './Logo.vue'

const route = useRoute()

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
]

const collapsed = useState('collapsed', () => false)
const mobileMenuOpen = useState('mobileMenuOpen', () => false)
const { y } = useWindowScroll()

const toggle = (e) => {
  collapsed.value = e
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const isActive = (href) => {
  return href === '/' ? route.path === '/' : route.path.includes(href)
}

useEventListener(window, 'scroll', () => {
  if (y.value > 50) {
    toggle(true)
  } else {
    toggle(false)
  }
})

// Close mobile menu when route changes
watch(() => route.path, () => {
  closeMobileMenu()
})

// Prevent body scroll when mobile menu is open
watch(mobileMenuOpen, (isOpen) => {
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