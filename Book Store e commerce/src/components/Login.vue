<script>
    import { RouterLink } from 'vue-router'
    import Logo from './Logo.vue'

    export default {
        components: {
            Logo,
        }
    }
</script>

<template>
    <div class="w-full h-[779px] flex justify-center items-center">
        <div class="w-[90%] h-auto flex flex-col justify-center items-center">
            <div class="w-[50%] h-[583px] bg-sky-300 flex justify-center items-center">
                <div class="w-[82%] h-[444px]">
                    <div class="text-center text-[32px]">
                        <span>Login</span>
                    </div>
                    <div class="w-full h-[73px] flex items-center justify-center mt-[24px]">
                        <input class="w-[81%] hover:border-2 hover:border-solid hover:border-black h-[73px] border-[1px] rounded-[20px] text-[32px] pl-[4%]" type="text" placeholder="Email">
                    </div>
                    <div class="w-full h-[89px] flex items-center justify-center mt-[19px]">
                        <div class="w-[81%] h-full flex justify-center items-center">
                            <input class="w-full hover:border-2 hover:border-solid hover:border-black h-[89px] border-[1px] rounded-[20px] text-[32px] pl-[4%] mr-[-6%]" type="text" placeholder="Password">
                            <Logo class="w-[6%] h-[35px] opacity-50" url="https://cdn-icons-png.flaticon.com/512/4254/4254118.png"></Logo>
                        </div>
                    </div>
                    <div class="w-full flex items-center justify-center mt-[1px]">
                        <span class="w-[81%] text-right text-[24px]">Forget password?</span>
                    </div>
                    <div class="w-full h-[89px] flex justify-center items-center mt-[20px]">
                        <RouterLink to="/" class="w-[81%] h-[89px] bg-green-500 hover:bg-green-400 rounded-[20px] flex justify-center items-center font-bold text-[24px]">Sign in</RouterLink>
                    </div>
                    <div class="w-full flex justify-center items-center mt-[12px] text-[24px]">
                        <div class="flex w-[81%] justify-center items-center">
                            <span>Didn't own an account yet?&nbsp;</span>
                            <RouterLink to="/signup" class="underline text-green-500 hover:text-green-400">Register</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>