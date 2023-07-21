<script setup>
    defineProps({
        url: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        style: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        }
    })
</script>

<template>
    <div class="flex items-center">
        <div class="w-[17%]">
            <img :src="url" alt="" :class="style">
        </div>
        <div class="w-[83%] h-[174px] flex flex-col justify-center overflow-y-auto">
            <div class="text-[1.5em] font-bold">
                <span>{{ genre }}</span>
            </div>
            <div class="">
                <span>{{ desc }}</span>
            </div>
        </div>
    </div>
</template>