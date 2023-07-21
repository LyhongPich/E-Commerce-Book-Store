
<script>
    import { RouterLink } from 'vue-router';
    import Search from './SearchBar.vue';
    import Icon from './Icon.vue';

    export default {
        data() {
            return {
                toggle: false,
                hide: 'hidden',
                show: 'block'
            }
        },
        components: {
            Search,
            Icon,
        },
        methods: {
            checkcart() {
                this.toggle = !this.toggle;
                this.$emit('toggle-changed', this.toggle);
            },
            reset() {
                if(this.toggle == true) {
                    this.toggle = false;
                    this.$emit('toggle-changed', this.toggle);
                }
            }
        },
    }
</script>

<template>
    <div class="w-full bg-gray-300 h-[93px] flex justify-center items-center">
        <div class="w-[90%] text-[1.125em] h-auto flex items-center">
            <RouterLink @click="reset()" to="/" class="mr-[37.5%] hover:opacity-50">Pickle</RouterLink>
            <RouterLink @click="reset()" to="/shop" class="hover:opacity-50">Shop</RouterLink>
            <RouterLink @click="reset()" to="/about" class="mx-[2%] hover:opacity-50">About Us</RouterLink>
            <RouterLink @click="reset()" to="/contact" class="hover:opacity-50">Contact</RouterLink>
            <Search @click="reset()" class="mx-[2%]"></Search>
            <RouterLink @click="reset()" to="/signup" class="hover:opacity-50">Sign Up</RouterLink>
            <span>&nbsp;|&nbsp;</span>
            <RouterLink @click="reset()" to="/login" class="hover:opacity-50">Log in</RouterLink>
            <Icon @click="reset()" class="ml-[2.1%] mr-[1%] hover:opacity-50 hover:cursor-pointer" labelUrl="https://cdn-icons-png.flaticon.com/512/1089/1089292.png" desc="EN"></Icon>
            <button @click="checkcart()" class="hover:opacity-50 hover:cursor-pointer">
                <Icon class="" labelUrl="https://cdn-icons-png.flaticon.com/512/263/263142.png" desc="Cart(1)"></Icon>
            </button>
        </div>
    </div>
    <!-- <button @click="checkcart()" class="hover:opacity-50 hover:cursor-pointer absolute mt-[-60px] ml-[1380px]">
        <Icon class="" labelUrl="https://cdn-icons-png.flaticon.com/512/263/263142.png" desc="Cart(0)"></Icon>
    </button> -->
    <div :class="toggle ? show : hide" class="h-[260.5px] w-[29.3%] absolute right-[4.75em] top-[68px]">
        <div class="w-full h-[50px] flex justify-end">
            <div class="triangle mr-[15px]"></div>
        </div>
        <div class="h-[210.5px] mt-[-5px] rounded-[20px] flex justify-center items-center bg-white border-[4px] border-solid border-black relative">
            <div class="w-[95%] h-[190px]">
                <span>Added item to cart</span>
                <div class="h-0 mb-[20px] border-2 border-solid border-black mt-[8px]"></div>
                <span class="">Hiking in the ALPS</span>
                <br>
                <span>Quantity: 1 | $27.00</span>
                <div class="mt-[45px] h-[38px] flex justify-between items-center">
                    <div class="h-[38px] border-[1px] border-solid border-black w-[42%]">
                        <RouterLink to="" class="bg-slate-300 flex w-full h-full justify-center items-center">View Cart</RouterLink>
                    </div>
                    <div class="flex h-full justify-center text-white items-center border-[1px] border-solid border-black bg-sky-500 w-[42%]">
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[0] border-[2.5px] border-solid border-white w-[14.15%] relative mt-[-210.5px] ml-[358.64px]"></div>
    </div>
    <!-- <button @click="window()">Reset</button> -->
</template>

<style scoped>
    .triangle {
        width: 0px;
        height: 0px;
        position: relative;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 50px solid black;
    }
    .triangle::before {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        left: -32px;
        top: 5.5px;
        border-left: 32px solid transparent;
        border-right: 32px solid transparent;
        border-bottom: 40px solid white;
    }
</style>