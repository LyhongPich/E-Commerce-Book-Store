<script>
    import data from '../data.json'
    import Line from './Line.vue'
    import Logo from './Logo.vue'
    export default {
        props: {
            object: {
                type: Object,
                required: true,
            }
        },
        components: {
            Line,
            Logo,
        },
        methods: {
            gohome() {
                this.$router.push({name: 'home'})
                this.$emit('back');
            },
            goBack() {
                this.$emit('back');
            }
        },
        computed: {
            getId() {
                return parseInt(this.object.id)
            },
            getQtd() {
                return parseInt(this.object.qtd)
            },
            getShip() {
                return this.object.ship;
            },
            items() {
                return data.find(item => item.id === this.getId);
            },
            shippingType() {
                if(this.getShip == 'Ground') {
                    return 'UPS Ground';
                }
                else if(this.getShip == '3-day') {
                    return "UPS 3 Day Select";
                }
                else if(this.getShip == '2-day') {
                    return "UPS 2nd Day Air";
                }
                else if(this.getShip == 'Next-day') {
                    return "UPS Next Day Air";
                }
            },
            shippingPrice() {
                if(this.getShip == 'Ground') {
                    return 2.2;
                }
                else if(this.getShip == '3-day') {
                    return 5.5;
                }
                else if(this.getShip == '2-day') {
                    return 9.2;
                }
                else if(this.getShip == 'Next-day') {
                    return 12.5;
                }
            },
            subtotal() {
                return this.getQtd*this.items.price;
            },
            total() {
                return this.subtotal+this.shippingPrice+1.4;
            }
        }
    }
</script>

<template>
    <div class="w-full h-[900px] flex items-center">
        <div class="w-[90%] h-[873px] mx-auto">
            <div class="text-[1.5rem]">
                <span>Email Confirmed</span>
            </div>
            
            <Line class="mt-[7.02px]"/>
            <div class="h-[345px] flex items-center">
                <div class="w-[74%] h-[303px] mx-auto">
                    <!-- 974px -->
                    <div class="w-[32%] h-[91px] flex items-center font-bold text-[4rem]">
                        <!-- 316px -->
                        <div class="w-[29%] h-full bg-black">
                            <!-- 91px -->
                        </div>
                        <span class=" ml-[11%] h-[77px]">Pickle</span>
                    </div>
                    <div class="flex flex-col font-bold text-[1.5rem] mt-[46px]">
                        
                            <span>Thank you for your purchase!</span>
                        
                            <span class="mt-[17px]">Hi John! Your order is ready to be shipped. We will notify you when it has been sent</span>
                        
                    </div>
                    <div class="w-[41%] h-[61px] flex items-center mt-[15px] text-[1.5rem]">
                        <!-- 401px -->
                        <button class="w-[51%] h-full bg-sky-500 text-white">View your order</button>
                        <span class="ml-[5%]">or <button @click="gohome">View our site</button></span>
                    </div>
                </div>
            </div>
            <Line/>
            <div class="h-[245px] flex items-center ">
                <div class="w-[74%] h-[208px] mx-auto text-[1.5rem]">
                    <div class="font-bold">
                        <span>Order Summary</span>
                    </div>
                    <div class="flex h-[149px] justify-between items-center">
                        <div class="w-[36%] h-full flex items-center ">
                            <Logo class="h-full" :url="items.url"></Logo>
                            <span>{{ items.title }}</span>
                        </div>
                        <div class="font-bold">
                            <span>${{ (items.price).toFixed(2) }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Line/>
            <div class="h-[176px] flex  mt-[10px]">
                <div class="w-[74%] flex items-center justify-end mx-auto h-full ">
                    <div class="w-[36%] h-full  text-[1.5rem]">
                        <div class="flex justify-between">
                            <span>Subtotal</span>
                            <span>${{ subtotal.toFixed(2) }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Shipping</span>
                            <span>${{ shippingPrice.toFixed(2) }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Tax</span>
                            <span>$1.40</span>
                        </div>
                        <Line/>
                        <div class="flex justify-between">
                            <span>Total</span>
                            <span>${{ total.toFixed(2) }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Line/>
            <div class="h-[24px] flex mt-[17px]">
                <div class="w-[74%] flex h-full items-center mx-auto  text-[1.25rem]">
                    <span>Contact us</span>
                    <Logo class="h-[21px] ml-[4%]" url="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"></Logo>
                    <Logo class="h-[21px] mx-[2%]" url="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"></Logo>
                    <Logo class="h-[21px]" url="https://cdn-icons-png.flaticon.com/512/174/174855.png"></Logo>
                    <Logo class="h-[21px] ml-[2%]" url="https://cdn-icons-png.flaticon.com/512/5968/5968823.png"></Logo>
                </div>
            </div>
        </div>
    </div>
</template>
