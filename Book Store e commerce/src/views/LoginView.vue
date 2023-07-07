<script setup>
    import Logo from '../components/logo.vue'
</script>

<template>
    <div class="h-[1024px]">
        <header class="headTail h-[93px] flex justify-center items-center">
            <div class="w-[90%] flex items-center ">
                
            </div>
        </header>
        <div class="h-[779px] flex justify-center items-center">
            <div class="flex flex-col items-center text-[32px] mt-[99px] mb-[97px] w-[664px] h-[583px] bg-sky-300">
                <div class="mt-[70px]">
                    <span class="">Login</span>
                </div>
                <div class="mt-[24px]">
                    <input type="text" class="w-[536px] h-[73px] placeholder:pl-[25px] rounded-[20px]" placeholder="Email">
                </div>
                <div class="mt-[19px]">
                    <input type="text" class="w-[536px] h-[73px] placeholder:pl-[25px] rounded-[20px]" placeholder="Password">
                    <img src="https://cdn-icons-png.flaticon.com/512/4254/4254118.png" alt="" class="w-[35px] h-[35px] mt-[-53px] ml-[475px] opacity-[35%]">
                </div>
                <div class="mt-[15px] pl-[350px] text-[24px]">
                    <span>Forget password?</span>
                </div>
                <div class="">
                    <button @click="$emit('logout')" class="w-[536px] h-[89px] rounded-[20px] bg-green-500 hover:bg-green-400">Sign In</button>
                </div>
                <div class="text-[24px] flex mt-[19px]">
                    <div class="">
                        <span>Did't own an account yet?</span>
                    </div>
                    <div class="">
                        <button class="underline">Register!</button>
                    </div>
                </div>
            </div>
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


