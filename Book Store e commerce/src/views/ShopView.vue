<script setup>
    import Cate from '../components/bookCafe.vue'
</script>

<template>
    <div class="w-[90%] h-[779px]">
        <div class="mt-[55px]">
            <RouterLink to="/">Home</RouterLink>
            &nbsp;>&nbsp;
            <RouterLink to="/shop">Shop</RouterLink>
        </div>
        <div class="text-[32px] h-[39px] flex items-center mt-[55px] mb-[23px] w-[13%]">
            <span>Categories</span>
        </div>
        <div class="flex h-[204px] items-center mb-[21px]">
            <Cate imageUrl="https://videohive.img.customer.envatousercontent.com/files/388733318/PosterHD.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=5c7c311cbea2fa051f22b6ab73bf26bf"
                title="Historical Book"
                desc="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues."></Cate>
        </div>
        <div class="flex h-[204px] items-center">
            <Cate imageUrl="https://cdn11.bigcommerce.com/s-tmuqdtd/product_images/uploaded_images/mask-group.png"
                title="Comic Book"
                desc="Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es."></Cate>
        </div>
    </div>
</template>