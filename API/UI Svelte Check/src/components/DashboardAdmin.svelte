<div class="h-[647px] flex justify-center items-center">
    <div class="w-[900px] h-[470px] bg-white rounded-[15px] py-[37px]">
        <div class="mx-auto w-[750px]">
            <span>Email</span>
            <div class="flex gap-x-2">
                <Input type="text" bind:value={user_email} class="w-[586.5px] caret-transparent" color="green" readonly/>  
                <Button color="green" on:click={copyToClipboard(user_email, "email")}>{copyTextEmail}</Button>      
            </div>
        </div>
        <div class="mx-auto w-[750px] my-[30px]">
            <span>Phone Number</span>
            <div class="flex gap-x-2">
                <Input type="text" bind:value={user_phone_number} class="w-[586.5px] caret-transparent" color="green" readonly/>
                <Button color="green" on:click={copyToClipboard(user_phone_number, "phone")} >{copyTextPhone}</Button>
            </div>
        </div>
        <div class="mx-auto w-[750px]">
            <span>Token</span>
            <div class="flex gap-x-2">
                <Input type="password" bind:value={token} id="tokenVisibility" class="w-[586.5px] caret-transparent" color="green" readonly/>
                <Button color="green" on:click={copyToClipboard(token, 'token')}>{copyTextToken}</Button>
                <Button color="none" on:click={tokenShow}>Show</Button>
            </div>
        </div>
        <div class="mx-auto w-[750px] mt-[30px]">
            <span>Expire at</span>
            <Input type="text" bind:value={expired_at} class="caret-transparent" color="green" readonly/>
        </div>
    </div>
</div>

<script>
    import { Input, Button } from 'flowbite-svelte';

    export let user_email;
    export let user_phone_number;
    export let expired_at;
    export let token;

    let showToken = false;
    let copyTextEmail = "Copy";
    let copyTextPhone = "Copy";
    let copyTextToken = "Copy";

    function tokenShow() {
        const input = document.getElementById('tokenVisibility');
        showToken = !showToken
        if(showToken) {
            input.type = "text";
        }
        else{
            input.type = "password";
        }
    }

    async function copyToClipboard(data, type) {

        if(type === "token" && !showToken) {
            return;
        }

        try {
            let data;
            if (type === 'email') {
                data = user_email;
                copyTextEmail = "Copied!";
                setTimeout(() => { copyTextEmail = "Copy"; }, 1000);
            } else if (type === 'phone') {
                data = user_phone_number;
                copyTextPhone = "Copied!";
                setTimeout(() => { copyTextPhone = "Copy"; }, 1000);
            } else if (type === 'token') {
                const input = document.getElementById('tokenVisibility');
                data = showToken ? input.value : '';
                copyTextToken = "Copied!";
                setTimeout(() => { copyTextToken = "Copy"; }, 1000);
            }
            await navigator.clipboard.writeText(data);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

</script>