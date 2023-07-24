<script>
    import { RouterLink } from 'vue-router'
    import Logo from './Logo.vue'
    import Quantity from './Quantity.vue'
    import data from '../data.json'
    import Line from './Line.vue'

    export default {
        data() {
            return {
                toggle: false,
                qtd: 1
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
            reset() {
                if(this.toggle == true) {
                    this.toggle = false;
                    this.$emit('toggle-changed', this.toggle);
                }
            }
        },
        computed: {
            getId() {
                return parseInt(this.$route.query.id)
            },
            items() {
                return data.find(item => item.id === this.getId)
            },
            randomSelect() {
                const excludedMain = data.filter(obj => obj.id !== this.items.id);
                const randomObject = excludedMain.slice();

                for(let i = randomObject.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i+1));
                    [randomObject[i], randomObject[j]] = [randomObject[j], randomObject[i]];
                }
                return randomObject.slice(0,6);
            },
            longText() {
                const maxLength = 18;
                return this.items.title.length > maxLength;
            }
        }
    }
    
</script>

<template>
    <div @click="reset()" class="w-full h-[779px] flex justify-center">
        <div class="w-[90%] h-auto">
            <div class="w-full mt-[56px] text-[1.125em]">
                <RouterLink to="/" class="hover:opacity-50">Home</RouterLink>
                &nbsp;>&nbsp;
                <RouterLink to="/shop" class="hover:opacity-50">Shop</RouterLink>
                &nbsp;>&nbsp;
                <RouterLink :to="{name: 'product', query: {id: items.id}}" class="hover:opacity-50">{{ items.title }}</RouterLink>
            </div>
            <div class="w-full flex items-center h-[414px] mt-[21px]">
                <!-- 1319px -->
                <div class="w-[45%] h-full flex justify-center items-center">
                    <!-- 593.55px -->
                    <Logo class="w-[85%] h-full" :url="items.url"></Logo>
                    <!-- 504.5175px -->
                </div>
                <div class="w-[55%] h-full flex justify-center items-center">
                    <!-- 725.45px -->
                    <div class="w-[85%] h-full">
                        <!-- 616.6325px -->
                        <div class=" flex justify-between items-center">
                            <span class="text-[3em]" :class="{'simplifyText' : longText }">{{ items.title }}</span>
                            <span class="text-[3em]">${{ (items.price).toFixed(2) }}</span>
                        </div>
                        <Line class="w-full flex my-[31px]"/>
                        <!-- 586.67px -->
                        <!-- <div class="w-full flex my-[31px]">
                            <div class="w-full h-0 border-[2px] border-solid border-black">
                            586.67px
                            </div>
                        </div> -->
                        <div class="w-full flex text-[2em]">
                            <span class="w-full">Quantity</span>
                        </div>
                        <div class="w-full h-[50px] flex items-center">
                            <div class="w-full h-full flex items-center justify-between">
                                <div class="flex w-[34%] h-full items-center rounded-[12px] mr-[13%]">
                                    <!-- 200px -->
                                    <button @click="decrease()" class="w-[25%] flex justify-center items-center h-full rounded-l-[12px] bg-slate-200">
                                        <Logo class="h-[25px]" url="https://cdn-icons-png.flaticon.com/512/56/56889.png"></Logo>
                                    </button>
                                    <input type="text" v-model="qtd" class="w-[50%] text-[1.5em] h-full text-center border-[2px] border-solid border-slate-200">
                                    <button @click="increase()" class="w-[25%] flex justify-center items-center h-full rounded-r-[12px] bg-slate-200">
                                        <Logo class="h-[25px]" url="https://cdn-icons-png.flaticon.com/512/32/32339.png"></Logo>
                                    </button>
                                    <!-- <Quantity btnRound="12px"
                                            :dec="decrease"
                                            :inc="increase"
                                            :data="qtd"
                                            logoDim="h-[25px]">
                                    </Quantity> -->
                                </div>
                                <div class="flex w-[48%] h-full items-center border-black border-[2px] text-[1.5em] rounded-[14px]">
                                    <!-- 281px -->
                                    <RouterLink :to="{name: 'cart', query: {id: getId, qtd: this.qtd} }" class="w-full h-full bg-sky-500 text-white flex justify-center items-center rounded-[12px]">Add to cart</RouterLink>

                                    <!-- <RouterLink :to="{name: 'cart', params: {id: getId, qtd: this.qtd} }" class="w-full h-full bg-sky-500 text-white flex justify-center items-center rounded-[12px]">Add to cart</RouterLink> -->

                                    <!-- <RouterLink :to="`/cart/product=${getId}/quantity=${qtd}`" class="w-full h-full bg-sky-500 text-white flex justify-center items-center rounded-[12px]">Add to cart</RouterLink> -->
                                    <!-- <button class="w-full h-full bg-sky-500 text-white flex justify-center items-center rounded-[12px]">Add to cart</button> -->
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex items-center mt-[31px]">
                            <div class="w-full flex font-bold text-[1.5625em]">
                                <span>Detail:</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center h-[95px] mt-[15px] overflow-y-auto">
                            <div class="w-full flex text-[1.5em] h-full">
                                <span>{{ items.desc }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Line class="opacity-30 w-full flex items-center mt-[30px]"/>
            <!-- <div class="w-full flex items-center mt-[30px]">
                <div class="border-2 border-solid border-gray-400 h-0 w-full">

                </div>
            </div> -->
            <div class="w-full flex items-center mt-[15px] text-[1.5em]">
                <span>Related Books</span>
            </div>
            <div class="w-full h-[143px] flex justify-between mt-[11px]">
                <div v-for="book in randomSelect" :key="book.id" class="w-[15%] h-full">
                    <RouterLink :to="{name: 'product', query: {id: book.id}}">
                        <Logo class="w-full h-full" :url="book.url"></Logo>
                    </RouterLink>
                </div>
                <!-- <Logo class="w-[15%] h-full"
                    v-for="book in randomSelect" :key="book.id"
                    :url="book.url">
                </Logo> -->
                <!-- <Logo class="w-[15%] h-full" url="https://static.wixstatic.com/media/ea71bb_020b6f808ac64fc7a288ea5d01a8c714~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_624,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_020b6f808ac64fc7a288ea5d01a8c714~mv2_d_2479_2483_s_4_2.jpg"></Logo>
                <Logo class="w-[15%] h-full" url="https://static.wixstatic.com/media/ea71bb_1c8d1b6ba0fd49838a1de426c1464053~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_624,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_1c8d1b6ba0fd49838a1de426c1464053~mv2_d_2479_2483_s_4_2.jpg"></Logo>
                <Logo class="w-[15%] h-full" url="https://static.wixstatic.com/media/ea71bb_a48625ef802d4bdcb90f1f9e672117ef~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_624,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_a48625ef802d4bdcb90f1f9e672117ef~mv2_d_2479_2483_s_4_2.jpg"></Logo>
                <Logo class="w-[15%] h-full" url="https://static.wixstatic.com/media/ea71bb_2f6dec967d9a4bbeb8864da9a3e91752~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_624,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_2f6dec967d9a4bbeb8864da9a3e91752~mv2_d_2479_2483_s_4_2.jpg"></Logo>
                <Logo class="w-[15%] h-full" url="https://static.wixstatic.com/media/ea71bb_bc0247d6ea1f40daa8298c890f382de2~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_624,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_bc0247d6ea1f40daa8298c890f382de2~mv2_d_2479_2483_s_4_2.jpg"></Logo>
                <Logo class="w-[15%] h-full" url="https://static.wixstatic.com/media/ea71bb_5b55ec2330ee4f1588ffda1918ee708c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_624,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_5b55ec2330ee4f1588ffda1918ee708c~mv2_d_2479_2483_s_4_2.jpg"></Logo> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
    .simplifyText {
        font-size: 3em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>