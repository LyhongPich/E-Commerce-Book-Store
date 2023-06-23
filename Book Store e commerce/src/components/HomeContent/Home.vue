<script setup>
    import Letter from '../Homepage/Letter.vue'
    import Social from '../Homepage/Social.vue'
    import Group from '../Homepage/GroupBook.vue'
    import Book from '../Homepage/BookInfo.vue'
</script>

<template>
    <div class="h-[685px]">
        <div class="w-[1320px] my-[15px] mx-auto flex">
            <div class="w-[50%] text-[70px] font-bold pl-[215px]">
                <Letter data="About"></Letter>
                <br>
                <Letter data="Books"></Letter>
            </div>
            <div class="flex">
                <Group bookUrl="https://m.media-amazon.com/images/I/51wwAE5J6EL._AC_UF1000,1000_QL80_.jpg"></Group>
                <Group bookUrl="https://goodbookscents.files.wordpress.com/2013/04/the-book-thief.jpg?w=291&h=449"></Group>
                <Group bookUrl="https://i0.wp.com/www.thebooksmugglers.com/wp-content/uploads/2012/02/The-Guernsey-Literary-and-Potato-Peel-Pie-Society.jpg"></Group>
                <Group bookUrl="https://www.nationalbook.org/awards2021/covers/fic-Hell%20of%20a%20Book%20by%20Jason%20Mott.jpg"></Group>
                <Group bookUrl="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1573289838l/51932121.jpg"></Group>
            </div>
        </div>
        <div class="text-[40px] text-center font-bold">
            <Letter data="Best Sell"></Letter>
        </div>
        <div class="flex text-[20px] w-[1226px] my-0 mx-auto justify-between">
            <Book bookUrl="https://static.wixstatic.com/media/ea71bb_17c5485b41484f82b42aaa8a17474342~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_17c5485b41484f82b42aaa8a17474342~mv2_d_2479_2483_s_4_2.jpg"
                    data="Book 1"
                    price="$20.00">
            </Book>
            <Book bookUrl="https://static.wixstatic.com/media/ea71bb_30bb0bbedfa6425380becfdccd67d02b~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_224,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_30bb0bbedfa6425380becfdccd67d02b~mv2_d_2479_2483_s_4_2.jpg"
                    data="Book 2"
                    price="$18.50">
            </Book>
            <Book bookUrl="https://static.wixstatic.com/media/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_224,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg"
                    data="Book 3"
                    price="$25.75">
            </Book>
            <Book bookUrl="https://static.wixstatic.com/media/ea71bb_88f750dd06704bee9c4bed3acebaec54~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_224,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_88f750dd06704bee9c4bed3acebaec54~mv2_d_2479_2483_s_4_2.jpg"
                    data="Book 4"
                    price="$27.00">
            </Book>
        </div>
        <div class="w-[1325px] my-0 mx-auto flex justify-between">
            <Social socialUrl="https://booklistqueen.com/wp-content/uploads/booklist-queen-logo-2.png"></Social>
            <Social socialUrl="https://logos-world.net/wp-content/uploads/2020/10/Wix-Logo-2012-2013.png"></Social>
            <Social socialUrl="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png"></Social>
        </div>
    </div>
</template>