<template>
  <div class="addpro">
    <v-header></v-header>
    <div class="add_butn"><button class="yellowbut add_creats">添加推广员</button></div>
    <div class="pro_mange">



      <el-table :data="tableData" border style="width: 100%;" height='350' >
        <el-table-column
          prop="xnum"
          label="手机号"
          width="90">
        </el-table-column>
        <el-table-column
          prop="xname"
          label="微信号"
          width="90">
        </el-table-column>
        <el-table-column
          prop="id"
          label="游戏ID">
        </el-table-column>
        <el-table-column
          prop="card"
          label="剩余房卡">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import conHeader from '../public/conHeader.vue';
  import Host from '@/assets/Host.js';
  export default {
    data() {
      return {
        tableData: []
      }
    },
     methods:{
        //查询下级推广员
        sectpromoter(){
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
.add_content{padding:32px 32px 0;box-sizing:border-box;}
.add_content .el-form-item{margin-bottom:6px;}
.code_name{width:54%;float:left}
// .top li{float:left;width:50%;height:30px;line-height:30px;}
</style>
