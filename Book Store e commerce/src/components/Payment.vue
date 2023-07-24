<script>
    import data from '../data.json'
    import Logo from './Logo.vue'
    import Line from './Line.vue'
    export default {
        data() {
            return {
                selectedBilling: 'default'
            }
        },
        components: {
            Logo,
            Line,
        },
        computed: {
            getId() {
                return parseInt(this.$route.query.id);
            },
            getQtd() {
                return parseInt(this.$route.query.qtd);
            },
            getShippingMethod() {
                return this.$route.query.ship;
            },
            items() {
                return data.find(item => item.id === this.getId);
            },
            shippingType() {
                if(this.getShippingMethod == 'Ground') {
                    return 'UPS Ground';
                }
                else if(this.getShippingMethod == '3-day') {
                    return "UPS 3 Day Select";
                }
                else if(this.getShippingMethod == '2-day') {
                    return "UPS 2nd Day Air";
                }
                else if(this.getShippingMethod == 'Next-day') {
                    return "UPS Next Day Air";
                }
            },
            shippingPrice() {
                if(this.getShippingMethod == 'Ground') {
                    return 2.2;
                }
                else if(this.getShippingMethod == '3-day') {
                    return 5.5;
                }
                else if(this.getShippingMethod == '2-day') {
                    return 9.2;
                }
                else if(this.getShippingMethod == 'Next-day') {
                    return 12.5;
                } 
            },
            subtotal() {
                return (this.getQtd*this.items.price);
            },
            total() {
                return (this.subtotal+this.shippingPrice+1.4);
            }
        }
    }
</script>

<template>
    <div class="w-full h-[779px] flex justify-center">
        <div class="w-[90%] h-full">
            <div class="flex items-center h-[737px] mt-[24px]">
                <div class="w-3/5 h-full">
                    <!-- 791.4px -->
                    <div class="w-[90%]">
                        <!-- 712.26px -->
                        <div class="flex items-center text-[1.125rem]">
                            <RouterLink :to="{name: 'cart', query: {id: getId, qtd: getQtd}}">Cart</RouterLink>
                            &nbsp;>&nbsp;
                            <RouterLink :to="{name: 'checkout', query: {id: getId, qtd: getQtd}}">Customer Information</RouterLink>
                            &nbsp;>&nbsp;
                            <RouterLink :to="{name: 'shipping', query: {id: getId, qtd: getQtd}}">Shipping</RouterLink>
                            &nbsp;>&nbsp;
                            <RouterLink :to="{name: 'payment', query: {ship: getShippingMethod,id: getId, qtd: getQtd}}">Payment Method</RouterLink>
                        </div>
                        <Line class="mt-[21.25px]"/>
                        <!-- <div class="mt-[21.25px]">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="flex justify-between items-center my-[20px]">
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
                        <div class="flex justify-between items-center my-[20px]">
                            <div class="flex text-[1.25rem]">
                                <span class="font-bold">Shipping Method</span>
                                <span>&nbsp;{{ shippingType }}, ${{ shippingPrice.toFixed(2) }}</span>
                            </div>
                            <span class="text-blue-500 underline text-[1rem]">Edit</span>
                        </div>
                        <Line/>
                        <!-- <div class="">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="h-[84px] flex justify-between items-center">
                            <div class=" text-[1.5rem]">
                                <span>Payment Method</span>
                            </div>
                            <div class="flex w-[32%] justify-center items-center h-full">
                                <!-- 226px -->
                                <Logo class=" h-[16.75px]" url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"></Logo>
                                <Logo class=" h-[30.6px] mx-[9%]" url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"></Logo>
                                <Logo class=" h-[84px]" url="https://cdn-icons-png.flaticon.com/512/196/196566.png"></Logo>
                            </div>
                        </div>
                        <div class="h-[44px] flex items-center text-[1.125rem]">
                            <input class="w-full h-full border-2 border-solid border-black pl-[2%]" placeholder="Card Number" type="text">
                            <!-- <Logo class="h-[24px]" url="https://cdn-icons-png.flaticon.com/512/1828/1828471.png"></Logo> -->
                        </div>
                        <div class="h-[44px] flex items-center justify-between text-[1.125rem] mt-[20px]">
                            <input type="text" class="w-[34%] h-full border-2 border-solid border-black pl-[2%]" placeholder="Name on card">
                            <input type="text" class="w-[34%] h-full border-2 border-solid border-black pl-[2%]" placeholder="MM/YY">
                            <input type="text" class="w-[27%] h-full border-2 border-solid border-black pl-[2%]" placeholder="CVV">
                        </div>
                        <Line class="mt-[20px]"/>
                        <!-- <div class="mt-[20px]">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="text-[1.5rem] font-bold my-[13px]">
                            <span>Billing Address</span>
                        </div>
                        <div class="h-[44px] flex items-center border-2 border-solid border-black text-[1.25rem]">
                            <input type="radio" v-model="selectedBilling" name="bAddress" value="default" class="mx-[2%]">
                            <span>Same as shipping address</span>
                        </div>
                        <div class="h-[44px] flex items-center border-2 border-solid border-black text-[1.25rem]">
                            <input type="radio" v-model="selectedBilling" name="bAddress" value="other" class="mx-[2%]">
                            <span>Use a different billing address</span>
                        </div>
                        <div class="text-[1.5rem] font-bold my-[9px]">
                            <span>Remember Me</span>
                        </div>
                        <div class="h-[44px] flex items-center border-2 border-solid border-black text-[1.25rem]">
                            <input type="checkbox" class="mx-[2%]">
                            <span>Save my information for a faster checkout</span>
                        </div>
                        <Line class="mt-[20px]"/>
                        <!-- <div class="mt-[20px]">
                            <div class="h-0 border-2 border-solid border-black"></div>
                        </div> -->
                        <div class="h-[34px] text-[1.125rem] flex justify-between items-center mt-[20px]">
                            <RouterLink class="h-full flex items-center" :to="{name: 'shipping', query: {id: getId, qtd: getQtd}}">&lt; Return to Shipping</RouterLink>
                            <RouterLink class="w-[35%] h-full border-2 border-solid border-black flex justify-center items-center bg-sky-500 text-white" :to="{name: 'success', query: {ship: getShippingMethod, id: getId, qtd: getQtd}}">Complete Order</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="w-2/5 h-[450px] flex justify-center bg-gray-300">
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
                            <span>${{ shippingPrice.toFixed(2) }}</span>
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