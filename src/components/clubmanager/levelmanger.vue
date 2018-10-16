<template>
  <div class="batch">
    <v-header></v-header>
    <div class="pro_mange">
      <el-table :data="tableData" border style="width: 100%;" height='350' >
        <el-table-column
          prop="xnum"
          label="头像"
          width="90">
           <template slot-scope="scope">
              <img v-if="scope.row.playerHeadurl!=''" :src="scope.row.userHearurl" alt="" style="width: 50px;height: 50px">
              <img v-else src="https://www.baidu.com/img/bd_logo1.png" alt="" style="width: 50px;height: 50px">
          </template>
        </el-table-column>
        <el-table-column
          prop="userNikename"
          label="昵称"
          width="90">
        </el-table-column>
        <el-table-column
          prop="userId"
          label="玩家ID">
        </el-table-column>
        <el-table-column
          prop="date"
          label="退出时间">
        </el-table-column>
      </el-table>
    </div>
    <v-bottom></v-bottom>
  </div>
</template>

<script>
  import conHeader from '../public/conHeader.vue';
  import barbotom from '../public/barbotom.vue';
  import Host from '@/assets/Host.js';
  export default {
    data() {
      return {
        tableData: [{"id":469,"clubId":"137843","userId":"952","agentId":"92051","leaveType":"1","leaveDate":1529465040000,"userNikename":".","userHearurl":"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJm5uXyyRzPniauTDCve1pVILT09wD8s6jUqO0CqibSwibPDibtPzmPnuuFSbSazBWziaMxfbYCibu0iasLQ/132","date":"2018-06-20 11:24:00"}]
      };
    },
    methods: {
      
    },
    components: {
      'v-header': conHeader,
      'v-bottom': barbotom
    },
    mounted() {
      console.log(Host)
    }
  }

</script>

<style lang="scss" scoped>
</style>
