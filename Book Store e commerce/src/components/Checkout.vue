<script>
    import { RouterLink } from 'vue-router'
    import data from '../data.json'
    import Line from './Line.vue'
    export default {
        components: {
            Line,
        },
        computed: {
            getId() {
                return parseInt(this.$route.query.id);
            },
            items() {
                return data.find(item => item.id === this.getId);
            },
            getQtd() {
                return parseInt(this.$route.query.qtd);
            },
            subtotal() {
                return (this.getQtd*this.items.price);
            }
        }
    }
</script>

<template>
    <div class="w-full h-[779px] flex justify-center">
        <div class="w-[90%] h-full">
            <!-- 1319px -->
            <div class="flex h-[510px] mt-[55px]">
                <div class="w-3/5 h-full">
                    <!-- 791.4px -->
                    <div class="w-[90%]">
                        <!-- 712.26px -->
                        <div class="text-[1.125rem]">
                            <RouterLink :to="{name: 'cart', query: {id: getId, qtd: getQtd}}">Cart</RouterLink>
                            &nbsp;>&nbsp;
                            <RouterLink :to="{name: 'checkout', query: {id: getId, qtd: getQtd}}">Customer Information</RouterLink>
                        </div>
                        <Line class="mt-[22px]"/>
                        <!-- <div class="mt-[22px]">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="flex justify-between items-center mt-[18px]">
                            <span class="text-[1.5rem]">Customer Information</span>
                            <span class="text-[1rem]">Already have an account? <RouterLink class="text-blue-500" to="/login">Log in</RouterLink></span>
                        </div>
                        <div class="h-[46px] mt-[25px]">
                            <input class="w-full h-full text-[1.25rem] pl-[3%] border-2 border-solid border-black rounded-[10px]" type="text" placeholder="Email">
                        </div>
                        <Line class="mt-[30px]"/>
                        <!-- <div class="mt-[30px]">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="text-[1.5rem] mt-[15px]">
                            <span>Shipping Address</span>
                        </div>
                        <div class="h-[46px] flex justify-between items-center mt-[10px]">
                            <input class="w-[47%] h-full text-[1.25rem] rounded-[10px] pl-[3%] border-2 border-solid border-black" type="text" placeholder="Firstname">
                            <!-- 334px -->
                            <input class="w-[47%] h-full text-[1.25rem] rounded-[10px] pl-[3%] border-2 border-solid border-black" type="text" placeholder="Lastname">
                        </div>
                        <div class="h-[46px] mt-[10px]">
                            <input class="w-full h-full text-[1.25rem] pl-[3%] border-2 border-solid border-black rounded-[10px]" type="text" placeholder="Address">
                        </div>
                        <div class="h-[46px] flex justify-between items-center text-gray-400 mt-[10px]">
                            <select name="country" id="" class="w-[40%] h-full text-[1.25rem] pl-[2%] border-2 border-solid border-black rounded-[10px]">
                                <option value="" selected disabled>Country</option>
                                <option value="Cambodia">Cambodia</option>
                            </select>
                            <select name="state" id="" class="w-[40%] h-full text-[1.25rem] pl-[2%] border-2 border-solid border-black rounded-[10px]">
                                <option value="" selected disabled>State</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                            </select>
                            <input class="w-[10%] h-full text-[1.25rem] pl-[2%] border-2 border-solid border-black rounded-[10px]" type="text" placeholder="Zip">
                        </div>
                        <Line class="mt-[22px]"/>
                        <!-- <div class="mt-[22px]">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="h-[34px] text-[1.125rem] flex justify-between items-center mt-[22px]">
                            <RouterLink class="h-full flex items-center" :to="{name: 'cart', query: {id: getId, qtd: getQtd}}">&lt; Return to cart</RouterLink>
                            <RouterLink class="w-[35%] h-full border-2 border-solid border-black flex justify-center items-center bg-sky-500 text-white" :to="{name: 'shipping', query: {id: getId, qtd: getQtd}}">Continue to shipping</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="w-2/5 h-full flex justify-center bg-gray-300">
                    <!-- 527.6px -->
                    <div class="w-[92%] h-[383px] my-[50px]">
                        <!-- 485.392px -->
                        <div class="text-[2rem] font-bold">
                            <span>Summary (1 item)</span>
                        </div>
                        <div class="w-full flex justify-between items-center text-[1.5rem] mt-[25px]">
                            <span>Subtotal:</span>
                            <span>${{ subtotal.toFixed(2) }}</span>
                        </div>
                        <div class="w-full flex justify-between items-center text-[1.5rem] my-[26px]">
                            <span>Shipping:</span>
                            <span>-</span>
                        </div>
                        <div class="w-full flex justify-between items-center text-[1.5rem]">
                            <span>Estimated Tax:</span>
                            <span>-</span>
                        </div>
                        <div class="w-full text-[1.5rem] mt-[26px]">
                            <span>Gift code</span>
                        </div>
                        <div class="w-full h-[43px] flex justify-between text-[1rem] items-center mt-[17px]">
                            <input type="text" class="w-[47%] h-full border-2 border-solid border-black pl-[2%]">
                            <button class="w-[28%] h-full bg-sky-500 text-white">Apply</button>
                        </div>
                        <Line class="mt-[18px]"/>
                        <!-- <div class="w-full mt-[18px]">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="w-full flex justify-between items-center text-[1.5rem] font-bold mt-[10px]">
                            <span>Total:</span>
                            <span>${{ subtotal.toFixed(2) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>