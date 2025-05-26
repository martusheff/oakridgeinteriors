<template>
    <div class="flex gap-3 hover:scale-105 transition-all duration-300">
        <div class="flex items-center justify-center p-2 bg-[#DCD7C9]/50 rounded-full">
            <div class="w-7 h-7 flex items-center justify-center p-1">
                <slot />
            </div>
        </div>
        <div class="hidden sm:flex flex-col justify-center gap-0.5">
            <span class="font-bebas-neue text-md leading-none tracking-wider">
                {{ title }}
            </span>
            <a :href="url" class="text-sm font-extralight leading-none tracking hover:text-secondary transition-colors">
                {{ subtitle }}
            </a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    icon: String,
    title: String,
    subtitle: String,
    url: String
})
</script>

<style scoped>
.font-bebas-neue {
    font-family: 'Bebas Neue', sans-serif;
}
</style>