<template>
  <div class="batch">
    <v-header></v-header>
  </div>
</template>

<script>
  import conHeader from '../public/conHeader.vue';
  import Host from '@/assets/Host.js';
  export default {
    data() {
      return {
       
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
