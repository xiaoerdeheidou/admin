/**
 * Created by qi on 18/5/3
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import home from '@/components/home'// 首页
import playerCharge from '@/components/playerCharge/playerCharge'// 玩家充卡页面
import addpromoter from '@/components/promoter/addpromoter'// 添加推广员
import promoterManger from '@/components/promoter/promoterManger'// 管理推广员
import promoterCharge from '@/components/promoter/promoterCharge'// 推广员充卡
import friendclub from '@/components/friendClub/friendclub'// 亲友圈
import returnRard from '@/components/returnRard/returnRard'// 返卡详情
import modifypassword from '@/components/personalCenter/modifypassword'// 修改密码
import perinformation from '@/components/personalCenter/perinformation'// 个人信息
import notice from '@/components/notice/notice'// 推广员公告
import clubmanager from '@/components/clubmanager/clubmanager'// 成员管理
import addmanager from '@/components/clubmanager/addmanager'// 成员添加
import levelmanger from '@/components/clubmanager/levelmanger'// 离会成员
import membership from '@/components/clubmanager/membership'// 入会申请
import friendaccount from '@/components/friendaccount/friendaccount'// 亲友圈账户转入转出
import page01 from '@/components/page01'
import page02 from '@/components/page02'
Vue.use(VueRouter)
const routes = [
  { 
    path: '/',
    redirect: '/Login'
  }, // 默认就跳转此页面
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: { requiresAuth: true }
  },
  {
    path: '/playerCharge',
    name: 'playerCharge',
    component: playerCharge,
    meta: { requiresAuth: true }
  },
  {
    path: '/addpromoter',
    name: 'addpromoter',
    component: addpromoter,
    meta: { requiresAuth: true }
  },
  {
    path: '/friendclub',
    name: 'friendclub',
    component: friendclub,
    meta: { requiresAuth: true }
  },
  {
    path: '/promoterCharge',
    name: 'promoterCharge',
    component: promoterCharge,
    meta: { requiresAuth: true }
  },
  {
    path: '/returnRard',
    name: 'returnRard',
    component: returnRard,
    meta: { requiresAuth: true }
  },
  {
    path: '/modifypassword',
    name: 'modifypassword',
    component: modifypassword,
    meta: { requiresAuth: true }
  },
  {
    path: '/perinformation',
    name: 'perinformation',
    component: perinformation,
    meta: { requiresAuth: true }
  },
  {
    path: '/clubmanager',
    name: 'clubmanager',
    component: clubmanager,
    meta: { requiresAuth: true }
  },
  {
    path: '/addmanager',
    name: 'addmanager',
    component: addmanager,
    meta: { requiresAuth: true }
  },
  {
    path: '/levelmanger',
    name: 'levelmanger',
    component: levelmanger,
    meta: { requiresAuth: true }
  },
  {
    path: '/membership',
    name: 'membership',
    component: membership,
    meta: { requiresAuth: true }
  },
  {
    path: '/friendaccount',
    name: 'friendaccount',
    component: friendaccount,
    meta: { requiresAuth: true }
  },
  {
    path: '/notice',
    name: 'notice',
    component: notice
  },
  {
    path: '/page01',
    name: 'page01',
    component: page01
  },
  {
    path: '/promoterManger',
    name: 'promoterManger',
    component: promoterManger
  },
  {
    path: '/page02',
    name: 'page02',
    component: page02
  }
]
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/Login') { // to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子如果即将进入登录路由，则直接放行
    window.localStorage.removeItem('token')
    next()
  } else {// 进入的不是登录路由
    if (to.meta.requiresAuth && !localStorage.getItem('token')) { // 判断是否登录
      // 下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由
      next({
        path: '/Login',
        query: {redirect: to.fullPath}
      })
    } else { // 如果不需要登录验证，或者已经登录成功，则直接放行
      next() 
    }
  }
})
export default router
