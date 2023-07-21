<script setup>
    import Logo from './Logo.vue'
    defineProps({
        btnRound: {
            type: String,
        },
        logoDim: {
            type: String,
        },
        inc: {
            type: String,
        },
        dec: {
            type: String,
        },
        data: {
            type: String,
        }
    })
</script>

<template>
    <div class="flex w-full h-full items-center" :class="`rounded-[${btnRound}]`">
        <button @click="dec" class="w-1/4 flex justify-center items-center h-full bg-slate-200" :class="`rounded-l-[${btnRound}]`">
            <Logo :class="logoDim" url="https://cdn-icons-png.flaticon.com/512/56/56889.png"></Logo>
        </button>
        <input v-model="this.data" class="w-1/2 h-full text-center border-[2px] border-solid border-slate-200" type="text">
        <button @click="inc" class="w-1/4 flex justify-center items-center h-full bg-slate-200" :class="`rounded-r-[${btnRound}]`">
            <Logo :class="logoDim" url="https://cdn-icons-png.flaticon.com/512/32/32339.png"></Logo>
        </button>
    </div>
</template>