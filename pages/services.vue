<template>
  <div class="flex flex-col gap-12">
    <LowImpactHero 
      :title="servicesPage?.title" 
      :image="servicesPage?.herobackground" 
    />

    <!-- Dynamic Services -->
    <div 
      v-for="(service, index) in servicesPage?.services" 
      :key="index"
      class="w-full"
      :class="index % 2 === 0 ? 'bg-white' : 'bg-[#DCD7C9]/40'"
    >
      <div class="container mx-auto px-4 sm:px-6 max-w-6xl py-12 md:py-16">
        <div 
          class="flex flex-col items-center gap-8 md:gap-12"
          :class="{'md:flex-row': index % 2 === 0, 'md:flex-row-reverse': index % 2 !== 0}"
        >
          <div class="w-full md:w-1/2">
            <NuxtImg 
              :src="service.image" 
              class="w-full h-64 md:h-96 object-cover  shadow-md"
              :alt="service.title"
            />
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-5xl font-bebas-neue tracking-wide text-gray-900 mb-4">
              {{ service.title }}
            </h2>
            <p class="text-gray-600 mb-6 text-lg">
              {{ service.description }}
            </p>
            <ul class="space-y-2 text-gray-600">
              <li 
                v-for="(feature, i) in service.features" 
                :key="i"
                class="flex items-start"
              >
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Craftsmanship Process -->
    <div class="container mx-auto px-4 sm:px-6 max-w-4xl">
      <div class="bg-gray-50 p-8 sm:p-12">
        <h2 class="text-3xl font-bebas-neue text-center tracking-wide text-gray-900 mb-8">
          Our Craftsmanship Process
        </h2>
        <div class="space-y-8">
          <div 
            v-for="(step, index) in processSteps"
            :key="'step-'+index"
            class="flex items-start"
          >
            <div class="bg-primary-500 font-bebas-neue text-4xl text-[#3F4F44] rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
              {{ index + 1 }}
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">
                {{ step.title }}
              </h3>
              <p class="text-gray-600">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Accolades/>
    <Reviews :limit="3"/>
    <GetAnEstimateCard/>
  </div>
</template>

<script setup lang="ts">
// Mocked data structure

const { data: servicesPage } = await useAsyncData(() => queryCollection('pages').path('/page/services').first())


const processSteps = [
  {
    title: "Consultation & Measurement",
    description: "We visit your space to discuss vision, take precise measurements, and provide material recommendations."
  },
  {
    title: "Material Selection",
    description: "Choose from premium hardwoods, MDF, or paint-grade materials with our guidance on durability and aesthetics."
  },
  {
    title: "Shop Fabrication",
    description: "Components are precision-cut and pre-assembled in our workshop to minimize on-site disruption."
  },
  {
    title: "Installation",
    description: "Expert installation with attention to perfect seams, reveals, and transitions."
  },
  {
    title: "Final Finish",
    description: "Professional caulking, puttying, and touch-ups for flawless results ready for paint or stain."
  }
]

useSeoMeta({
  title: servicesPage?.title,
  description: servicesPage?.description
})
</script>

<style>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.05em;
}
</style>