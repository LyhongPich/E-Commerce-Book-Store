<script>
    import { RouterLink } from 'vue-router'
    import Cate from './CateBook.vue'

    export default {
        data() {
            return {
                dim: 'w-[204px] h-[204px]'
            }
        },  
        components: {
            Cate,
        }
    }
</script>

<template>
    <div class="w-full h-[779px] flex justify-center">
        <div class="w-[90%] h-auto ">
            <div class="w-full flex items-center text-[1.125em] my-[55px]">
                <RouterLink to="/" class="hover:opacity-50">Home</RouterLink>
                &nbsp;>&nbsp;
                <RouterLink to="/shop" class="hover:opacity-50">Shop</RouterLink>
            </div>
            <div class="w-full flex items-center text-[2em]">
                <span>Categories</span>
            </div>
            <Cate class="mt-[23px]"
                genre="Historical Book"
                :style="dim"
                url="https://videohive.img.customer.envatousercontent.com/files/388733318/PosterHD.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=5c7c311cbea2fa051f22b6ab73bf26bf"
                desc="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues.">
            </Cate>
            <Cate class="mt-[21px]"
                genre="Comic Book"
                :style="dim"
                url="https://cdn11.bigcommerce.com/s-tmuqdtd/product_images/uploaded_images/mask-group.png"
                desc="Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.">
            </Cate>
        </div>
    </div>
</template>