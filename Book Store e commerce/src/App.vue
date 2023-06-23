<script>
  import { RouterLink, RouterView } from 'vue-router';
  import Index from './views/Index.vue';
  import Login from './views/LoginView.vue'
  import Footer from './components/FooterBase/FooterBase.vue'
  import Signup from './views/SignUpView.vue'

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
      Login,
      Signup
    }
  }
</script>

<template>
  
    <Login @logout="isLogin = false" v-if="isLogin" />
    <Signup @back="isSignUp = false" v-else-if="isSignUp"/>
    <Index v-else @login="isLogin = true" || @signup="isSignUp = true"/>
  
  <Footer></Footer>
</template>

