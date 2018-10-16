<!--<template>
  <div>
    <div class="home text-center">{{home}}</div>
  </div>
</template>-->
<template>
	<div class="border addMember">
		
		<div class="addBtn">
			<h3>
				用户查找
			</h3>
			<router-link to="/page01">888888</router-link>
			<!--<div class="seach">
				<input type="text" placeholder="请输入要查找的ID号" name="" value="" v-model="input" autofocus class="input" >
				<br>
				<el-button @click='handleIconClick()' type="primary">查询</el-button>
			</div>-->
			
		</div>

	</div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        /*home: '代理的页面'*/
       
				input: '',
				tableData: [],
				teamName:'',
				teamId:''
			}
      
    },
    components: {}
  }
</script>

<style>
  .home {
    margin-top: 10%;
    font-size: 2.4em;
    font-weight: bold;
  }
</style>
