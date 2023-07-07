<script setup>
    defineProps({
       logoSrc: {
            type: String,
            required: true,
       } 
    })
</script>

<template>
    <img :src="logoSrc" alt="">
</template>