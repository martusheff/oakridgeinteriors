<template>
    <div class="flex flex-col gap-12 py-12 md:py-24 px-4 md:px-0 items-center justify-center">
        <div class="w-full flex flex-col items-center justify-center md:max-w-[70vw] mx-auto">
            <p class="text-[#3F4F44] font-bebas-neue tracking-wider text-xl text-center">TESTIMONIALS</p>
            <h2 class="font-bebas-neue tracking-wide text-5xl text-center mb-2">See What Our Customers Have To
                <br />Say About Our Work
            </h2>
            <p class="text-black/70 tracking-wider text-xl text-center font-light">We don’t just talk a big game - our
                clients believe in us too. Here’s what some of our customers had to say about their experience with
                Oakridge Interiors in the Willamette Valley</p>

        </div>
        <div class="flex flex-col md:flex-row px-4 md:px-12 gap-6">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />

        </div>
        <NuxtLink href="reviews" class=" bg-[#3F4F44] px-8 py-4 text-white text-2xl tracking-wider font-bebas-neue">
            See All Reviews
        </NuxtLink>
    </div>
</template>


<style scoped>
.font-bebas-neue {
    font-family: 'Bebas Neue', sans-serif;
}
</style>