<script setup>
    defineProps({
        labelUrl: {
            type: String,
            require: true
        },
        labels: {
            type: String,
            require: true
        }
    })
</script>

<template>
    
    <div class="ml-[30px] flex mt-[6.5px] hover:text-sky-400 cursor-pointer">
        <div class="">
            <img :src="labelUrl" alt="" class="w-[22px] h-[22px]">
        </div>
        <div class="ml-[8px]">
            <span>{{ labels }}</span>
        </div>
    </div>
    
    
</template>