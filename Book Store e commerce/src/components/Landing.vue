<script>
    import Logo from './Logo.vue'
    import Book from './Book.vue'
    import data from '../data.json'
    export default {
        data() {
            return {
                data,
                bookStyle: 'w-full h-[224px]'
            }
        },
        components: {
            Logo,
            Book,
        },
        computed: {
            items() {
                return this.data.slice(0,4);
            }
        }
    }
</script>

<template>
    <div class="w-full h-[779px] flex justify-center">
        <div class="w-[90%] h-full">
            <div class="flex w-full h-[224px] mt-[15px]">
                <span class="w-[60%] text-8xl font-bold flex justify-center text-center items-center">About books</span>
                <div class="w-full flex items-center justify-center">
                    <Logo class="w-[15%] h-[220px]" url="https://m.media-amazon.com/images/I/51wwAE5J6EL._AC_UF1000,1000_QL80_.jpg"></Logo>
                    <Logo class="w-[15%] h-[220px] mx-[1.5%]" url="https://goodbookscents.files.wordpress.com/2013/04/the-book-thief.jpg?w=291&h=449"></Logo>
                    <Logo class="w-[15%] h-[220px]" url="https://i0.wp.com/www.thebooksmugglers.com/wp-content/uploads/2012/02/The-Guernsey-Literary-and-Potato-Peel-Pie-Society.jpg"></Logo>
                    <Logo class="w-[15%] h-[220px] mx-[1.5%]" url="https://www.nationalbook.org/awards2021/covers/fic-Hell%20of%20a%20Book%20by%20Jason%20Mott.jpg"></Logo>
                    <Logo class="w-[15%] h-[220px]" url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1573289838l/51932121.jpg"></Logo>
                </div>
            </div>
            <div class="w-full text-[40px] font-bold text-center mt-[15px]">
                <span>Best Sell</span>
            </div>
            <div class="w-full flex h-[286px] items-center justify-between px-[2%] mt-[20px]">
                <div v-for="item in items" :key="item.id" class="h-full bg-slate-300">
                    <RouterLink :to="{name: 'product', query: {id: item.id}}">
                        <Book class="h-full"
                            :url="item.url"
                            :title="item.title"
                            :price="(item.price).toFixed(2)"
                            :style="bookStyle">
                        </Book>
                    </RouterLink>
                </div>
                <!-- <RouterLink to="/product" class="h-full flex justify-between bg-slate-300">
                    <Book class="h-full"
                        v-for="item in items" :key="item.id"
                        :url="item.url"
                        :title="item.title"
                        :price="item.price"
                        :style="bookStyle">
                    </Book>
                </RouterLink> -->
                <!-- <Book class="h-full bg-slate-300" 
                    url="https://static.wixstatic.com/media/ea71bb_17c5485b41484f82b42aaa8a17474342~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_17c5485b41484f82b42aaa8a17474342~mv2_d_2479_2483_s_4_2.jpg"
                    title="Book 1"
                    price="$20.00"
                    :style="bookStyle">
                </Book>
                <Book class="h-full bg-slate-300" 
                    url="https://static.wixstatic.com/media/ea71bb_30bb0bbedfa6425380becfdccd67d02b~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_224,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_30bb0bbedfa6425380becfdccd67d02b~mv2_d_2479_2483_s_4_2.jpg"
                    title="Book 2"
                    price="$18.50"
                    :style="bookStyle">
                </Book>
                <Book class="h-full bg-slate-300" 
                    url="https://static.wixstatic.com/media/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_224,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg"
                    title="Book 3"
                    price="$25.75"
                    :style="bookStyle">
                </Book>
                <RouterLink to="/product" class="h-full bg-slate-300">
                    <Book class="h-full" 
                        url="https://static.wixstatic.com/media/ea71bb_88f750dd06704bee9c4bed3acebaec54~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_612,h_613,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_88f750dd06704bee9c4bed3acebaec54~mv2_d_2479_2483_s_4_2.jpg"
                        title="Book 4"
                        price="$27.00"
                        :style="bookStyle">
                    </Book>
                </RouterLink> -->
            </div>
            <div class="w-full flex h-[113px] items-center justify-between opacity-50 mt-[22px]">
                <Logo class="w-[22%] h-[96px]" url="https://booklistqueen.com/wp-content/uploads/booklist-queen-logo-2.png"></Logo>
                <Logo class="w-[22%] h-[94.67px]" url="https://logos-world.net/wp-content/uploads/2020/10/Wix-Logo-2012-2013.png"></Logo>
                <Logo class="w-[23%] h-[113px]" url="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png"></Logo>
            </div>
        </div>
    </div>
</template>