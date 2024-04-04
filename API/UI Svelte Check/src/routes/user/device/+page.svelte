<div class="h-[647px] flex justify-center items-center">
    <div class="w-[900px] h-[500px] mt-[10px] setScrollBar overflow-y-auto border-2 border-green-400 border-solid space-y-6 py-10 rounded-[6px]">
        <div class="flex justify-center">
            {#if devices.length > 0}
                <Button class="w-[700px]" on:click={() => removeAll = true}>
                    Terminate All Devices
                </Button>
            {:else}
                <div class="border-2 border-black border-solid">
                    <span>No device</span>
                </div>
            {/if}
        </div>
        {#each devices as device}
            <div class="flex w-[700px] mx-auto items-center space-x-6">
                <Input bind:value={device.device_info} color="green" readonly/>
                <Button outline pill color="light" on:click={removeDevice(device)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 93 93" fill="none">
                        <path d="M11.625 64.8675L30.07 46.5L11.625 28.1325L28.1325 11.625L46.5 30.07L64.8675 11.625L81.375 28.1325L62.93 46.5L81.375 64.8675L64.8675 81.375L46.5 62.93L28.1325 81.375L11.625 64.8675ZM46.5 51.9637L64.8675 70.37L70.37 64.8675L51.9637 46.5L70.37 28.1325L64.8675 22.63L46.5 41.0363L28.1325 22.63L22.63 28.1325L41.0363 46.5L22.63 64.8675L28.1325 70.37L46.5 51.9637Z" fill="#F24E1E"/>
                    </svg>
                </Button>
            </div>
        {/each}
    </div>
</div>

<Modal bind:open={confirmRemove} outsideclose>
    {#if selectedDevice}
        <form on:submit={handleTerminateDevice(selectedDevice.id)}>
            <div class="w-1/2 mx-auto text-[1.25rem] text-center">
                <span>Are you sure you want to terminate this device?</span>
            </div>
            <div class="flex justify-between items-center gap-x-2 mt-[25px]">
                <Button type="button" on:click={() => confirmRemove = false} class="w-full" outline color="green">
                    <span class="w-full">No</span>    
                </Button>
                <Button type="submit" class="w-full" outline color="red">
                    <span class="w-full">Yes</span>
                </Button>
            </div>
        </form>
    {/if}
</Modal>

<Modal bind:open={removeAll} outsideclose>
    <form on:submit={handleTerminateAllDevices}>
        <div class="w-1/2 mx-auto text-[1.25rem] text-center">
            <span>Are you sure you want to terminate all devices?</span>
        </div>
        <div class="flex justify-between items-center gap-x-2 mt-[25px]">
            <Button type="button" on:click={() => removeAll = false} class="w-full" outline color="green">
                <span class="w-full">No</span>    
            </Button>
            <Button type="submit" class="w-full" outline color="red">
                <span class="w-full">Yes</span>
            </Button>
        </div>
    </form>
</Modal>

<style>
    .setScrollBar {
        scrollbar-width: thin;
        scrollbar-color: grey transparent;
    }

    .setScrollBar::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }

    .setScrollBar::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 4px;
    }

    .setScrollBar::-webkit-scrollbar-thumb:hover {
        background-color: darkgrey;
    }
</style>

<script>
    import { onMount } from 'svelte';
    import { Input, Button, Modal } from 'flowbite-svelte';
    import { env } from '$env/dynamic/public';
    import { getID } from '../../../stores/token';

    let id = ''; // store user id from store
    let getUser; // Fetch user data from server
    let user_device; // Fetch user device from server
    let devices = [] // Render device of user
    let confirmRemove = false; // Display pop up remove single device
    let removeAll = false; // Display pop up remove all devices
    let selectedDevice; // Select specific device

    getID.subscribe((value) => id = value);


    function removeDevice(device) {
        confirmRemove = true;
        selectedDevice = device;
    }


    async function listUser(userID) {
        const response = await fetch(`${env.PUBLIC_HOST}user/${userID}/device`);

        user_device = await response.json();

        let tmp = [];
        if(user_device.success) {
            for(let i = 0; i < user_device.devices.length; i++) {
                const obj = {
                    id: user_device.devices[i].id,
                    device_info: user_device.devices[i].device_info,
                }
                tmp = [...tmp, obj];
            }
            devices = tmp;
        }
    }

    async function handleTerminateDevice(sessionID) {

        const response = await fetch(`${env.PUBLIC_HOST}user/terminate/device/${sessionID}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if(data.success) {
            await listUser(id);
        }

        confirmRemove = false;
    }

    async function handleTerminateAllDevices() {
        const response = await fetch(`${env.PUBLIC_HOST}user/terminate/all/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        if(data.success) {
            await listUser(id);
        }

        removeAll = false;
    }

    onMount( async () => {
        const idSession = sessionStorage.getItem('userID');

        getID.set(idSession)
        // console.log(id);

        await listUser(id || idSession);

        const response = await fetch(`${env.PUBLIC_HOST}user/${id || idSession}`);

        getUser = await response.json();

        if(getUser.success) {
            sessionStorage.setItem('userID', getUser.data._id);
        }

    })
    
    
</script>