<script setup lang="ts">

interface Props {
  limit?: number;
}
const { limit = 12 } = defineProps<Props>();

const { data: reviews } = await useAsyncData('reviews', () => {
  return queryCollection('reviews').limit(limit).all();
});

</script>

<template>
    <div v-if="reviews" class="flex flex-col gap-12 py-12 md:py-24 px-2 md:px-0 items-center justify-center">
        <div class="w-full flex flex-col items-center justify-center md:max-w-[70vw] mx-auto">
            <p class="text-[#3F4F44] font-bebas-neue tracking-wider text-xl text-center">TESTIMONIALS</p>
            <h2 class="font-bebas-neue text-black tracking-wide text-5xl text-center mb-2">See What Our Customers Have To
                Say About Our Work
            </h2>
            <p class="text-black/70 tracking-wider text-xl text-center font-light px-2">We don’t just talk a big game - our
                clients believe in us too. Here’s what some of our customers had to say about their experience with
                Oakridge Interiors in the Willamette Valley</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-12 gap-6">
            <ReviewCard v-for="review in reviews" :key="review.id" :id="review.id" :title="review.title" :description="review.description" :clientname="review.clientname" :clientlocation="review.clientlocation"/>
        </div>

        <NuxtLink v-if="limit <= 3" href="reviews" class="bg-[#3F4F44] px-8 py-4 text-white text-2xl tracking-wider font-bebas-neue">
            See All Reviews
        </NuxtLink>
    </div>
</template>

<style scoped>
.font-bebas-neue {
    font-family: 'Bebas Neue', sans-serif;
}
</style>