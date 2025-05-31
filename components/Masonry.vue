<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  images: string[]
}

const props = defineProps<Props>()

// Generate random heights for each image
const imageHeights = ref<string[]>([])
const isGalleryOpen = ref(false)
const currentImageIndex = ref(0)

// Touch/swipe handling
const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 50
const isDragging = ref(false)

const generateRandomHeights = () => {
  if (!props.images?.length) return

  const heights = ['250px', '300px', '350px', '280px', '380px', '320px', '400px', '270px']
  imageHeights.value = props.images.map(() =>
    heights[Math.floor(Math.random() * heights.length)]
  )
}

const openGallery = (index: number) => {
  currentImageIndex.value = index
  isGalleryOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeGallery = () => {
  isGalleryOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length
}

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? props.images.length - 1 
    : currentImageIndex.value - 1
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!isGalleryOpen.value) return
  
  if (e.key === 'Escape') {
    closeGallery()
  } else if (e.key === 'ArrowRight') {
    nextImage()
  } else if (e.key === 'ArrowLeft') {
    prevImage()
  }
}

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0].screenX
  handleSwipe()
}

const handleMouseDown = (e: MouseEvent) => {
  isDragging.value = true
  touchStartX.value = e.clientX
  e.preventDefault()
}

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return
  e.preventDefault()
}

const handleMouseUp = (e: MouseEvent) => {
  if (!isDragging.value) return
  
  touchEndX.value = e.clientX
  isDragging.value = false
  handleSwipe()
}

const handleSwipe = () => {
  const swipeDistance = touchStartX.value - touchEndX.value
  
  if (Math.abs(swipeDistance) < minSwipeDistance) return
  
  if (swipeDistance > 0) {
    // Swiped left - go to next image
    nextImage()
  } else {
    // Swiped right - go to previous image
    prevImage()
  }
}

onMounted(() => {
  generateRandomHeights()
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
  document.body.style.overflow = ''
})
</script>

<template>
  <div v-if="images?.length && imageHeights.length" class="w-full px-4 max-w-7xl mx-auto">
    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6">
      <div v-for="(image, index) in images" :key="index" 
        class="inline-block w-full mb-6 break-inside-avoid relative"
        :style="{ height: imageHeights[index] }">
        <div class="w-full h-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          @click="openGallery(index)">
          <img :src="image" :alt="`Gallery image ${index + 1}`"
            class="block w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy" />
        </div>
      </div>
    </div>

    <!-- Full Page Gallery Viewer -->
    <div v-if="isGalleryOpen" 
      class="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
      @click="closeGallery"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      @mousedown="handleMouseDown">
      
      <!-- Close Button -->
      <button @click="closeGallery" 
        class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors z-10">
        ×
      </button>

      <!-- Previous Button -->
      <button @click.stop="prevImage" 
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 transition-colors z-10 p-2">
        ‹
      </button>

      <!-- Next Button -->
      <button @click.stop="nextImage" 
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 transition-colors z-10 p-2">
        ›
      </button>

      <!-- Current Image -->
      <div class="max-w-[90vw] max-h-[90vh] flex items-center justify-center cursor-grab active:cursor-grabbing" 
        :class="{ 'cursor-grabbing': isDragging }"
        @click.stop>
        <img :src="images[currentImageIndex]" 
          :alt="`Gallery image ${currentImageIndex + 1}`"
          class="max-w-full max-h-full object-contain select-none pointer-events-none" />
      </div>

      <!-- Image Counter -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
        {{ currentImageIndex + 1 }} / {{ images.length }}
      </div>
    </div>
  </div>
</template>