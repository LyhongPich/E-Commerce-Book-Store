<script setup>
    defineProps({
        bookUrl: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="ml-[10px]">
        <img :src="bookUrl" alt="" class="w-[130px] h-[224px]">
    </div>
</template>