<template>
  <div class="h-screen">
        <LowImpactHero :title="servicesPage?.title" :image="servicesPage?.herobackground" />

        <Reviews :limit="3"/>

   </div>
</template>

<script setup lang="ts">


const { data: servicesPage } = await useAsyncData(() => queryCollection('pages').path('/page/services').first())

useSeoMeta({
  title: servicesPage.value?.title || 'Services',
  description: servicesPage.value?.description || 'Services'
})
</script>

<style>

</style>