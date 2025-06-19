<template>
  <header :class="[
    'transition-all duration-300 ease-out flex w-full bg-white border-b border-black/10 sticky top-0 z-50 transform-gpu will-change-transform',
    collapsed ? 'min-h-16 h-20' : 'min-h-32 h-40'
  ]">
    <!-- Logo Section -->
    <div class="flex justify-center items-center border-r border-r-black/5">
      <NuxtLink to="/" class="font-bold transition-opacity rounded outline-offset-8 pointer-events-auto">
        <Logo fill="#2C3930" :class="[
          'transition-all duration-300 ease-out opacity-95 hover:opacity-100 px-2 sm:px-4 object-contain transform-gpu will-change-transform',
          collapsed ? 'h-20 w-40 py-1' : 'h-40 w-40 md:w-60'
        ]" />
      </NuxtLink>
    </div>

    <!-- Navigation and Contact Section -->
    <div :class="[
      'flex-1 flex overflow-hidden flex-col w-full transition-all duration-300 ease-out transform-gpu will-change-transform',
      collapsed ? 'min-h-20 h-20' : 'min-h-40 h-40'
    ]">
      <!-- Top Contact Info - Improved transition -->
      <div :class="[
        'flex gap-4 sm:gap-12 items-center justify-end px-6 transition-all duration-250 ease-out transform-gpu will-change-transform',
        collapsed ? 'h-0 opacity-0 -translate-y-1 scale-95' : 'h-20 opacity-100 translate-y-0 scale-100'
      ]" 
      :style="{ 
        overflow: 'hidden',
        transitionProperty: 'height, opacity, transform',
        transitionDelay: collapsed ? '0ms' : '50ms'
      }">
        <!-- Phone -->
        <HeaderContactCard class="text-black" title="CALL US 24/7" subtitle="Click To Call Us" icon="heroicons-outline:phone"
          url="tel:+19718038020">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </HeaderContactCard>
        <!-- Email -->
        <HeaderContactCard class="text-black" title="SEND A MESSAGE" subtitle="Click To Email Us" icon="heroicons-outline:mail"
          url="mailto:oakridgeinteriors22@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </HeaderContactCard>
        <!-- Location -->
        <HeaderContactCard class="text-black" title="LOCATION" subtitle="Willamette Valley" icon="heroicons-outline:map"
          url="https://www.google.com/maps/search/?api=1&query=Willamette+Valley,+OR">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </HeaderContactCard>
      </div>
      
      <!-- Separator line -->
      <hr class="border-black/10 transition-opacity duration-200 ease-out" :class="{ 'opacity-0': collapsed }" />
      
      <!-- Navigation Links -->
      <div class="flex-1 px-4 flex justify-between items-center text-sm tracking-wider font-bebas-neue">
        <nav class="hidden lg:flex items-center space-x-8 px-12">
          <div v-for="item in navItems" :key="item.label" class="relative group">
            <NuxtLink :to="item.href"
              class="text-lg transition-colors  hover:bg-transparent hover:text-[#3F4F44] relative"
              :class="isActive(item.href) ? 'text-[#3F4F44]':  'text-black'">
              {{ item.label }}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F4F44] transition-transform duration-300 ease-out origin-left"
                :class="isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"></span>
            </NuxtLink>
          </div>
        </nav>
        
        <div class="flex w-full items-center justify-end">
          <!-- Collapsed state contact info - Improved transition -->
          <div :class="[
            'flex w-full items-center justify-around px-0 transition-all duration-250 ease-out transform-gpu will-change-transform',
            collapsed ? 'opacity-100 translate-y-0 scale-100 lg:hidden' : 'opacity-0 -translate-y-1 scale-95 hidden pointer-events-none'
          ]"
          :style="{
            transitionProperty: 'opacity, transform',
            transitionDelay: collapsed ? '100ms' : '0ms'
          }">
            <!-- Phone -->
            <HeaderContactCard class="text-black"  title="CALL US 24/7" subtitle="Click To Call Us" icon="heroicons-outline:phone"
              url="tel:+19718038020">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </HeaderContactCard>
            <!-- Email -->
            <HeaderContactCard class="text-black"  title="SEND A MESSAGE" subtitle="Click To Email Us" icon="heroicons-outline:mail"
              url="mailto:oakridgeinteriors22@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </HeaderContactCard>
            <!-- Location -->
            <HeaderContactCard class="text-black"  title="LOCATION" subtitle="Willamette Valley" icon="heroicons-outline:map"
              url="https://www.google.com/maps/search/?api=1&query=Willamette+Valley,+OR">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </HeaderContactCard>
          </div>
          
          <NuxtLink to="/contact" 
            :class="[
              'bg-[#A27B5C] px-2 py-3 sm:py-4 sm:px-6 text-white text-lg leading-none transition-all duration-250 ease-out transform-gpu will-change-transform', 
              collapsed ? 'hidden lg:flex opacity-100 translate-x-0 scale-100' : 'opacity-100 translate-x-0 scale-100'
            ]">
            GET AN ESTIMATE
          </NuxtLink>
          
          <button class="flex lg:hidden transition-transform duration-300 hover:scale-110" @click="toggleMobileMenu">
            <div class="w-10 h-10 flex items-center justify-center ml-3">
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

    <!-- Mobile Side Menu Component -->
    <MobileSideMenu 
      :is-open="mobileMenuOpen" 
      :nav-items="navItems" 
      @close="closeMobileMenu" 
    />
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import HeaderContactCard from './HeaderContactCard.vue'
import Logo from './Logo.vue'
import MobileSideMenu from './MobileSideMenu.vue'

const route = useRoute()

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  // { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
]

const collapsed = useState('collapsed', () => false)
const mobileMenuOpen = useState('mobileMenuOpen', () => false)
const { y } = useWindowScroll()

// Foolproof anti-jitter system
const COLLAPSE_THRESHOLD = 80
const EXPAND_THRESHOLD = 30
const TRANSITION_COOLDOWN = 400 // Reduced cooldown for snappier feel

let lastTransitionTime = 0
let isTransitioning = false

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const isActive = (href) => {
  return href === '/' ? route.path === '/' : route.path.includes(href)
}

// Bulletproof scroll handler that absolutely prevents jittering
const handleScroll = () => {
  const now = Date.now()
  const scrollY = y.value
  
  // If we're still in cooldown period, ignore all scroll events
  if (now - lastTransitionTime < TRANSITION_COOLDOWN) {
    return
  }
  
  // If already transitioning, ignore
  if (isTransitioning) {
    return
  }
  
  let shouldChange = false
  let newState = collapsed.value
  
  // Determine if we should change state
  if (!collapsed.value && scrollY > COLLAPSE_THRESHOLD) {
    shouldChange = true
    newState = true
  } else if (collapsed.value && scrollY < EXPAND_THRESHOLD) {
    shouldChange = true
    newState = false
  }
  
  // Only change state if needed and not in cooldown
  if (shouldChange && newState !== collapsed.value) {
    isTransitioning = true
    collapsed.value = newState
    lastTransitionTime = now
    
    // Reset transition flag after animation completes
    setTimeout(() => {
      isTransitioning = false
    }, 300) // Match new CSS transition duration
  }
}

// Use throttled scroll handler
let scrollTicking = false
useEventListener(window, 'scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      handleScroll()
      scrollTicking = false
    })
    scrollTicking = true
  }
}, { passive: true })

// Close mobile menu when route changes
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}

/* Optimized CSS for snappy, fluid transitions */
* {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* Enhanced transition timing for snappier feel */
.transition-all {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); /* easeOutQuad for snappier feel */
}

/* Specific optimizations for transform properties */
.will-change-transform {
  will-change: transform, opacity, height;
}

/* Micro-animations for extra smoothness */
@keyframes slideInDown {
  from {
    transform: translate3d(0, -10px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes slideOutUp {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, -10px, 0);
    opacity: 0;
  }
}
</style>