<script>
    import Logo from './Logo.vue'
    import data from '../data.json'
    import Quantity from './Quantity.vue'
    import Line from './Line.vue'
    export default {
        data() {
            return {
                qtd: this.$route.query.qtd
            }
        },
        components: {
            Logo,
            Quantity,
            Line,
        },
        methods: {
            increase() {
                if(this.qtd > 0) {
                    this.qtd++
                }
                else {
                    this.qtd = 1
                }
            },
            decrease() {
                if(this.qtd > 1) {
                    this.qtd--
                }
                else {
                    this.qtd = 1
                }
            },
        },
        computed: {
            getId() {
                return parseInt(this.$route.query.id)
            },
            items() {
                return data.find(item => item.id === this.getId)
            },
            longText() {
                const maxLength = 18;
                return this.items.title.length > maxLength;
            },
            subtotal() {
                return (this.qtd*this.items.price).toFixed(2);
            }
        }
    }
</script>

<template>
    <div class="w-full h-[779px] flex justify-center">
        <div class="w-[90%] h-full">
            <div class="flex h-[436px] items-center mt-[74px]">
                <div class="w-3/5 h-[400px]">
                    <!-- 791.4px -->
                    <span class="text-[2rem]">Your Cart</span>
                    <Line class="w-[90%]"/>
                    <!-- 712.26px -->
                    <!-- <div class="w-full flex">
                        <div class="w-[90%] h-0 border-2 border-solid border-black"></div>
                        712.26
                    </div> -->
                    <div class="w-[90%] flex text-[1.5em] items-center">
                        <div class="w-3/5 flex items-center">
                            <!-- 474.84px -->
                            <span>Item</span>
                        </div>
                        <div class="w-[34%] flex justify-between items-center">
                            <!-- 316.56px -->
                            <span>Price</span>
                            <span>Quantity</span>
                        </div>
                    </div>
                    <Line class="w-[90%]"/>
                    <!-- <div class="w-full flex">
                        <div class="w-[90%] h-0 border-2 border-solid border-black"></div>
                    </div> -->
                    <div class="w-[90%] text-[1.5em] flex h-[226.01px] items-center">
                        <!-- 712.26px -->
                        <div class="w-3/5 flex items-center">
                            <!-- 427.356px -->
                            <Logo class="w-[34%] h-[149px]" :url="items.url"></Logo>
                            <span :class="{'simplifyText' : longText}">{{ items.title }}</span>
                        </div>
                        <div class="w-2/5 flex justify-between items-center">
                            <!-- 284.904px -->
                            <div class="">
                                <span>${{ items.price }}</span>
                            </div>
                            <div class="flex w-[57%] h-[40.25px] rounded-[12px] items-center rounded-l-[12px] bg-slate-200">
                                <button @click="decrease()" class="w-1/4 flex justify-center items-center">
                                    <Logo class="h-[20.12px]" url="https://cdn-icons-png.flaticon.com/512/56/56889.png"></Logo>
                                </button>
                                <input v-model="qtd" type="text" class="w-1/2 h-full text-center border-[2px] border-solid border-slate-200">
                                <button @click="increase()" class="w-1/4 flex justify-center items-center rounded-r-[12px] bg-slate-200">
                                    <Logo class="h-[20.12px]" url="https://cdn-icons-png.flaticon.com/512/32/32339.png"></Logo>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Line class="w-[90%]"/>
                    <!-- 712.26px -->
                    <!-- <div class="w-full flex">
                        <div class="w-[90%] h-0 border-2 border-solid border-black"></div>
                        712.26
                    </div> -->
                    <div class="w-[90%] text-[1.5em] text-right">
                        <span>Subtotal: ${{ subtotal }}</span>
                    </div>
                    <Line class="w-[90%]"/>
                    <!-- 712.26px -->
                    <!-- <div class="w-full flex">
                        <div class="w-[90%] h-0 border-2 border-solid border-black"></div>
                        712.26
                    </div> -->
                </div>
                <div class="w-2/5 h-[400px] flex justify-center items-center bg-gray-300">
                    <div class="w-[92%] h-[361px]">
                        <div class=" text-[2rem] font-bold">
                            <span>Summary (1 item)</span>
                        </div>
                        <div class="w-full flex justify-between items-center text-[1.5rem] mt-[25px]">
                            <span>Subtotal:</span>
                            <span>${{ subtotal }}</span>
                        </div>
                        <div class="w-full flex justify-between items-center text-[1.5rem] my-[26px]">
                            <span>Shipping:</span>
                            <span>-</span>
                        </div>
                        <div class="w-full flex justify-between items-center text-[1.5rem]">
                            <span>Estimated Tax:</span>
                            <span>-</span>
                        </div>
                        <Line class="mt-[35px]"/>
                        <!-- <div class="w-full mt-[35px]">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="w-full flex justify-between items-center text-[1.5rem] font-bold mt-[10px]">
                            <span>Total:</span>
                            <span>${{ subtotal }}</span>
                        </div>
                        <div class="h-[38px] items-center border-[1px] border-solid border-black text-[1.5rem] mt-[5px]">
                            <RouterLink :to="{name: 'checkout', query: {id: getId, qtd: this.qtd}}" class="w-full h-full bg-sky-500 text-white flex justify-center items-center">Checkout</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .simplifyText {
        font-size: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>