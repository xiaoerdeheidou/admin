<template>
  <div>
    <h2 class="text-center">{{title}}</h2>
    <ul class="text-center spacing" style="padding: 0">
      <li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
    </ul>
    <span class="consume_back" @click="back()">&lt;&nbsp;返回</span><span>活动详情</span>
    <span class="consume_back" @click="back1()">&lt;&nbsp;返回</span><span>活动详情</span>
    <router-view></router-view>
  </div>
</template>

<script>
import Host from '@/assets/Host.js'
export default {
  name: 'page01',
  data () {
    return {
      title: '这里是第一个页面',
      links: [
        {
          text: '22',
          route: '/page01/page01-a'
        },
        {
          text: '333',
          route: '/page01/page01-b'
        }
      ]
    }
  },
  mounted () {
    console.log( localStorage.getItem("currentUser"))
  },
  methods:{
    back(){
      this.$router.push('/home')
    },
    back1(){
      window.location.href = Host;
    }
  }
}
</script>
