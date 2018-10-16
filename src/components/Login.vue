<template>
  <div class="content">
        <div class="breadcrumb">
            <div :to="{ path: '/strategy' }">首页 </div>
        </div>

        
        <div class="content_nav">
            <div class="title1">你好，admin ! 欢迎使用 战略管理系统</div>
            <div class="title2">这里是比较长的文字介绍这里是比较长的文字介绍这里是</div>
            
            <div class="brand vertical" style="padding-top:70px;height: 300px;">
                <div :class="thisClass" @mouseenter="enter" @mouseleave="leave"><!-- 大容器 -->
                    <div class="flip" ><!-- 实现翻牌容器 -->
                        <div class="side front"><!-- 牌正面 -->
                           
                        </div>
                        <div class="side back"><!-- 牌背面 -->
                            <span>示例这里是简单的系统介绍这里是简单的系统介绍这里是简单的系统介绍这里是简单的系统介绍</span>
                            <ul>
                                <li v-on:click="gopreview">示例11</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip_wrap"><!-- 大容器 -->
                    <div class="flip"><!-- 实现翻牌容器 -->
                        <div class="side front"><!-- 牌正面 --> 
                        </div>
                        <div class="side back"><!-- 牌背面 -->
                           <span>示例这里是简单的系统介绍这里是简单的系统介绍这里是简单的系统介绍这里是简单的系统介绍</span>
                           <ul>
                                <li><router-link :to="{ path: '/strategy/home' }">目标与计划管理</router-link></li>
                                <li><router-link :to="{ path: '/strategy/preview' }">经营可视化</router-link></li>
                                <li @click="gopreview">决议事项督办</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flip_wrap" style="margin:0;"><!-- 大容器 -->
                    <div class="flip"><!-- 实现翻牌容器 -->
                        <div class="side front"><!-- 牌正面 -->
                           
                        </div>
                        <div class="side back"><!-- 牌背面 -->
                            <span>示例这里是简单的系统介绍这里是简单的系统介绍这里是简单的系统介绍这里是简单的系统介绍</span>
                            <ul>
                                <li><router-link :to="{ path: '/strategy/home' }">示例</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import conHeader from './public/conHeader.vue';
  import Host from '../assets/Host.js';
  export default {
    data() {
      return {
        thisClass:'flip_wrap',
        logining: false,
        pig:'pig',
        client_id:'pig',
        grant_type:'password',
        scope:'server',
        ruleForm2: {
          account: '',//用户名
          checkPass: ''//密码
        }
      };
    },
    methods: {
      enter: function(){
        this.thisClass='flip_wrap2'
        },
        leave: function(){
          this.thisClass='flip_wrap'
        },
        
        gopreview(){
    alert(111)
    },

        drawLine() {
            
        },
      login() { //登陆
        var that = this;
        if(this.ruleForm2.account==''||this.ruleForm2.checkPass==''){
          this.$notify({
            title: '警告',
            message: '请输入用户名或密码',
            type: 'warning'
          });
					return false;
        }
        that.logining = true;
        var username=this.ruleForm2.account//用户名
        var password= this.ruleForm2.checkPass//密码
        // 下面是后台需要的参数配置
        var client_secret=this.pig
        var client_id=this.client_id
        var grant_type=this.grant_type
        var scope=this.scope
        this.$ajax({
          method: 'post',
          url:Host+'/auth/oauth/token',
          params: {username,password,client_secret,client_id,grant_type,scope},
          headers: {'Authorization': 'Basic cGlnOnBpZw=='}
        }).then(function (res) {
            that.logining = false;
            console.log(res.data)
            if (res.data.status=="200") {
              localStorage.setItem("token",res.data.token) //存储token
              localStorage.setItem("userId",res.data.id) //用户ID
              localStorage.setItem("userLeveId",res.data.leveId) //用户级别
              if(that.$route.query.redirect){//判断是否是其他页路由进来的
                let redirect = that.$route.query.redirect;
                that.$router.push(redirect);
              }else{
                that.$router.push({ path: '/home' });
              }
            } else if(res.data.status=="500"){
              that.$message({
                message: res.msg,
                type: 'error'
              });
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
    }
  }

</script>

<style lang="scss" scoped>

.content {
    //background: url(../img/hy_bg.png) no-repeat 40px  40px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .breadcrumb {
        div {
            margin-left: 15px;
            font-size: 12px;
        }
        display: flex;
        align-items: center;
        justify-content: left;
        width: 100%;
        height: 40px;
        background-color: #fff;
    }
    .content_nav{
        width: 1200px;
        padding: 0;
        margin: 0 auto;
        div.title1{
            text-align: center;
            font-size: 32px;
            line-height: 42px;
            padding-top: 70px;
        }
        div.title2{
            text-align: center;
            font-size: 18px;
            color: #908EA4;
            line-height: 24px;
            padding-top: 20px;
        }
       .flip_wrap{
            width:354px;
            height:300px;
            margin: 0 69px 0 0;
            cursor: pointer;
            float: left;
            perspective:800px;/*perspective属性定义3D元素距视图的距离,以像素计。该属性允许您改变 3D 元素查看 3D 元素的视图。*/
            -webkit-perspective:800px;
            -moz-perspective:800px;
            -ms-perspective:800px;
            -o-perspective:800px;
            
        }
        .flip_wrap2{
           .flip{
                transform:rotateY(180deg);
                -webkit-transform:rotateY(180deg);
                -moz-transform:rotateY(180deg);
                -ms-transform:rotateY(180deg);
                -o-transform:rotateY(180deg);
                 z-index: 9999;
                    position: relative;
                .back{
                    z-index: 9999;
                    position: relative;
                }
            }
            
        }
        .flip{
                width:354px;
                height:300px;
                backface-visibility:hidden;/*背对屏幕时隐藏*/
                -webkit-backface-visibility:hidden;
                -moz-backface-visibility:hidden;
                -ms-backface-visibility:hidden;
                -o-backface-visibility:hidden;
                transition: all 1s ease; /*为翻牌添加过渡效果*/
                -webkit-transition: all 1s ease;
                -moz-transition: all 1s ease;
                -ms-transition: all 1s ease;
                -o-transition: all 1s ease;
                transform-style: preserve-3d; /*子元素将保留其 3D 位置。*/
                .side{
                    width:352px;
                    height:298px;
                    border-radius: 2px;
                    position: absolute;/*让背面和正面重叠*/
                    left:50%;
                    margin-left:-176px;
                }
                .front{
                    background: #fff;
                    border: 1px solid #f0f0f0;
                    z-index:2;/*让正面朝上*/
                    text-align: center;
                    img{
                        padding-top: 60px;
                    }
                    span{
                        display: block;
                        line-height: 50px;
                        font-size: 18px;
                        color: #55535e;
                    }
                }
                .back{
                    background: #999;
                    border: 1px solid #434343;
                    color: #fff;
                    transform:rotateY(180deg);
                    -webkit-transform:rotateY(180deg);
                    -moz-transform:rotateY(180deg);
                    -ms-transform:rotateY(180deg);
                    -o-transform:rotateY(180deg);
                    span{
                        display: block;
                        padding: 30px 65px;
                        line-height: 21px;
                        font-size: 13px;
                        text-align: left;
                    }
                    ul{
                        width: 160px;
                        margin: 0 auto;
                        list-style: none;
                        padding: 0;
                        text-align: center;
                        li{
                            margin: 0 0 10px;
                            width: 160px;
                            height: 40px;
                            line-height: 40px;
                            font-size: 14px;
                            border: 1px solid rgba(28, 144, 235, 1);
                            border-radius: 5px;
                            background-image: -webkit-linear-gradient(top, #2CA0F7, #1A90EA);
                            a{
                                text-decoration: none;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        // div.flip_wrap:hover{
        //     .flip{
        //         transform:rotateY(180deg);
        //         -webkit-transform:rotateY(180deg);
        //         -moz-transform:rotateY(180deg);
        //         -ms-transform:rotateY(180deg);
        //         -o-transform:rotateY(180deg);
        //          z-index: 9999;
        //             position: relative;
        //         .back{
        //             z-index: 9999;
        //             position: relative;
        //         }
        //     }
        // }
        
        div.vertical{
            div.xuanzhuan{
                .info{
                    width: 0;
                    height: 298px;
                    margin: 0 auto;
                }
            }
        }
    }
}
</style>
