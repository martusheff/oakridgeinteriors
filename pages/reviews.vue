<script setup lang="ts">
import { GetAnEstimateCard } from '#components';
import LowImpactHero from '~/components/LowImpactHero.vue'


const { data: reviewPage } = await useAsyncData(() => queryCollection('pages').path('/page/reviews').first())

useSeoMeta({
  title: reviewPage.value?.title || 'Reviews',
  description: reviewPage.value?.description || 'Reviews'
})
</script>

<template>
  <div class="w-full flex flex-col">
    <LowImpactHero :title="reviewPage?.title" :image="reviewPage?.herobackground" />
    <Reviews/>
    <GetAnEstimateCard/>
  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>