<script setup>
    defineProps({
        btn: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="">
        <button class="w-[142px] h-[48px] bg-black text-white">{{ btn }}</button>
    </div>
        
    
</template>