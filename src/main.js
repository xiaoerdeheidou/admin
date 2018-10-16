/**
 * Created by qi on 18/5/3
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.scss'
// import './assets/http.js'
Vue.use(ElementUI)

Vue.config.productionTip = false
// Vue.http.options.emulateJSON = true
// 路由跳转另一种方式
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}
// http request 请求拦截器，有token值则配置上token值
// 超时时间
axios.defaults.timeout = 5000
axios.defaults.headers.post["Content-type"]="application/json";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.interceptors.request.use(
  config => {
    //config.withCredentials = true // 需要跨域打开此配置
    return config;
  },
  err => {
    return Promise.reject(err);
  });
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      if (error.response.error === 'invalid_token') {
        router.replace({
          path: '/Login',
          query: {redirect: router.currentRoute.fullPath}// 登录成功后跳入浏览的当前页面
        })
      }
    }
    return Promise.reject(error.response.data) 
  }
)
// 原型改写axios
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  template: '<App/>',
  components: { App }
})
