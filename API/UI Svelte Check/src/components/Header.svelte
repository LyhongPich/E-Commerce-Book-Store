<script>
    export let application_name;
    export let name;
</script>

<div class="h-[100px] filter drop-shadow-md w-full bg-white">
    <div class="w-[95%] h-full flex justify-between items-center mx-auto">
        <div class="text-[1.25rem] opacity-60">
            <span>{application_name}</span>
        </div>
        <div class="text-[1.25rem] opacity-60">
            <span>{name}</span>
        </div>
    </div>
</div>