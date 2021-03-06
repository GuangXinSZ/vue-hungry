// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' 
import router from './router'
//导入fastclick
import fastClick from 'fastclick'
import axios from 'axios'
//使用vuex
import store from './store'
//使用elementui
import ElementUI from 'element-ui'

//导入mint-ui
import Mint from 'mint-ui'
//引入css
import 'element-ui/lib/theme-chalk/index.css'
//css
import 'mint-ui/lib/style.css'

import 'styles/reset.css'

Vue.config.productionTip = false
//使用全局添加在原型上面
Vue.prototype.$http = axios
//引用fastclick
fastClick.attach(document.body)
//使用element ui
Vue.use(ElementUI)
//使用mint ui
Vue.use(Mint)
/* eslint-disable no-new */
//登录拦截
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
