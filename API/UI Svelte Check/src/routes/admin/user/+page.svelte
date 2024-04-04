<div class="h-[647px] flex justify-center items-center">
    <div class="w-[1000px] h-[500px] overflow-y-auto">
        <TableSearch placeholder="Search by Username" hoverable={true} bind:inputValue={searchTerm}>
            <TableHead>
                <TableHeadCell on:click={() => sortTable('number')}>No</TableHeadCell>
                <TableHeadCell on:click={() => sortTable('username')}>Username</TableHeadCell>
                <TableHeadCell on:click={() => sortTable('email')}>Email</TableHeadCell>
                <TableHeadCell>Phone Number</TableHeadCell>
                <TableHeadCell>Action</TableHeadCell>
            </TableHead>
            <TableBody>
                {#each filteredUsers as user}
                    <TableBodyRow>
                        <TableBodyCell on:click={userInfo(user)}>{user.number}</TableBodyCell>
                        <TableBodyCell on:click={userInfo(user)}>{user.username}</TableBodyCell>
                        <TableBodyCell on:click={userInfo(user)}>{user.email || ''}</TableBodyCell>
                        <TableBodyCell on:click={userInfo(user)}>{user.phone_number}</TableBodyCell>
                        <TableBodyCell>
                            <Button color="none" on:click={confirmTerminate(user)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 93 93" fill="none">
                                    <path d="M11.625 64.8675L30.07 46.5L11.625 28.1325L28.1325 11.625L46.5 30.07L64.8675 11.625L81.375 28.1325L62.93 46.5L81.375 64.8675L64.8675 81.375L46.5 62.93L28.1325 81.375L11.625 64.8675ZM46.5 51.9637L64.8675 70.37L70.37 64.8675L51.9637 46.5L70.37 28.1325L64.8675 22.63L46.5 41.0363L28.1325 22.63L22.63 28.1325L41.0363 46.5L22.63 64.8675L28.1325 70.37L46.5 51.9637Z" fill="#F24E1E"/>
                                </svg>
                            </Button>
                        </TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
        </TableSearch>
    </div>
</div>
<Modal title="User Detail" bind:open={user_details} autoclose outsideclose>
    {#if viewUser}
    <Label class="space-y-2">
        <span>Username</span>
        <Input bind:value={viewUser.username} color="green" readonly/>
    </Label>
    {#if viewUser.email}
        <Label class="space-y-2">
            <span>Email</span>
            <Input bind:value={viewUser.email} color="green" readonly/>
        </Label>
    {/if}
    {#if viewUser.phone_number}
        <Label class="space-y-2">
            <span>Phone Number</span>
            <Input bind:value={viewUser.phone_number} color="green" readonly/>
        </Label>
    {/if}
    {#if devices.length > 0} 
        <Label class="space-y-2">
            {#if devices.length === 1}
                <span>Device</span>
            {:else}
                <span>Devices</span>
            {/if}
        </Label>
        {#each devices as device}
            <div class="flex items-center">
                <!-- <Input bind:value={index} color="green" readonly/> -->
                <!-- <span>{index+1}</span> -->
                <Input bind:value={device.device_info} color="green" readonly/>
            </div>
        {/each}
    {/if}
    {/if}
</Modal>
<Modal title="Confirmation" bind:open={confirm_terminate} outsideclose>
    {#if viewUser}
        <div class="w-1/2 mx-auto text-[1.25rem] text-center">
            <span>Are you sure you want to terminate the user {viewUser.username}?</span>
        </div>
        <div class="flex justify-center items-center">
            <Button on:click={handleTerminateUser(viewUser.id)}>
                Terminate
            </Button>
        </div>
    {/if}
</Modal>

<script>
    import { env } from '$env/dynamic/public'
    import { onMount } from 'svelte';
    import { getToken } from '../../../stores/token'
    import { Label, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch, Modal, Button, Input } from 'flowbite-svelte';
    import cookie from '../../../components/cookie'

    let token = '';
    let cookieApp = '';
    let users=[];
    let users_list = [];
    let searchTerm = '';
    let user_details = false;
    let confirm_terminate = false;
    let viewUser;
    let devices=[];

    getToken.subscribe((value) => {
        token = value;
    })

    async function userInfo(user) {
        const response = await fetch(`${env.PUBLIC_HOST}user/${user.id}/device`);

        const data = await response.json();
        devices = data.devices;
        viewUser = user;
        user_details = true;
    }

    function confirmTerminate(user) {
        viewUser = user;
        confirm_terminate = true;
    }

    async function terminateAllDevices(id) {
        const response = await fetch(`${env.PUBLIC_HOST}user/terminate/all/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async function handleTerminateUser(id) {
        await terminateAllDevices(id);
        const response = await fetch(`${env.PUBLIC_HOST}user/delete/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        if(data.success) {
            const removeIndex = users_list.findIndex(user => user.id === id);

            if(removeIndex !== -1) {
                users_list.splice(removeIndex, 1);
                users_list.forEach((user, index) => {
                    user.number = index+1;
                })
                users_list = users_list
            }
        }
        else {
            alert(data.error);
        }
        confirm_terminate = false;
        
    }

    $: filteredUsers = users_list.filter((user) => user.username.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    function sortTable(attribute) {
        users_list = [...users_list].sort((a, b) => {
            if(typeof a[attribute] === 'string') {
                return a[attribute].localeCompare(b[attribute]);
            }
            else {
                return (a[attribute] - b[attribute]);
            }
        });
    }

    onMount(async() => {
        const applicationCookie = cookie.getCookie("token");

        if(applicationCookie) {
            cookieApp = applicationCookie;
        }

        const response = await fetch(`${env.PUBLIC_HOST}user/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token || cookieApp}`
            }
        })
        users = await response.json();

        let tmp=[];
        for(let i = 0; i < users.data.length; i++) {
            const obj = {
                number: i+1,
                id: users.data[i]._id,
                username: users.data[i].username,
                email: users.data[i].email,
                phone_number: users.data[i].phone_number
            }
            tmp = [...tmp, obj];
        }
        users_list = tmp;
    })

</script>