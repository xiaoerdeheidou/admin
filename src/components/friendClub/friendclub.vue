<template>
  <div class="batch">
    <v-header></v-header>
    <span class="yellowbut">创建亲友圈</span>
    <div>
      <div class="friendclubs" v-for="club in clubs">
        <div class="friendclubs-left">
          <p>{{club.clubName}}</p>
          <p>ID:{{club.clubId}}</p>
          <p class="fc_mg"><span class="yellowbut fc-wid">修&nbsp;&nbsp;改</span><span class="next-f fc_mg fc-wid">解&nbsp;&nbsp;散</span></p>
        </div>
        <div class="friendclubs-right">
          <span class="yellowbut fc-g">成员管理</span>
          <span class="yellowbut fc-g">亲友圈账户</span>
          <span class="yellowbut fc-g">战绩查询</span>
          <span class="yellowbut fc-g">快捷开房</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import conHeader from '../public/conHeader.vue';
  import Host from '@/assets/Host.js';
  export default {
    data() {
      return {
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
