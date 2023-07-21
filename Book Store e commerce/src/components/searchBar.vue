<script>
    export default {
        data() {
            return {
                search: "",
            }
        },
        methods: {
            searching() {
                // logic
            }
        }
    }
</script>

<template>
    <div class="flex h-[43px] items-center w-[16%]">
        <input type="search" v-model="search" class="mr-[-20%] h-full rounded-[25px] w-full pl-[7%] hover:border-2 hover:border-solid border-black" placeholder="Search">
        <img class="w-[21px] h-[21px] opacity-50 hover:cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="">
    </div>
</template>
