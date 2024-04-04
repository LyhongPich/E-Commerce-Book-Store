<div class="flex h-[647px] justify-center items-center">
    <form class="h-auto py-[50px] w-[900px] bg-white border-2 border-green-400 border-solid rounded-[15px] space-y-6">
        <Label class="space-y-2 w-[700px] mx-auto">
            <span class="text-[1.25rem]">Username</span>
            <Input bind:value={user.username} color="green" readonly/>
        </Label>
        {#if user.email}
            <Label class="space-y-2 w-[700px] mx-auto">
                <span class="text-[1.25rem]">Email</span>
                <Input bind:value={user.email} color="green" readonly/>
            </Label>
        {:else}
            <div class="w-[700px] mx-auto">
                <Button color="green" on:click={focusEmailInput}>
                    <span>Add Email</span>
                </Button>
            </div>
        {/if}
        {#if user.phone_number}
            <Label class="space-y-2 w-[700px] mx-auto">
                <span class="text-[1.25rem]">Phone Number</span>
                <Input bind:value={user.phone_number} color="green" readonly/>
            </Label>
        {:else}
            <div class="w-[700px] mx-auto">
                <Button color="green" on:click={() => addPhoneNumber = true}>
                    <span>Add Phone Number</span>
                </Button>
            </div>
        {/if}
    </form>
</div>

<Modal title="Add Email" bind:open={addEmail} outsideclose>
    <form on:submit|preventDefault={handleUpdate} class="space-y-6">
        <Input bind:value={updateUser.email} type="email" color="green" placeholder="Email" required/>

        <Button type="submit" color="green">Add</Button>
    </form>
</Modal>

<Modal title="Add Phone Number" bind:open={addPhoneNumber} outsideclose>
    <form on:submit|preventDefault={handleUpdate} class="space-y-6">
        <Input bind:value={updateUser.phone_number} type="tel" color="green" placeholder="Phone Number" required/>

        <Button type="submit" color="green">Add</Button>
    </form>
</Modal>

<script>
    import { onMount } from 'svelte';
    import { getID } from '../../stores/token'
    import { env } from '$env/dynamic/public'
    import { goto } from '$app/navigation'
    import { Label, Input, Button, Modal } from 'flowbite-svelte'
    
    
    let id = ''; // store specific user id from store
    let getUser; // Fetch user data from server
    let user={}; // Render user data
    let addEmail; // Display pop up add email
    let addPhoneNumber; // Display pop up add phone number
    

    let updateUser = {
        email: '',
        phone_number: ''
    }

    getID.subscribe((value) => id = value);

    function focusEmailInput() {
        addEmail = true;
    }

    if(user.username === '') {
        goto("/");
    }

    async function handleUpdate() {
        
        const response = await fetch(`${env.PUBLIC_HOST}user/update/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        });

        const getData = await response.json();

        if(getData.success) {
            const object = {
                id: getData.data._id,
                username: getData.data.username,
                email: getData.data.email,
                phone_number: getData.data.phone_number
            };
            user = object;
            addEmail = false;
            addPhoneNumber = false;
        }
        else {
            alert(getData.error)
        }
    }

    
    onMount( async () => {
        const idSession = sessionStorage.getItem('userID');
        
        const response = await fetch(`${env.PUBLIC_HOST}user/${id || idSession}`);

        getUser = await response.json();

        if(getUser.success) {

            const object = {
                id: getUser.data._id,
                username: getUser.data.username,
                email: getUser.data.email,
                phone_number: getUser.data.phone_number,
            }
            user = object;
        }

        sessionStorage.setItem('userID', user.id);
    })

</script>