
<script setup>
    import SearchBar from '../components/searchBar.vue'
    import Icon from '../components/icon.vue'
    import Logo from '../components/logo.vue'
</script>

<template>
    <div class="h-[1024px]">
        <header class="headTail h-[93px] flex justify-center items-center">
            <div class="w-[90%] flex items-center ">
                <div class="w-[729px]">
                    <RouterLink to="/" class="mr-[55%] hover:text-sky-400">Pickle</RouterLink>
                    <RouterLink to="/shop" class="hover:text-sky-400">Shop</RouterLink>
                    <RouterLink to="/about" class="mx-[4%] hover:text-sky-400">About us</RouterLink>
                    <RouterLink to="/contact" class="hover:text-sky-400">Contact</RouterLink>
                </div>
                <div class="flex items-center ">
                    <SearchBar></SearchBar>
                </div>
                <div class="flex items-center ml-[6%] w-[10%]">
                    <button class="hover:text-sky-400" @click="$emit('signUp')">Sign Up</button>
                    &nbsp;|&nbsp;
                    <button class="hover:text-sky-400" @click="$emit('login')">Log in</button>
                </div>
                <div class="flex items-center ml-[7%] w-[12%]">
                    <div class="flex items-center hover:text-sky-400 cursor-pointer">
                        <Icon labelUrl="https://cdn-icons-png.flaticon.com/512/1089/1089292.png" labels="EN"></Icon>
                    </div>
                    <div class="flex items-center ml-[20%] hover:text-sky-400 cursor-pointer">
                        <Icon labelUrl="https://cdn-icons-png.flaticon.com/512/263/263142.png" labels="Cart(0)"></Icon>
                    </div>
                </div>
            </div>
        </header>
        <div class="h-[779px] flex justify-center items-center">
            <RouterView/>
        </div>
        <footer class="h-[152px] headTail flex justify-center">
            <div class="w-[90%] flex flex-col justify-center">
                <div class="text-right w-full">
                    <span class="mr-[1.75%] font-semibold">Sign up for our newsletter</span>
                </div>
                <div class="h-[43px] flex items-center my-[1%]">
                    <div class="flex items-center w-[15%] h-[43px]">
                        <div class="">
                            <Logo logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                                class="w-[51px]"></Logo>
                        </div>
                        <div class="mx-[7%]">
                            <Logo logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
                                class="w-[51px]"></Logo>
                        </div>
                        <div class="">
                            <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/196/196566.png"
                                class="w-[84px]"></Logo>
                        </div>
                    </div>
                    <div class="flex items-center w-[27%] h-[43px] ml-[19%]">
                        <span>FAQ</span>
                        <span class="ml-[40%]">Join Us</span>
                        <div class="ml-[2%]">
                            <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" class="w-[21px] h-[21px]"></Logo>
                        </div>
                        <div class="ml-[3%]">
                            <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" class="w-[21px] h-[21px]"></Logo>
                        </div>
                        <div class="ml-[3%]">
                            <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/174/174855.png" class="w-[21px] h-[21px]"></Logo>
                        </div>
                        <div class="ml-[3%]">
                            <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/5968/5968823.png" class="w-[21px] h-[21px]"></Logo>
                        </div>
                    </div>
                    <div class="w-[20%] flex items-center ml-[19%]">
                        <input type="text" class="w-[55%] text-center h-[43px] hover:border-2 hover:border-black hover:border-solid" placeholder="Enter your email">
                        <button class="bg-black text-white w-[45%] h-[43px] text-center">Subscribe Now</button>
                    </div>
                </div>
                <div class="flex items-center opacity-40">
                    <div class="">
                        <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/74/74717.png" class="w-[21px] h-[21px]"></Logo>
                    </div>
                    <div class="mx-[1%]">
                        <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/2/2013.png" class="w-[5px] h-[5px]"></Logo>
                    </div>
                    <span class="font-bold">Wix - All rights reserved</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<style>
    .headTail {
        background-color: #D9D9D9;
    }
</style>