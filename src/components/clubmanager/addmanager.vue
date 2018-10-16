<template>
  <div class="batch">
    <v-header></v-header>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="玩家ID:">
        <el-input v-model="form.wetnum"></el-input>
      </el-form-item>
    </el-form>
    <div class="pro_mange">
      <el-table :data="tableData" border style="width: 100%;" height='350' >
        <el-table-column
          prop="xnum"
          label="头像"
          width="90">
        </el-table-column>
        <el-table-column
          prop="xname"
          label="昵称"
          width="90">
        </el-table-column>
        <el-table-column
          prop="id"
          label="玩家ID">
        </el-table-column>
        <el-table-column
          prop="card"
          label="操作">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
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
        form: {
          wetnum: ''
        },
        tableData: []
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
