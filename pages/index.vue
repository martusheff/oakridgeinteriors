
<!-- <script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(, () => {
  return queryCollection('content').path("/page").first()
})
</script>

<template>
  <div v-if="page">
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <img :src="page.hero" alt="Hero" />
    <NuxtLink :to="page.">{{ page.heroctalabel }}</NuxtLink>
  </div>
</template> -->

<script setup>
const page = await queryConte('page')

</script>

<template>
  <pre>
    {{ page }}
  </pre>
</template>

