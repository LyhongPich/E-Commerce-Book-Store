<Dashboard 
    user_email={app.user_email} 
    user_phone_number={app.user_phone_number}
    expired_at={expiry} 
    token={app.token}
/>

<script>
    import { getToken } from '../../stores/token'
    import Dashboard from '../../components/DashboardAdmin.svelte'
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';
    import cookie from '../../components/cookie'
    import formatDate from '../../components/date';
    import { env } from '$env/dynamic/public'

    let token = '';
    let cookieApp = '';
    let application; // Fetch application data from server
    let app = {}; // Render application data   
    let expiry;

    
    getToken.subscribe((value) => {
        token = value;
    })
    
    onMount(async() => {
        
        const applicationCookie = cookie.getCookie("token");
        
        if(applicationCookie) {
            cookieApp = applicationCookie;
        }

        if(!token && !cookieApp) {
            goto("/")
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
            const obj = {
                id: application.data._id,
                application_name: application.data.application_name,
                username: application.data.username,
                user_email: application.data.user_email,
                user_phone_number: application.data.user_phone_number,
                token: application.data.token,
                expired_at: application.data.expired_at
            }

            app = obj;

            expiry = formatDate(app.expired_at);
        
            cookie.setCookie("token", app.token, new Date(app.expired_at));
        }

    })
</script>