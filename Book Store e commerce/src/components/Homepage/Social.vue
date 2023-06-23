<script setup>
    defineProps({
        socialUrl: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="">
        <img :src="socialUrl" alt="" class="w-[291px] h-[96px] opacity-[45%]">
    </div>
</template>