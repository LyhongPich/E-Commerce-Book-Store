<script setup>
    defineProps({
        data: {
            type: String,
            required: true
        }
    })
</script>

<template>
    
    <span>{{ data }}</span>
    
</template>