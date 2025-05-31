<template>
    <div
        class="w-full relative border-[#3F4F44] hover:cursor-pointer border-2 border-solid transition-all duration-100 flex flex-col items-start justify-start  p-6 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="">
            <path
                d="M0 38V22.2759L0.238095 18.5831C0.952381 14.1358 2.57937 10.4033 5.11905 7.38558C7.65873 4.2884 10.9524 2.06479 15 0.714731L17.8571 0V6.55172L16.6667 7.02821C12.0635 9.25183 9.40476 13.1829 8.69048 18.8213L8.57143 20.7273H17.381V38H0ZM22.1429 38V22.2759L22.381 18.5831C23.0952 14.2153 24.7222 10.4828 27.2619 7.38558C29.881 4.20899 33.1746 1.98537 37.1429 0.714731L40 0V6.55172L38.8095 7.02821C34.2063 9.093 31.5476 13.024 30.8333 18.8213L30.7143 20.7273H39.5238V38H22.1429Z"
                fill="#3F4F44" />
        </svg>
        <h2 class="font-bebas-neue text-4xl mt-8 tracking-wide">{{ title }}</h2>
        <p class="font-light mt-2">{{ description }}</p>
        <p class="italic mt-6 font-light text-sm">{{ clientname }} - {{ clientlocation }}</p>
    </div>
</template>

<script setup lang="ts">
    interface Review {
        id: string;
        title: string;
        description: string;
        clientname: string;
        clientlocation: string;
    }
    defineProps<Review>()
</script>


<style scoped>
.font-bebas-neue {
    font-family: 'Bebas Neue', sans-serif;
}
</style>