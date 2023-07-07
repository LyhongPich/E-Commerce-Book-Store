<script setup>
    defineProps({
        imageUrl: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        desc: {

        }
    })
</script>

<template>
    <div class="w-[17%] mr-[2%]">
        <img :src="imageUrl" alt="" class="w-[500px] h-[204px]">
    </div>
    <div class="w-[81%] h-[174px]">
        <span>{{ title }}</span>
        <p class="mt-[15px]">{{ desc }}</p>
    </div>
</template>