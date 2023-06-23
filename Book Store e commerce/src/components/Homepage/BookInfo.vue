<script setup>
    defineProps({
        bookUrl: {
            type: String,
            required: true
        },
        data: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="text-center w-[224px] h-[286px]">
        <div class="">
            <img :src="bookUrl" alt="">
        </div>
        <div class="">
            <span>{{ data }}</span>
        </div>
        <div class="">
            <span>{{ price }}</span>
        </div>
    </div>
</template>