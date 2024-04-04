<script>
    import LogoIcon from "./LogoIcon.svelte";
    import { onMount } from "svelte";
    
    let lastClicked = null;

    function selected(id) {
        const blockID = document.getElementById(id);

        blockID.style.backgroundColor = 'rgb(212 212 216)';

        if(lastClicked !== null) {
            const resetBlock = document.getElementById(lastClicked);
            resetBlock.style.backgroundColor = '#FFFFFF';
        }
        if(lastClicked === id) {
            const resetBlock = document.getElementById(lastClicked);
            resetBlock.style.backgroundColor = 'rgb(212 212 216)';
        }

        lastClicked = id;
        sessionStorage.setItem('lastClicked', id);
    }
    function logout() {
        sessionStorage.setItem('lastClicked', 1);
    }

    onMount(() => {
        const getClicked = sessionStorage.getItem('lastClicked');
        lastClicked = parseInt(getClicked) || 1;
        selected(lastClicked);
    });
    
</script>

<div class="w-[100px] bg-white flex flex-col justify-between border-r-[1px]">
    <div class="">
        <a href="/superadmin" on:click={() => selected(1)} class="h-[80px] flex flex-col justify-center">
            <button class=" rounded-e-[100px] w-[90%]" id="1" >
                <LogoIcon src="https://cdn-icons-png.flaticon.com/512/4254/4254577.png" title="Dashboard"/>
            </button>
        </a>
        <div class="h-0 w-full border-[2px] border-solid border-zinc-400"></div>
        <a href="/superadmin/applications" on:click={() => selected(2)} class="h-[80px] flex flex-col justify-center">
            <button class="rounded-e-[100px] w-[90%]" id="2" >
                <LogoIcon src="https://cdn-icons-png.flaticon.com/512/84/84471.png" title="Applications"/>
            </button>
        </a>
        <div class="h-0 w-full border-[2px] border-solid border-zinc-400"></div>
    </div>
    <div class="">
        <a href="/">
            <div class="h-0 w-full border-[2px] border-solid border-zinc-400"></div>
            <button class="w-full" id="3" on:click={() => logout()}>
                <LogoIcon src="https://cdn-icons-png.flaticon.com/512/658/658005.png" title="Log out"/>
            </button>
        </a>
    </div>
</div>
