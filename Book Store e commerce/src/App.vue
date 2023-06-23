<script>
  import { RouterLink, RouterView } from 'vue-router';
  import Index from './views/Index.vue';
  import Login from './views/LoginView.vue'
  import Footer from './components/FooterBase/FooterBase.vue'

  export default {
    data() {
      return {
        isSignUp: false,
        isLogin: false
      }
    },
    components: {
      Index,
      Footer,
      Login
    }
  }
</script>

<template>
  
    <Login @logout="isLogin = false" v-if="isLogin" />
    <Index v-else @login="isLogin = true"/>
  
  <Footer></Footer>
</template>

