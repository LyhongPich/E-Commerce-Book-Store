<script setup>
    defineProps({
        logoSrc: {
            type: String,
            require: true
        }
    })
</script>

<template>
    
    <img :src="logoSrc" alt="">
    
</template>