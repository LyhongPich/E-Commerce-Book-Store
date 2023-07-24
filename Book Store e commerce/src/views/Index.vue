
<script>
    import { RouterView } from 'vue-router';
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    
    export default {
        data() {
            return {
                object: {},
            }
        },
        components: {
            Header,
            Footer,
        },
        methods: {
            handleData(data) {
                this.object = data;
                this.$emit('handlemail', this.object);
                console.log(data);
            }
        }
    }
</script>

<template>
    <Header></Header>
    <RouterView @checkmail="handleData"/>
    <Footer></Footer>
</template>
