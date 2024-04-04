<div class="h-[647px] bg-stone-100 flex justify-center items-center">
    <div class="w-[90%] h-[545px]">
        <div class="flex justify-between items-center">
            <span class="text-[1.875rem]">Applications</span>
            <Button color="green" on:click={() => createApp = true} class="bg-zinc-300 hover:bg-blue-300 text-black flex justify-between w-[200px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <g clip-path="url(#clip0_217_48)">
                        <path d="M7.7 6.3H10.5V7.7H7.7V10.5H6.3V7.7H3.5V6.3H6.3V3.5H7.7V6.3ZM7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 12.6C8.48521 12.6 9.90959 12.01 10.9598 10.9598C12.01 9.90959 12.6 8.48521 12.6 7C12.6 5.51479 12.01 4.09041 10.9598 3.0402C9.90959 1.99 8.48521 1.4 7 1.4C5.51479 1.4 4.09041 1.99 3.0402 3.0402C1.99 4.09041 1.4 5.51479 1.4 7C1.4 8.48521 1.99 9.90959 3.0402 10.9598C4.09041 12.01 5.51479 12.6 7 12.6Z" fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_217_48">
                            <rect width="14" height="14" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <span>Add new application</span>
            </Button>
        </div>
        <div class="overflow-y-auto h-[500px]">
            <TableSearch placeholder="Search by Application Name" hoverable={true} bind:inputValue={searchTerm}>
                <TableHead>
                    <TableHeadCell on:click={() => sortTable('number')}>No.</TableHeadCell>
                    <TableHeadCell on:click={() => sortTable('application_name')}>Application Name</TableHeadCell>
                    <TableHeadCell on:click={() => sortTable('username')}>Username</TableHeadCell>
                    <TableHeadCell on:click={() => sortTable('user_email')}>Email</TableHeadCell>
                    <TableHeadCell>Phone Number</TableHeadCell>
                    <TableHeadCell on:click={() => sortTable('expired_at')}>Expired Date</TableHeadCell>
                    <TableHeadCell>Action</TableHeadCell>
                </TableHead>
                <TableBody>
                    {#each filterApp as app}
                        <TableBodyRow>
                            <TableBodyCell on:click={viewApp(app)}>{app.number}</TableBodyCell>
                            <TableBodyCell on:click={viewApp(app)}>{app.application_name}</TableBodyCell>
                            <TableBodyCell on:click={viewApp(app)}>{app.username}</TableBodyCell>
                            <TableBodyCell on:click={viewApp(app)}>{app.user_email}</TableBodyCell>
                            <TableBodyCell on:click={viewApp(app)}>{app.user_phone_number}</TableBodyCell>
                            <TableBodyCell on:click={viewApp(app)}>{app.expired_at}</TableBodyCell>
                            <TableBodyCell>
                                <Button on:click={removeConfirm(app)} class="bg-blue-200 hover:bg-white" outline color="none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M3 18C2.45 18 1.979 17.804 1.587 17.412C1.195 17.02 0.999333 16.5493 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.804 17.021 14.412 17.413C14.02 17.805 13.5493 18.0007 13 18H3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z" fill="#F24E1E"/>
                                    </svg>
                                </Button>
                            </TableBodyCell>
                        </TableBodyRow>
                    {/each}
                </TableBody>
            </TableSearch>
        </div>
    </div>
</div>

<Modal bind:open={createApp} on:close={resetData} outsideclose class="w-full">
    <form class="flex flex-col space-y-6" on:submit|preventDefault={handleRegister}>
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create New Application</h3>
        
        <Label class="space-y-2">
          <span>Application Name</span>
          <Input bind:value={application_name} type="text" name="applicationname" placeholder="Facebook" required />
        </Label>
        
        <Label class="space-y-2">
          <span>Username</span>
          <Input bind:value={username} type="text" name="username" placeholder="example" required />
        </Label>
        
        <Label class="space-y-2">
          <span>Email</span>
          <Input bind:value={user_email} type="email" name="email" placeholder="example@gmail.com" required />
        </Label>
        
        <Label class="space-y-2">
          <span>Your password</span>
          <Input bind:value={user_password} type="password" name="password" placeholder="••••••••••" required />
        </Label>
    
        <Label class="space-y-2">
          <span>Phone Number</span>
          <Input bind:value={user_phone_number} type="tel" name="phone_number" placeholder="012345678" required />
        </Label>
    
        <Label class="space-y-2">
            <span>Token Expiry Time</span>
            <Input bind:value={expire_token} on:input={validateToCreate} type="datetime-local" name="expire_token" required/>
        </Label>
    
        {#if allow_create}
            <Button color="green" type="submit" class="w-full">Create New Application</Button>
        {/if}
      </form>
</Modal>

<Modal title="Detail" bind:open={appDetail} outsideclose>
    {#if selectedApp}
        <form on:submit|preventDefault={handleRenew} class="w-full space-y-6">

            <Label class="space-y-2">
                <span>Application Name</span>
                <Input type="text" color="green" bind:value={selectedApp.application_name} readonly/>
            </Label>

            <Label class="space-y-2">
                <span>Username</span>    
                <Input type="text" color="green" bind:value={selectedApp.username} readonly/>
            </Label>
            <Label class="space-y-2">
                <span>Email</span>
                <Input type="email" color="green" bind:value={selectedApp.user_email} readonly/>
            </Label>
            <Label class="space-y-2">
                <span>Phone Number</span>
                <Input type="tel" color="green" bind:value={selectedApp.user_phone_number} readonly/>
            </Label>
            <Label class="space-y-2">
                <span class="text-black">Expire Date</span>
                <div class="flex space-x-2 items-center">
                    <Input type="text" color="green" on:input={validateDate} id="update" bind:value={selectedApp.expired_at} disabled={disable_renew_application}/>
                    <Button color="none" on:click={update(selectedApp.compareDate)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M21.8749 12.5C21.5987 12.5 21.3337 12.6098 21.1383 12.8051C20.943 13.0005 20.8333 13.2654 20.8333 13.5417V19.7917C20.8333 20.0679 20.7235 20.3329 20.5282 20.5282C20.3328 20.7236 20.0679 20.8333 19.7916 20.8333H5.20825C4.93198 20.8333 4.66703 20.7236 4.47168 20.5282C4.27633 20.3329 4.16659 20.0679 4.16659 19.7917V5.20834C4.16659 4.93207 4.27633 4.66712 4.47168 4.47177C4.66703 4.27642 4.93198 4.16667 5.20825 4.16667H11.4583C11.7345 4.16667 11.9995 4.05693 12.1948 3.86158C12.3902 3.66623 12.4999 3.40127 12.4999 3.12501C12.4999 2.84874 12.3902 2.58379 12.1948 2.38844C11.9995 2.19309 11.7345 2.08334 11.4583 2.08334H5.20825C4.37945 2.08334 3.58459 2.41258 2.99854 2.99863C2.41249 3.58468 2.08325 4.37954 2.08325 5.20834V19.7917C2.08325 20.6205 2.41249 21.4153 2.99854 22.0014C3.58459 22.5874 4.37945 22.9167 5.20825 22.9167H19.7916C20.6204 22.9167 21.4152 22.5874 22.0013 22.0014C22.5873 21.4153 22.9166 20.6205 22.9166 19.7917V13.5417C22.9166 13.2654 22.8068 13.0005 22.6115 12.8051C22.4161 12.6098 22.1512 12.5 21.8749 12.5ZM6.24992 13.2917V17.7083C6.24992 17.9846 6.35967 18.2496 6.55502 18.4449C6.75037 18.6403 7.01532 18.75 7.29159 18.75H11.7083C11.8453 18.7508 11.9812 18.7245 12.1082 18.6727C12.2351 18.6208 12.3505 18.5445 12.4478 18.4479L19.6562 11.2292L22.6145 8.33334C22.7121 8.2365 22.7896 8.12129 22.8425 7.99436C22.8954 7.86742 22.9226 7.73127 22.9226 7.59376C22.9226 7.45625 22.8954 7.32009 22.8425 7.19316C22.7896 7.06622 22.7121 6.95101 22.6145 6.85417L18.1978 2.38542C18.101 2.28779 17.9858 2.2103 17.8589 2.15741C17.7319 2.10453 17.5958 2.0773 17.4583 2.0773C17.3207 2.0773 17.1846 2.10453 17.0577 2.15741C16.9307 2.2103 16.8155 2.28779 16.7187 2.38542L13.7812 5.33334L6.552 12.5521C6.45546 12.6494 6.37908 12.7649 6.32724 12.8918C6.2754 13.0187 6.24913 13.1546 6.24992 13.2917ZM17.4583 4.59376L20.4062 7.54167L18.927 9.02084L15.9791 6.07292L17.4583 4.59376ZM8.33325 13.7188L14.5103 7.54167L17.4583 10.4896L11.2812 16.6667H8.33325V13.7188Z" fill="black"/>
                        </svg>
                    </Button>
                </div>
            </Label>
            <div class="flex justify-between items-center gap-x-2 mt-[20px]">
                <Button type="button" on:click={() => {appRemove = true; appDetail = false}} class="w-full" color="red">
                    <span>Remove</span>
                </Button>
                {#if validate_future}
                    <Button on:click={() => appDetail = false} type="submit" class="w-full" color="green">
                        <span>Renew</span>
                    </Button>
                {/if}
            </div>
        </form>
    {/if}
</Modal>

<Modal bind:open={appRemove} outsideclose>
    {#if selectedApp}
        <form on:submit={handleRemove(selectedApp.id)} class="h-[110px] my-[20px] w-full">
            <div class=" w-1/2 mx-auto text-[1.25rem] text-center">
                <span class="">Are you sure you want to remove the application <b>{selectedApp.application_name}</b> ?</span>
            </div>
            <div class="flex justify-between items-center gap-x-2 mt-[25px]">
                <Button type="button" on:click={() => appRemove = false} class="w-full" outline color="green">
                    <span class="w-full">No</span>    
                </Button>
                <Button type="submit" class="w-full" outline color="red">
                    <span class="w-full">Yes</span>
                </Button>
            </div>
        </form>
    {/if}
</Modal>

<script>
    import { Input, Label, Modal, Button, TableSearch, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte'
    import { onMount } from 'svelte'
    import formatDate from '../../../components/date'
    import { env } from '$env/dynamic/public'


    let searchTerm = ''; // Searching getData
    let applications = []; // List of applications to be rendered
    let getData = []; // Array to get getData fetch from server
    let createApp = false; // Trigger pop up application creation form
    let selectedApp; // View selected application detail
    let appDetail = false; // Trigger pop up application detail
    let appRemove = false; // Trigger pop up application remove confirmation

    // Application Info getData for creation
    
    let application_name = '';
    let username = '';
    let user_email = '';
    let user_password = '';
    let user_phone_number = '';
    let expire_token = '';


    let allow_create = false; // True will render the create application button to check if the creation form input are inputted




    let disable_renew_application = true; // Disable the input field of token expire when view application detail
    let validate_future = false; // Check if the input date field is future 
    let old_date; // Temporary store old date of selected application
    
    
    //List getData base on searching getData
    $: filterApp = applications.filter((app) => app.application_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);


    async function handleRegister () {
        // Convert the date to the format your backend expects
        const expire_date = new Date(expire_token);
        const expire_seconds = Math.floor((expire_date - new Date()) / 1000) + 1;

        const response = await fetch(`${env.PUBLIC_HOST}application/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                application_name,
                username,
                user_email,
                user_password,
                user_phone_number,
                expire_token: `${expire_seconds}seconds`
            })
        });
        const getData = await response.json();

        if(getData.success) {
            const newApp = {
                number: applications.length + 1,
                id: getData.data._id, 
                application_name,
                username,
                user_email,
                user_phone_number,
                expired_at: formatDate(expire_token)
            };

            applications = [...applications, newApp]; // Pushing new object created for update applications rendering
            
            createApp = false;
        }
        else {
            alert(getData.error);
        }
        // console.log(getData);
    };

    async function handleRenew() {
        const expire_date = new Date(selectedApp.expired_at);
        const expire_seconds = Math.floor((expire_date - new Date()) / 1000) + 1;

        const response = await fetch(`${env.PUBLIC_HOST}application/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                application_name: selectedApp.application_name,
                username: selectedApp.username,
                user_email: selectedApp.user_email,
                user_password: selectedApp.user_password,
                user_phone_number: selectedApp.user_phone_number,
                expire_token: `${expire_seconds}seconds`
            })
        })

        const getData = await response.json();
        if(getData.success) {
            const renewApp = applications.findIndex(app => app.id === selectedApp.id);
            if(renewApp !== -1) {
                const renew = {
                    number: selectedApp.number,
                    id: selectedApp.id,
                    application_name: selectedApp.application_name,
                    username: selectedApp.username,
                    user_email: selectedApp.user_email,
                    user_phone_number: selectedApp.user_phone_number,
                    expired_at: formatDate(selectedApp.expired_at),
                }
                applications[renewApp] = {...renew}; // Update object on specific application
                disable_renew_application = true;
            }
        }
        else {
            alert(getData.error);
        }
    }

    async function handleRemove (id) {
        const response = await fetch(`${env.PUBLIC_HOST}application/delete/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const getData = await response.json();

        if(getData.success) {
            const removeIndex = applications.findIndex(app => app.id === id);

            if(removeIndex !== -1) {
                applications.splice(removeIndex, 1);
                applications.forEach((app, index) => {
                    app.number = index+1;
                })
                applications = applications;
            }
            appRemove = false;
        }
        else {
            alert(getData.error)
        }
    }

    function resetData() {
        application_name = '';
        username = '';
        user_email = '';
        user_password = '';
        user_phone_number = '';
        expire_token = '';
    }

    function update(oldDate) {
        old_date = oldDate;
        disable_renew_application = false;
        const attributeType = document.getElementById('update');
        if(disable_renew_application) {
            attributeType.type = "text";
        }
        else {
            attributeType.type = "datetime-local";
        }
    }
    function validateToCreate(event) {
        const inputDate = new Date(event.target.value);
        const currentDate = new Date();

        if(inputDate > currentDate) {
            allow_create = true;
        }
        else {
            allow_create = false;
        }

    }


    function validateDate(event) {

        const inputDate = new Date(event.target.value);
        const currentOldDate = new Date(old_date);
        const currentDate = new Date();

        if(inputDate > currentOldDate && inputDate > currentDate && currentOldDate < currentDate) {
            validate_future = true;
        }
        else {
            validate_future = false;
        }
    }


    // Sort function
    function sortTable(attribute) {
        applications = [...applications].sort((a, b) => {
            if(typeof a[attribute] === 'string') {
                return a[attribute].localeCompare(b[attribute]);
            }
            return (a[attribute] - b[attribute]);
        })
    }

    function viewApp(object) {
        appDetail = true;
        selectedApp = object;
        disable_renew_application = true;
        validate_future = false;
    }


    function removeConfirm(object) {
        selectedApp = object;
        appRemove = true;
    }



    onMount( async () => {
        let tmp = []; // Temporary array to store every new define object
        const response = await fetch(`${env.PUBLIC_HOST}application/all`);
        getData = await response.json();

        // Define new object for rendering
        for( let i = 0; i < getData.length; i++ ) {
            let expireFormat = formatDate(getData[i].expired_at);
            const obj = {
                number: i+1,
                id: getData[i]._id,
                application_name: getData[i].application_name,
                username: getData[i].username,
                user_email: getData[i].user_email,
                user_phone_number: getData[i].user_phone_number,
                expired_at: expireFormat,
                compareDate: getData[i].expired_at
            }
            tmp = [...tmp, obj]; // Push object to array tmp
        }
        applications = tmp;
    })
</script>