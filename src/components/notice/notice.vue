<template>
  <div class="notice">
    <v-header></v-header>
    <div>当前公告</div>
    <div class="main_notice">{{noticecontent}}</div>
  </div>
</template>

<script>
  import conHeader from '../public/conHeader.vue';
  import Host from '@/assets/Host.js';
  export default {
    data() {
      return {
       noticecontent:''
      };
    },
    methods: {
      
    },
    components: {
      'v-header': conHeader
    },
    mounted() {
      console.log(Host)
    }
  }

</script>

<style lang="scss" scoped>
</style>
