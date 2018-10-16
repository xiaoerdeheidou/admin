<template>
  <div class="addpro">
    <v-header></v-header>
    <div class="add_content">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="微信号:">
            <el-input v-model="form.wetnum"></el-input>
          </el-form-item>
          <el-form-item label="游戏ID:">
            <el-input v-model="form.gameid"></el-input>
          </el-form-item>
          <el-form-item label="微信昵称:">
            <el-input v-model="form.wetname"></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="手机号:">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          
          <el-form-item label="验证码:">
            <el-input v-model="form.yznum" class="code_name" placeholder="输入验证码"></el-input>
            <span v-show="flag==0" @click="sendCode()" class="yellowbut h_yzm">获取验证码</span>
            <span v-show="flag==1" class="timer">重新发送<span>({{time}})</span></span>
          </el-form-item>
        </el-form>
        <div class="add_butn"><button class="yellowbut add_creats" @click="addpromers">确&nbsp;&nbsp;&nbsp;定</button></div>
    </div>
  </div>
</template>
<script>
  import conHeader from '../public/conHeader.vue';
  import Host from '@/assets/Host.js';
  export default {
    data() {
      return {
        form: {
          wetnum: '',//微信号
          gameid: '',//游戏id
          wetname: '',//微信名称
          password: '',//密码
          phone:'',//手机号
          yznum:''//验证码
        },
        flag: 0,
        time: 60,
        tableData: []
      }
    },
     methods:{
        //添加推广员
        addpromers(){
            if(this.form.wetnum==''||this.form.gameid==''||this.form.wetname==''||this.form.password==''||this.form.phone==''||this.form.yznum==''){
                this.$message({
                    message:'请输入信息',
                    type:"warning",
                    showClose:true
                })
                return;
            }
            var loginName=this.form.phone;//手机号
            var name=this.form.wetname;//微信昵称
            var wecatno=this.form.wetnum;//微信号
            var gameId=this.form.gameid;//游戏ID
            var password=this.form.password;//密码
            var verifyCode=this.form.yznum;//验证码
            var access_token=localStorage.getItem("token")  //获取存储的token
            var that=this;
            this.$ajax({
              method: 'post',
              url:Host+'/agent/agent/saveAgent?t='+Math.random(),
              params: {access_token,loginName,name,wecatno,gameId,password,verifyCode}
            }).then(function (res) {
              alert(res)
                if(res.status == '200') {
                  that.$message({
                    type: 'info',
                    message: '添加推广员成功'
                  });
              } else {
                alert(res.msg);
              }
            }).catch(function (error) {
                console.log(error);
            });
        },
        //发送验证码
        sendCode() {
          var that = this;
          var timer;
          var phones=this.form.phone;
          var access_token=localStorage.getItem("token")  //获取存储的token
          this.$ajax({
            method: 'post',
            url:Host+'/agent/agent/send?t='+Math.random(),
            params: {phones,access_token}
          }).then(function (res) {
              if(res.status == '200') {
                that.flag = 1;
                // that.phone = res.data.datas;
                that.$message({
                  showClose: true,
                  message: '已向绑定手机号' + that.form.phone + '发送验证码'
                });
                timer = setInterval(function() {
                  that.time--;
                  if(that.time <= 0) {
                    clearInterval(timer);
                    that.time = 120;
                    that.flag = 0;
                  }
                }, 1000)
            } else {
              alert(res.msg);
            }
          }).catch(function (error) {
              console.log(error);
          });
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
