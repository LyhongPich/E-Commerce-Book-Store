<script setup>
    import Search from '../components/Header/Search.vue'
    import Link from '../components/Header/Link.vue';
    import Language from '../components/Header/Language.vue';
    import Cart from '../components/Header/Cart.vue'
</script>

<template>
    <header class="flex h-[93px] bg-zinc-300 items-center text-[18px]">
        <Link nameLink="/" link="Pickle" class="w-[51px] h-[22px] ml-[60px] mr-[150px]"></Link>

        <Link nameLink="/shop" link="Shop" class="h-[22px] ml-[557px]"></Link>
        <Link nameLink="/aboutUs" link="About Us" class="h-[22px] ml-[22px]"></Link>
        <Link nameLink="/contact" link="Contact" class="h-[22px] ml-[22px]"></Link>
        
        <Search placeHold="Search" itemUrl="https://cdn-icons-png.flaticon.com/512/54/54481.png"></Search>

        <Language labelUrl="https://cdn-icons-png.flaticon.com/512/1089/1089292.png" labels="En"></Language>
        <Cart labelUrl="https://cdn-icons-png.flaticon.com/512/263/263142.png" labels="Cart(0)"></Cart>
    </header>
    <div class="flex h-[583] justify-center items-center">
        <div class="flex flex-col items-center text-[32px] mt-[99px] mb-[97px] w-[664px] h-[583px] bg-sky-300">
            <div class="mt-[70px]">
                <span class="">Register</span>
            </div>
            <div class="mt-[24px]">
                <input type="text" class="w-[536px] h-[73px] placeholder:pl-[25px] rounded-[20px]" placeholder="Email">
            </div>
            <div class="mt-[19px]">
                <input type="text" class="w-[536px] h-[73px] placeholder:pl-[25px] rounded-[20px]" placeholder="Password">
                <img src="https://cdn-icons-png.flaticon.com/512/4254/4254118.png" alt="" class="w-[35px] h-[35px] mt-[-53px] ml-[475px] opacity-[35%]">
            </div>
            <div class="mt-[40px]">
                <input type="text" class="w-[536px] h-[73px] placeholder:pl-[25px] rounded-[20px]" placeholder="Confirm Password">
                <img src="https://cdn-icons-png.flaticon.com/512/4254/4254118.png" alt="" class="w-[35px] h-[35px] mt-[-53px] ml-[475px] opacity-[35%]">
            </div>
            <div class="mt-[40px]">
                <button @click="$emit('back')" class="w-[536px] h-[89px] bg-green-500 hover:bg-green-400 rounded-[20px]">Create Account</button>
            </div>
        </div>
    </div>
</template>