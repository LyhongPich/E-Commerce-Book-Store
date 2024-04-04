<Header 
    application_name="2FA" 
    name="Super Admin"
/>
<div class="flex h-full">
    <Bar/>
    <div class="w-full">
        <slot/>
    </div>
</div>


<script>
    import Header from '../../components/Header.svelte'
    import Bar from '../../components/Bar.svelte'
</script>