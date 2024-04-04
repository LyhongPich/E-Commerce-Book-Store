<Header 
    application_name={user.application_name || ''} 
    name={user.username || ''}
/>
<div class="flex h-full">
    <Bar/>
    <div class="w-full">
        <slot/>
    </div>
</div>

<script>
    import Header from '../../components/Header.svelte'
    import Bar from '../../components/BarUser.svelte'

    import { onMount } from 'svelte';
    import { getID } from '../../stores/token'
    import { env } from '$env/dynamic/public'
    
    
    let id = ''; // store specific user id from store
    let getUser; // Fetch user data from server
    let user={}; // Render user data
    
    getID.subscribe((value) => id = value);

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
                application_name: getUser.application_name
            }
            user = object;
            sessionStorage.setItem('userID', user.id);
        }
        else {
            sessionStorage.clear();
            goto('/')
        }

    })
    
</script>