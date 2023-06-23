
<script setup>
    import { RouterLink } from 'vue-router';
    defineProps({
        nameLink: {
            type: String
        },
        link: {
            type: String
        }
    })
</script>

<template>
    <div class="">
        <RouterLink :to="nameLink" class="hover:text-sky-400">{{ link }}</RouterLink>
    </div>
</template>