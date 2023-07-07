<script setup>
    defineProps({
        labelUrl: {
            type: String,
            required: true
        },
        labels: {
            type: String,
            required: true
        }
    })
</script>

<template>
    
    <img :src="labelUrl" alt="" class="w-[22px] h-[22px]">
    <span class="ml-[8px]">{{ labels }}</span>
    
</template>