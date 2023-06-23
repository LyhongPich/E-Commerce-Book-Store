<script setup>
    defineProps({
        placeHold: {
            type: String,
            required: true
        },
        itemUrl: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="">
        <input type="text" :placeholder="placeHold" class="w-[206px] h-[43px] ml-[30px] border-none rounded-[25px] pl-[15px] placeholder: text-[18px] text-zinc-300">
    </div>
    
    <img :src="itemUrl" alt="" class="w-[21px] h-[21px] ml-[-40px] cursor-pointer">
</template>