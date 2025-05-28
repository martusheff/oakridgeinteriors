<script setup lang="ts">
import { GetAnEstimateCard } from '#components';
import LowImpactHero from '~/components/LowImpactHero.vue'


const { data: jobs } = await useAsyncData(() => queryCollection('pages').path('/page/jobs').first())
useSeoMeta({
  title: jobs.value?.title || 'Contact',
  description: jobs.value?.description || 'Contact'
})
</script>

<template>
  <div class="w-full flex flex-col">
    <LowImpactHero :title="jobs?.title" :image="jobs?.herobackground" />
    <Reviews />
    <GetAnEstimateCard/>
  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>