<template>
  <div class="addpro">
    <v-header></v-header>
    <div class="play_id">
      <el-input placeholder="请填写玩家id" v-model="id"></el-input>
    </div>
    <div class="ch_card">
      <button class="yellowbut add_creats">玩家充卡</button>
      <button class="yellowbut add_creats card-m" @click="playchargesec">充值查询</button>
      <button class="yellowbut add_creats card-m">剩余房卡</button>
    </div>
    <div class="pro_mange play_car">
      <h2>充值记录</h2>
      <el-table :data="tableData" border style="width: 100%;" height='350' >
        <el-table-column
          prop="xnum"
          label="玩家ID"
          width="80">
        </el-table-column>
        <el-table-column
          prop="xname"
          label="玩家昵称"
          width="80">
        </el-table-column>
        <el-table-column
          prop="id"
          label="冲卡数量">
        </el-table-column>
        <el-table-column
          prop="card"
          label="冲卡时间">
        </el-table-column>
      </el-table>
    </div>
    <!-- <v-barbotom></v-barbotom> -->
  </div>
</template>
<script>
  import conHeader from '../public/conHeader.vue';
  import Host from '@/assets/Host.js';
  export default {
    data() {
      return {
        id:'',
        tableData: []
      }
    },
     methods:{
        //查询下级推广员
        playchargesec(){
            if(this.searchform.swetnum==''||this.searchform.sphone==''){
                this.$message({
                    message:'请输入要查找手机号或者微信号',
                    type:"warning",
                    showClose:true
                })
                return;
            }else{
                var that=this;
                var phonesx=this.searchform.sphone;//手机号
                var sxf=this.searchform.swetnum;//微信号
                this.$ajax({
                  method: 'post',
                  url:Host+'/agent/agent/queryMyAgent?t='+Math.random(),
                  params: {phonesx,sxf}
                }).then(function (res) {
                   that.tableData=res.data
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    },
    components: {
      'v-header': conHeader
    },
    mounted() {
      console.log(Host)
      var token =localStorage.getItem("token")  //获取参数
    }
  }
</script>
<style lang="scss" scoped>

// .top li{float:left;width:50%;height:30px;line-height:30px;}
</style>
