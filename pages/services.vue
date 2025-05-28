<template>
  <div class="flex flex-col gap-12">
        <LowImpactHero :title="servicesPage?.title" :image="servicesPage?.herobackground" />

        <Reviews :limit="3"/>
        <GetAnEstimateCard/>
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