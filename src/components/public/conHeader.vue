<template>
	<div class="con_header">
		
			<div class= "left_self" @click="winds_local()" v-show='ok'>
				<span class="next-f h-next" >返  回</span>
				<!-- <svg width="50" height="100%" version="1.1">
					<polyline points="27,35 15,25 27,15" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
				</svg> -->
			</div>
			<div class= "right_self"  >
				<span class="next-f loginout" v-show='sginoutshow' @click="signout()">退出登录</span>
			</div> 
			<div class="center_self">
				<span>{{header}}</span>
			</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				header:'',
				ok:true,
				sginoutshow:true
			}
		},
		methods: {
			winds_local(){
        		window.history.go(-1)
			},
			signout(){
				var is_weixin = function () {
			        var ua = navigator.userAgent.toLowerCase();
			        if (ua.match(/MicroMessenger/i) == null) {
			          	return false;
			        } else {
			          	return true;
			        }
				}
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					localStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});
				// if(is_weixin()){
				// }else{
				// }
			}
		},
		mounted(){
			var route=this.$route.path;
			if(route=='/addpromoter'){
				this.header='添加推广员';
			}else if(route=='/page02'){
				this.header='代理';
        		// this.ok=0;
			}else if(route=='/promoterManger'){
				this.header='推广员管理';
			}else if(route=='/playerCharge'){
				this.header='玩家充卡';
			}else if(route=='/Login'){
				this.header='全民内蒙麻将';
			}else if(route=='/friendclub'){
				this.header='亲友圈';
			}else if(route=='/clubmanager'){
				this.header='成员管理';
			}else if(route=='/addmanager'){
				this.header='添加成员';
			}else if(route=='/levelmanger'){
				this.header='离会成员';
			}else if(route=='/membership'){
				this.header='入会申请';
			}else if(route=='/friendaccount'){
				this.header='亲友圈账户';
				this.sginoutshow=false;
			}
		}
	}
</script>
<style scoped="scoped">
	.con_header{width:100%;overflow: hidden;height:46px;background:#c36f40}
	.left_self,.right_self{ width: 15%;text-align: center;font-size: 16px;color: #fff; margin-top:12px;}  
	.left_self {float: left;margin-left:4px;}  
	.right_self{float: right;width:22%;margin-right:4px;}  
	.center_self{margin: 0 15%;height: 46px;line-height:46px; text-align: center;font-size: 16px;color: #fff;} 
	.center_self span{font-size:18px;}
</style>
