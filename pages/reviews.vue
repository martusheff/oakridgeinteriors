<script setup lang="ts">
import LowImpactHero from '~/components/LowImpactHero.vue'


const { data: reviews } = await useAsyncData(() => queryCollection('pages').path('/page/reviews').first())
useSeoMeta({
  title: reviews.value?.title || 'Reviews',
  description: reviews.value?.description || 'Reviews'
})
</script>

<template>
  <div class="w-full flex flex-col">
    <LowImpactHero :title="reviews?.title" :image="reviews?.herobackground" />
    <Reviews />
  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>