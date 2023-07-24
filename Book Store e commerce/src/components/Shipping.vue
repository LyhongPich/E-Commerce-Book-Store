<script>
    import data from '../data.json'
    import { RouterLink } from 'vue-router'
    import Line from './Line.vue'

    export default {
        data() {
            return {
                selectedValue: 'Ground',
            }
        },
        components: {
            Line,
        },
        computed: {
            getId() {
                return parseInt(this.$route.query.id);
            },
            getQtd() {
                return parseInt(this.$route.query.qtd);
            },
            items() {
                return data.find(item => item.id === this.getId);
            },
            priceShipping() {
                if(this.selectedValue == 'Ground') {
                    return 2.2;
                }
                else if(this.selectedValue == '3-day') {
                    return 5.5;
                }
                else if(this.selectedValue == '2-day') {
                    return 9.2;
                }
                else if(this.selectedValue == 'Next-day') {
                    return 12.5;
                } 
            },
            subtotal() {
                return (this.getQtd*this.items.price);
            },
            total() {
                return (this.subtotal+this.priceShipping+1.4);
            }
        }
    }
</script>

<template>
    <div class="w-full h-[779px] flex justify-center">
        <div class="w-[90%] h-full">
            <div class="flex h-[452px] items-center mt-[55px]">
                <div class="w-3/5 h-full">
                    <div class="w-[90%]">
                        <div class="flex items-center text-[1.125rem]">
                            <RouterLink :to="{name: 'cart', query: {id: getId, qtd: getQtd}}">Cart</RouterLink>
                            &nbsp;>&nbsp;
                            <RouterLink :to="{name: 'checkout', query: {id: getId, qtd: getQtd}}">Customer Information</RouterLink>
                            &nbsp;>&nbsp;
                            <RouterLink :to="{name: 'shipping', query: {id: getId, qtd: getQtd}}">Shipping</RouterLink>
                        </div>
                        <Line class="mt-[19px]"/>
                        <!-- <div class="mt-[19px]">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="flex justify-between items-center my-[25px]">
                            <div class="flex text-[1.25rem]">
                                <span class="font-bold">Shipping Address</span>
                                <span>&nbsp;#20, 150, Phnom Penh, Cambodia</span>
                            </div>
                            <span class="text-blue-500 underline text-[1rem]">Edit</span>
                        </div>
                        <Line/>
                        <!-- <div class="">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="text-[1.5rem] mt-[25px]">
                            <span>Shipping Method</span>
                        </div>
                        <div class="flex h-[24px] justify-between items-center text-[1.25rem] mt-[26px]">
                            <div class="">
                                <input type="radio" v-model="selectedValue" name="shipping" value="Ground" class="mr-[5px]">
                                <span>UPS Ground</span>
                            </div>
                            <span>$2.20</span>
                        </div>
                        <div class="flex h-[24px] justify-between items-center text-[1.25rem] mt-[15px]">
                            <div class="">
                                <input type="radio" v-model="selectedValue" name="shipping" value="3-day" class="mr-[5px]">
                                <span>UPS 3 Day Select</span>
                            </div>
                            <span>$5.50</span>
                        </div>
                        <div class="flex h-[24px] justify-between items-center text-[1.25rem] my-[15px]">
                            <div class="">
                                <input type="radio" v-model="selectedValue" name="shipping" value="2-day" class="mr-[5px]">
                                <span>UPS 2nd Day Air</span>
                            </div>
                            <span>$9.20</span>
                        </div>
                        <div class="flex h-[24px] justify-between items-center text-[1.25rem]">
                            <div class="">
                                <input type="radio" v-model="selectedValue" name="shipping" value="Next-day" class="mr-[5px]">
                                <span>UPS Next Day Air</span>
                            </div>
                            <span>$12.50</span>
                        </div>
                        <Line class="mt-[25px]"/>
                        <!-- <div class="mt-[25px]">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="h-[34px] text-[1.125rem] flex justify-between items-center mt-[22px]">
                            <RouterLink class="h-full flex items-center" :to="{name: 'checkout', query: {id: getId, qtd: getQtd}}">&lt; Return to Customer Information</RouterLink>
                            <RouterLink class="w-[35%] h-full border-2 border-solid border-black flex justify-center items-center bg-sky-500 text-white" :to="{name: 'payment', query: {ship: selectedValue, id: getId, qtd: getQtd}}">Continue to Payment Method</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="w-2/5 h-full flex justify-center bg-gray-300">
                    <!-- 527.6px -->
                    <div class="w-[92%] h-[383px] my-[15px]">
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
                            <span>${{ priceShipping.toFixed(2) }}</span>
                        </div>
                        <div class="w-full flex justify-between items-center text-[1.5rem]">
                            <span>Estimated Tax:</span>
                            <span>$1.40</span>
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
                            <span>${{ total.toFixed(2) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>