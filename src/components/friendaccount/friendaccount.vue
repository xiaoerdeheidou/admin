<template>
  <div class="batch">
    <v-header></v-header>
    <span class="zcart_s">亲友圈剩余房卡：{{friendcad}}</span>
    <el-input placeholder="请输入数量" v-model="input3">
      <template slot="prepend">输入数量</template>
     </el-input>
  </div>
</template>

<script>
  import conHeader from '../public/conHeader.vue';
  import Host from '@/assets/Host.js';
  export default {
    data() {
      return {
        friendcad:'33',
        clubs:[{"id":"50d49fbc7aef4c19adb02899d6a2403d","isNewRecord":false,"remarks":"推广后台创建的俱乐部","createDate":"2018-06-04 11:37:13","updateDate":"2018-06-04 11:37:13","clubId":"137843","clubName":"点点点点点点","playerNum":"500","cardNo":"50","playerCardMax":"100","agentId":"297","announcement":"创建俱乐部","sheng":"150000","status":"1"},
        {"id":"3acac6269617435faa5ce53908f8a3d5","isNewRecord":false,"remarks":"推广后台创建的俱乐部","createDate":"2018-06-04 11:29:11","updateDate":"2018-06-04 11:29:11","clubId":"682173","clubName":"88","playerNum":"500","cardNo":"50","playerCardMax":"100","agentId":"297","announcement":"创建俱乐部","sheng":"150000","status":"1"}]
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
