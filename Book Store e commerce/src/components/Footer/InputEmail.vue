<script setup>
    defineProps({
        placeHold: {
            type: String,
            required: true
        }
    })
</script>

<template>
    
    <div class="ml-[10px]">
        <input type="text" :placeholder="placeHold" name="" id="mail" class="w-[145px] h-[48px] text-center">
    </div>
    
    
</template>