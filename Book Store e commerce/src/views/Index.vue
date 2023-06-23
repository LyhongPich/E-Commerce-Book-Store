<script setup>
    import Search from '../components/Header/Search.vue';
    import Link from '../components/Header/Link.vue';
    import Language from '../components/Header/Language.vue';
    import Cart from '../components/Header/Cart.vue'
    import HomeContent from '../components/HomeContent/Home.vue'
</script>

<template>
    <header class="flex h-[93px] bg-zinc-300 items-center text-[18px]">
        <Link nameLink="/" link="Pickle" class="w-[51px] h-[22px] ml-[60px]"></Link>
        <Link nameLink="/shop" link="Shop" class="h-[22px] ml-[557px]"></Link>
        <Link nameLink="/aboutUs" link="About Us" class="h-[22px] ml-[22px]"></Link>
        <Link nameLink="/contact" link="Contact" class="h-[22px] ml-[22px]"></Link>
        
        <Search placeHold="Search" itemUrl="https://cdn-icons-png.flaticon.com/512/54/54481.png"></Search>

        <div class="flex ml-[30px]">
            <button @click="$emit('signup')" class="hover:text-sky-400">Sign Up</button>
            <span>&nbsp;|&nbsp;</span>
            <button @click="$emit('login')" class="hover:text-sky-400">Log In</button>
        </div>

        <Language labelUrl="https://cdn-icons-png.flaticon.com/512/1089/1089292.png" labels="En"></Language>
        <Cart labelUrl="https://cdn-icons-png.flaticon.com/512/263/263142.png" labels="Cart(0)"></Cart>
    </header>
    <br>
    <HomeContent></HomeContent>
    
    
</template>