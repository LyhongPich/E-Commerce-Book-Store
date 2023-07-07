<script>
  import { RouterLink, RouterView } from 'vue-router';
  import Index from './views/Index.vue';
  import Login from './views/LoginView.vue'
  import SignUp from './views/SignUpView.vue'

  export default {
    data() {
      return {
        isLogin: false,
        isSignUp: false
      }
    },
    components: {
      Index,
      Login,
      SignUp
    }
  }
</script>

<template>
  <div>
    <Login @register="isSignUp = true" @logout="isLogin = false" v-if="isLogin"/>
    <SignUp @register="isSignUp = false" v-else-if="isSignUp"/>
    <Index v-else @login="isLogin = true" @signUp="isSignUp = true "/>
  </div>
  <!-- <Footer></Footer> -->
</template>

