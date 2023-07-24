<script>
    import Mail from '../components/MailConfirm.vue'
    export default{
        props: {
            getObj: {
                type: Object,
                required: true,
            }
        },
        components: {
            Mail,
        }
    }
</script>

<template>
    <Mail :object = "getObj" @back="$emit('return')"/>
</template>