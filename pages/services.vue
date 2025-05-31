<template>
  <div class="flex flex-col gap-12">
    <LowImpactHero 
      :title="servicesPage?.title" 
      :image="servicesPage?.herobackground" 
    />

    <!-- Page Introduction -->
    <div class="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
      <p class="text-lg text-gray-600 mb-12">
        {{ servicesPageMock.description }}
      </p>
    </div>

    <!-- Dynamic Services -->
    <div 
      v-for="(service, index) in servicesPageMock.services" 
      :key="index"
      class="w-full"
      :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'"
    >
      <div class="container mx-auto px-4 sm:px-6 max-w-6xl py-12 md:py-16">
        <div 
          class="flex flex-col items-center gap-8 md:gap-12"
          :class="{'md:flex-row': index % 2 === 0, 'md:flex-row-reverse': index % 2 !== 0}"
        >
          <div class="w-full md:w-1/2">
            <NuxtImg 
              :src="service.image" 
              class="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
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
      <div class="bg-gray-50 rounded-xl p-8 sm:p-12">
        <h2 class="text-3xl font-bebas-neue text-center tracking-wide text-gray-900 mb-8">
          Our Craftsmanship Process
        </h2>
        <div class="space-y-8">
          <div 
            v-for="(step, index) in processSteps"
            :key="'step-'+index"
            class="flex items-start"
          >
            <div class="bg-primary-500 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
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

const servicesPageMock = {
  title: "Finish Carpentry Services",
  description: "Masterful finish carpentry that elevates your space. From custom millwork to precision installations, we bring craftsmanship to every detail.",
  herobackground: "/placeholder-carpentry-hero.jpg",
  services: [
    {
      title: "Crown Molding & Trim",
      description: "Elevate your ceilings with custom crown molding installations. We specialize in seamless joints and perfect transitions, offering a range of profiles from simple modern to ornate traditional styles.",
      image: "/placeholder-crown-molding.jpg",
      features: [
        "Custom profile design",
        "Seamless corner joints",
        "Paint-grade or stain-grade materials"
      ]
    },
    {
      title: "Custom Cabinetry",
      description: "Built-to-order storage solutions designed for your specific space and needs. From bookcases to entertainment centers, we create functional pieces with exceptional craftsmanship.",
      image: "/placeholder-custom-cabinets.jpg",
      features: [
        "Built-in shelving units",
        "Entertainment centers",
        "Custom closet systems"
      ]
    },
    {
      title: "Wainscoting & Paneling",
      description: "Transform your walls with elegant wainscoting and paneling. We offer various styles including beadboard, raised panel, and flat panel designs to complement your interior aesthetic.",
      image: "/placeholder-wainscoting.jpg",
      features: [
        "Beadboard installation",
        "Custom panel heights",
        "Chair rail and cap molding"
      ]
    }
  ]
}

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
  title: servicesPageMock.title,
  description: servicesPageMock.description
})
</script>

<style>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.05em;
}
</style>