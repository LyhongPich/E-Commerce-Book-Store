{#if success}
    <div class="flex justify-center items-center h-[700px]">
        <div class="w-[400px] h-auto text-center text-[1.75rem] space-y-6 border-2 border-solid border-green-400 rounded-[15px] py-[20px] px-[2%]">
            <p>Registration Success!</p>
            <Button on:click={loginForm} outline color="green">
                Try Login
            </Button>
        </div>
    </div>
{:else}
    <div class="flex justify-center items-center h-[700px]">
        <div class="w-[400px] h-auto text-center space-y-2 rounded-[15px] py-[20px] px-[2%]">
            <div class="border-2 h-[220px]">
                <img src="https://5.imimg.com/data5/LB/XG/MY-2632638/tally-annual-maintenance-contracts-500x500.jpg" alt="">
            </div>
            <div class="text-[5rem] font-mono">
                <span class="text-green-500">4</span>                
                <span class="text-red-500">0</span>
                <span class="text-blue-500">4</span>
            </div>
            <div class="font-semibold text-[2rem]">
                <span>Oops!</span>
                <span>Page Not Found</span>
            </div>
            <Button on:click={() => goto('/')} outline>Go Back</Button>
        </div>
    </div>
{/if}

<script>
    import { Button } from 'flowbite-svelte'
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte';

    let success;

    function loginForm() {
        sessionStorage.clear();
        goto('/');
    }

    onMount(() => {
        const getSuccess = sessionStorage.getItem('success');
        if(getSuccess) {
            success = getSuccess;
        }
    })
</script>