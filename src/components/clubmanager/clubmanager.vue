<template>
  <div class="batch">
    <v-header></v-header>
    <div class="pro_mange">
      <el-table :data="tableData" border style="width: 100%;" height='400' >
        <el-table-column
          prop="playerHeadurl"
          label="头像"
          width="74">
           <template slot-scope="scope">
              <img v-if="scope.row.playerHeadurl!=''" :src="scope.row.playerHeadurl" alt="" style="width: 50px;height: 50px">
              <img v-else src="https://www.baidu.com/img/bd_logo1.png" alt="" style="width: 50px;height: 50px">
          </template>
        </el-table-column>
        <el-table-column
          prop="playerNick"
          label="昵称"
          width="74">
        </el-table-column>
        <el-table-column
          prop="playerId"
          label="玩家ID">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" class="yellowbut c_m" @click.native.prevent="deleteRow(scope.$index,tableData)">删&nbsp;&nbsp;除</el-button>
          </template>
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
        tableData: [{"id":"339f12b565514ecd96efba362de06614","isNewRecord":false,"createDate":"2018-06-04 11:35:19","clubId":"550336","playerId":"606","playerHeadurl":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqNeoF9JmdR2MLKURY6aGrvFI7clDziaZ83F6qxRNhKoaEV8K45QPaR2du7icMwuhDxRhsOBTmPPLoQ/132","playerNick":"老友江西麻...","isRoomer":"1","status":"1","sheng":"150000","showFlag":"<font style='color:blue;font-size:13px;'>房主</font>"},
        {"id":"20660ad3c4ec42c4b34e6493b5cc3232","isNewRecord":false,"createDate":"2018-06-04 14:29:24","clubId":"550336","playerId":"581","playerHeadurl":"","playerNick":"","isRoomer":"0","status":"1","sheng":"150000","showFlag":"<font style='color:green;font-size:13px;'>活跃</font>"},
        {"id":"616800f75ff24752a4ea3f2e5914c94c","isNewRecord":false,"createDate":"2018-06-04 14:29:30","clubId":"550336","playerId":"406","playerHeadurl":"","playerNick":"","isRoomer":"0","status":"1","sheng":"150000","showFlag":"<font style='color:green;font-size:13px;'>活跃</font>"},
        {"id":"62f2bf829daf4c389a6c5facfcfdd8ae","isNewRecord":false,"createDate":"2018-06-04 11:35:47","clubId":"550336","playerId":"798","playerHeadurl":"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLpeS1CbNkusO8wfiaznySpOrCjxSKCaicwEqQqaR8vJt8aXprg2RRmnjr4qIhIEibXs06SPoAwu3Dyg/132","playerNick":"少帅","isRoomer":"0","status":"1","sheng":"150000","showFlag":"<font style='color:green;font-size:13px;'>活跃</font>"},
        {"id":"e25b8696e2a047818b10b3ba9789bb88","isNewRecord":false,"createDate":"2018-06-19 17:36:21","clubId":"550336","playerId":"679","playerHeadurl":"http://thirdwx.qlogo.cn/mmopen/vi_32/z9AUwkzqhAB9x84OoGkUOkicM3J1mA3NoTWcFM1mcWPejXHuQliaib9VGgAcr8RkYYkZQjrSMK4hstnhmicu5hiaSvA/132","playerNick":"美男子","isRoomer":"0","status":"1","sheng":"150000","showFlag":"<font style='color:green;font-size:13px;'>活跃</font>"},
        {"id":"f4dc15d472634b8d8b22b38f12296411","isNewRecord":false,"createDate":"2018-06-04 11:36:32","clubId":"550336","playerId":"564","playerHeadurl":"","playerNick":"游客:68...","isRoomer":"0","status":"1","sheng":"150000","showFlag":"<font style='color:green;font-size:13px;'>活跃</font>"}
       ]
      };
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    components: {
      'v-header': conHeader,
      'v-bottom': barbotom
    },
    mounted() {
    }
  }

</script>

<style lang="scss" scoped>
.el-button{line-height: 20px;}

</style>
