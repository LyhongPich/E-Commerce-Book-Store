<script>
    export let src;
    export let title;
</script>
<div class="flex items-center">
    <div class="flex justify-center items-center h-[64px] w-full">
        <div class="flex opacity-50 flex-col justify-center items-center h-[64px]">    
            <div class="">
                <img {src} alt="" class="h-[25px]">
            </div>
            <div class="text-[0.75rem]">
                {title}
            </div>
        </div>
    </div>
</div>