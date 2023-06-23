<script setup>
    defineProps({
        data: {
            type: String,
            require: true
        }
    })
</script>

<template>
    <span>{{ data }}</span>
</template>