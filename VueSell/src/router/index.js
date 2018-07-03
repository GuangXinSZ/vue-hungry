import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShopIndex from 'temp/shopindex/ListIndex'
import ShopChar from 'temp/shopchants/CharIndex'
import ShopMain from 'temp/shopmain/MainIndex'
import Login from 'temp/Login/login'
import VueRouter from 'vue-router'

Vue.use(Router)

const router = new VueRouter({
  Router,
  linkActiveClass: 'active'
});

export default new Router({
  routes: [
     {
       path: '/',
       redirect: '/login'
     },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/index',
          name: 'ShopIndex',
          component: ShopIndex
        },
        {
          path: '/char',
          name: 'ShopChar',
          component: ShopChar
        },
        {
          path: '/main',
          name: 'ShopMain',
          component: ShopMain
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '',
        requireAuth: true,
      },
    }
  ]
})

