<script setup lang="ts">
import { GetAnEstimateCard } from '#components';
import LowImpactHero from '~/components/LowImpactHero.vue'


const { data: contact } = await useAsyncData(() => queryCollection('pages').path('/page/contact').first())
useSeoMeta({
  title: contact.value?.title || 'Contact',
  description: contact.value?.description || 'Contact'
})
</script>

<template>
  <div class="w-full flex flex-col">
    <LowImpactHero :title="contact?.title" :image="contact?.herobackground" />
    <Contact/>
    <Reviews :limit="3"/>
    
  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>