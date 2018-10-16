<template>
  <div class="navigation">
    <!-- <v-header></v-header> -->
    <div class="na_top"><img src="../img/indexbg.jpg" alt="" ></div>
    <div class="info-con">
      <div class="info-content">
         <div class="info-conright"></div>
        <div class="info-confloat"><span class="fo-neck">我的昵称:</span><span class="fo-value">玩家12345</span></div>
       
      </div>
      <div class="info-content">
        <div class="info-confloat fl-rb"><span class="fo-neck">我的ID:</span><span class="fo-value">666666</span></div>
        <div class="info-confloat r-float"><span class="fo-neck">我的卡数:</span><span class="fo-value">888888</span></div>
      </div>
    </div>
    <ul class="nav_content">
      <!-- <li v-show='wxshowsten'>
        <router-link  :to="{ path: 'playerCharge', query: { matchId: matchId }}">
          <img src="../img/timg.jpg" alt="" >
          <div class="yw_n">购买房卡</div>
        </router-link>
      </li>
      <li v-show='showsten'>
        <router-link  :to="{ path: 'playerCharge', query: { matchId: matchId }}">
          <img src="../img/timg.jpg" alt="" >
          <div class="yw_n">购买房卡微信外</div>
        </router-link>
      </li> -->
      <li>
        <router-link  :to="{ path: 'playerCharge', query: { matchId: matchId }}">
          <img src="../img/chongka.png" alt="">
          <div class="yw_n">玩家充卡</div>
        </router-link>
      </li>
    
      <li>
        <router-link  :to="{ path: 'playerCharge', query: { matchId: matchId }}">
          <img src="../img/goumai.png" alt="" >
          <div class="yw_n">购买充卡</div>
        </router-link>
      </li>
      <li>
        <router-link  :to="{ path: 'playerCharge', query: { matchId: matchId }}">
          <img src="../img/tongji.png" alt="" >
          <div class="yw_n">购卡统计</div>
        </router-link>
      </li>
      </ul>
    <ul class="nav_content">
      <li>
        <router-link  :to="{ path: 'playerCharge', query: { matchId: matchId }}">
          <img src="../img/tuiguangck.png" alt="" >
          <div class="yw_n">推广充卡</div>
        </router-link>
      </li>
    
      <li>
        <router-link  :to="{ path: 'playerCharge', query: { matchId: matchId }}">
          <img src="../img/qinyq.png" alt="" >
          <div class="yw_n">亲友圈</div>
        </router-link>
      </li>
      <li>
        <router-link  :to="{ path: 'playerCharge', query: { matchId: matchId }}">
          <img src="../img/renwu.png" alt="" >
          <div class="yw_n">任务</div>
        </router-link>
      </li>
    </ul>
    
    <ul class="nav_content">
      <li v-if="gameleveId=='A'">
        <router-link  :to="{ path: 'addpromoter', query: { matchId: matchId }}">
          <img src="../img/tuiugangguanli.png" alt="" >
          <div class="yw_n">推广管理a</div>
        </router-link>
      </li>
       <li v-else>
          <img src="../img/tuiugangguanli.png" alt="" >
          <div class="yw_n">推广管理B</div>
      </li>
      <li>
        <router-link  :to="{ path: 'playerCharge', query: { matchId: matchId }}">
          <img src="../img/tongzhi.png" alt="" >
          <div class="yw_n">公告</div>
        </router-link>
      </li>
      <li>
        <router-link  :to="{ path: 'playerCharge', query: { matchId: matchId }}">
          <img src="../img/xiaf.png" alt="" >
          <div class="yw_n">我的消息</div>
        </router-link>
      </li>
      <!-- <li v-shov-show="loshow">
        <router-link  :to="{ path: 'addpromoter', query: { matchId: matchId }}">
          <img src="../img/chongka.png" alt="" >
          <div class="yw_n">添加推广员</div>
        </router-link>
      </li>
      <li>
        <router-link  :to="{ path: 'friendclub', query: { matchId: matchId }}">
          <img src="../img/chongka.png" alt="" >
          <div class="yw_n">亲友圈</div>
        </router-link>
      </li>
      <li v-show="loshow">
        <router-link  :to="{ path: 'promoterCharge', query: { matchId: matchId }}">
          <img src="../img/timg.jpg" alt="" >
          <div class="yw_n">推广员充卡</div>
        </router-link>
      </li>
      <li v-show="loshow">
        <router-link  :to="{ path: 'returnRard', query: { matchId: matchId }}">
          <img src="../img/timg.jpg" alt="" >
          <div class="yw_n">返卡详情</div>
        </router-link>
      </li>
      <li>
        <router-link  :to="{ path: 'modifypassword', query: { matchId: matchId }}">
          <img src="../img/timg.jpg" alt="" >
          <div class="yw_n">修改密码</div>
        </router-link>
      </li>
      <li>
        <router-link  :to="{ path: 'perinformation', query: { matchId: matchId }}">
          <img src="../img/timg.jpg" alt="" >
          <div class="yw_n">个人信息</div>
        </router-link>
      </li>
      <li>
        <router-link  :to="{ path: 'notice', query: { matchId: matchId }}">
          <img src="../img/timg.jpg" alt="" >
          <div class="yw_n">推广员公告</div>
        </router-link>
      </li>
      <li>
        <router-link  :to="{ path: 'modifypassword', query: { matchId: matchId }}">
          <img src="../img/timg.jpg" alt="" >
          <div class="yw_n">意见反馈</div>
        </router-link>
      </li> -->
    </ul>
    <!-- <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="60%">
  <span>有新公告</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog> -->
  <div id="gongao"> 
    <div style="width:100%;height:24px;margin:0 auto;white-space: nowrap;overflow:hidden;" id="scroll_div" class="scroll_div"> 
      <div id="scroll_begin"> 
      我是推广员，今天有活动我是推广员，今天有活动我是推广员，今天有活动我是推广员，今天有活动
      </div> 
      <div id="scroll_end"></div> 
    </div> 
    </div> 
  </div>
</template>

<script>
  import conHeader from './public/conHeader.vue';
  import Host from '../assets/Host.js';
  import { Loading } from 'element-ui';
  export default {
    data() {
      return {
        matchId:'',
        user_name:'',
        code:'',
        type:'',
        client_id:'pig',
        wxshowsten:null,
        showsten:null,
        gameleveId:'',
        dialogVisible:null,
        fullscreenLoading: false
        }
    },
    methods: {
      is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == null) {
            return false;
        } else {
            return true;
        }
      },
      recharge(){
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4d406d12adda944f&redirect_uri=http%3a%2f%2fxingouh5.9cfcf.com%2f%23%2f&response_type=code&scope=snsapi_base&state='+ this.userid +'#wechat_redirect'
//                this.$router.push({name:'recharge'})
      },
      //跑马灯位置
      ScrollImgLeft(){ 
        var speed=10; 
        var scroll_begin = document.getElementById("scroll_begin"); 
        var scroll_end = document.getElementById("scroll_end"); 
        var scroll_div = document.getElementById("scroll_div"); 
        scroll_end.innerHTML=scroll_begin.innerHTML; 
        function Marquee(){ 
          if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0){
            scroll_div.scrollLeft-=scroll_begin.offsetWidth; 
          }else {
            scroll_div.scrollLeft++; 
          } 
        } 
        var MyMar=setInterval(Marquee,speed); 
        scroll_div.onmouseover=function() {
          clearInterval(MyMar);
        } 
        scroll_div.onmouseout=function() {MyMar=setInterval(Marquee,speed);} 
      } 
    },
    components: {
      'v-header': conHeader
    },
    mounted() {
      //页面加载的
      // const loading = this.$loading({
      //   lock: true,
      //   text: '加载中',
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.7)'
      // });
      // setTimeout(() => {
      //   loading.close();
      // }, 1000);
      //跑马灯
      this.ScrollImgLeft();
      this.gameleveId=localStorage.getItem("userLeveId")  //获取参数
      //console.log(gameleveId)
      // if(gameleveId=='A'){
      //   this.loshow=true
      // }else{
      //   this.loshow=false;
      //  }
      // var client_id=this.client_id
      // let that=this
      // this.$ajax({
      //   method: 'get',
      //   url:Host+'/agent/agent/getAgent',
      //   params: {client_id}
      // }).then(function (res) {
      //    if(res.data.agent.levelid=='A'){
      //     that.loshow=true
      //    }else{
      //       that.loshow=false;
      //       if(data.agent.userType=='2'){
      //         if(data.parentLevit != null && data.parentLevit.levelid=='A'){
      //           this.wxshowsten=true
      //           this.showsten=false
      //         }
      //       }else{
      //         if(this.is_weixin()){
      //           this.wxshowsten=true
      //           this.showsten=false
      //         }else{
      //           this.wxshowsten=false
      //           this.showsten=true
      //         }
      //       }
      //    }
      // }).catch(function (error) {
      //     console.log(error);
      // });
      // if(this.is_weixin()){
      //   this.wxshowsten=true
      //   this.showsten=false
      // }else{
      //   this.wxshowsten=false
      //   this.showsten=true
      // }
      // this.dialogVisible=true
      // console.log(this.$route.query.code)//获取地址栏过来的参数
      
    }
  }
</script>

<style scoped lang="scss">
.yw_n{text-align: center;color:#1f293c;font-weight:400;}
.nav_content img{width:50%;margin:20px auto 4px;}
.nav_content li{width:33.33333%;float: left;-webkit-box-sizing: border-box;box-sizing: border-box;text-align: center}
#gongao{position:fixed;bottom:0;left:0;right:0;border-top:3px solid #ca8ed6;width:100%;height:24px;;overflow:hidden;line-height:24px;font-size:14px;font-family:'宋体';background:#000;color:#fff;font-weight:bold;} 
#gongao #scroll_begin, #gongao #scroll_end{display:inline} 
</style>
