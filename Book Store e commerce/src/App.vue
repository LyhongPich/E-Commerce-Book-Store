<script>
  import { RouterLink, RouterView } from 'vue-router';
  import Index from './views/Index.vue'
  import Mail from './views/MailView.vue'

  export default {
    data() {
      return {
        showingMail: false,
        object: {},
      }
    },
    components: {
      Mail,
      Index,
    },
    methods: {
      getData(data) {
        this.object = data;
        this.showingMail = true;
        console.log(data);
      }
    }
  }
</script>

<template>
  <Mail :getObj = "object" @return="showingMail = false" v-if="showingMail"/>
  <Index @handlemail="getData" v-else/>
</template>

