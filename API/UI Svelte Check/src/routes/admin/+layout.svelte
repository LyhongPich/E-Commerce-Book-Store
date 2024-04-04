<Header 
    application_name={app.application_name || ''} 
    name={app.username || ''}
/>
<div class="flex h-full">
    <Bar/>
    <div class="w-full bg-slate-200">
        <slot/>
    </div>
</div>

<script>
    import Header from '../../components/Header.svelte'
    import Bar from '../../components/BarAdmin.svelte'
    
    import { getToken } from '../../stores/token'
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import cookie from '../../components/cookie'
    import { env } from '$env/dynamic/public'

    let token = '';
    let cookieApp = '';
    let application; // Fetch application data from server
    let app={}; // Render application data
    
    
    getToken.subscribe((value) => {
        token = value;
    })

    onMount(async() => {

        const applicationCookie = cookie.getCookie("token");

        if(applicationCookie) {
            cookieApp = applicationCookie;
        }

        if(!token && !cookieApp) {
            goto("/");
            return;
        }
        
        const response = await fetch(`${env.PUBLIC_HOST}login/admin`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token || cookieApp}`
            }
        })
        application = await response.json();
        
        if(application.success) {
            const obj={
                id: application.data._id,
                application_name: application.data.application_name,
                username: application.data.username,
                token: application.data.token,
                expired_at: application.data.expired_at
            }

            app = obj

            cookie.setCookie("token", app.token, new Date(app.expired_at));
        }

    })
</script>