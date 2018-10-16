<template>
  <div class="batch">
    <v-header></v-header>
    <span class="consume_back" @click="back1()">&lt;&nbsp;返回</span><span></span>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import conHeader from './public/conHeader.vue';
  import barbotom from './public/barbotom.vue';
  export default {
    data() {
      return {
        user_name:''
      }
    },
    methods: {
      back1(){
        /*this.$route.push({path:'/home',query:{code:1}})*/
        this.$router.push({path:'/home',query:{code:1}});
      }
    },
    components: {
      'v-header': conHeader,
      'v-footer': barbotom
    },
    mounted() {
      let user_name="333";
      localStorage.setItem("currentUser",user_name);
      /*console.log( localStorage.getItem("currentUser"))*/
    }
  }

</script>

<style scoped lang="scss">

</style>
