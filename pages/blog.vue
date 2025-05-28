<script setup lang="ts">


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

    <!-- Blog Posts Grid -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 gap-8">
        <BlogPostCard
          v-for="blogPost in blogPosts"
          :key="blogPost.id"
          :id="blogPost.id"
          :title="blogPost.title"
          :date="blogPost.date"
          :description="blogPost.description"
          :image="blogPost.image"
          :path="blogPost.path"
          :tags="blogPost.tags"
          :meta="blogPost.meta"
        />
      </div>
    </div>

    <Reviews />
    <GetAnEstimateCard/>
  </div>
</template>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}
</style>