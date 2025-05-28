<script setup lang="ts">
import { GetAnEstimateCard } from '#components';
import LowImpactHero from '~/components/LowImpactHero.vue'


const { data: blogPage } = await useAsyncData(() => queryCollection('pages').path('/page/blog').first())
const { data: blogPosts } = await useAsyncData(() => queryCollection('blog').all())

console.log(blogPosts.value)
useSeoMeta({
  title: blogPage.value?.title || 'Blog',
  description: blogPage.value?.description || 'Blog'
})
</script>

<template>
  <div class="w-full flex flex-col">
    <LowImpactHero :title="blogPage?.title" :image="blogPage?.herobackground" />
    <Reviews />
    <GetAnEstimateCard/>
  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>