<template>
	<div class="con_footer">
			<el-footer>
				<el-row>
					<el-col :span="6"><div class="grid-content bg-purple">成员管理</div></el-col>
					<el-col :span="6"><div class="grid-content bg-purple-light">添加成员</div></el-col>
					<el-col :span="6"><div class="grid-content bg-purple">入会申请</div></el-col>
					<el-col :span="6"><div class="grid-content bg-purple-light">离会记录</div></el-col>
				</el-row>
			</el-footer>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted(){
			
		}
	}
</script>
<style scoped="scoped">
	.con_footer{width:100%;position: fixed;background:#282f3f;bottom:0;right: 0;left:0;color: #fff;z-index:9;}
	.bg-purple,.bg-purple-light {text-align: center;}
	.el-icon-circle-plus:before{width:60px;height: 60px;}
</style>
