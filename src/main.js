// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias. fffffff
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import store from '@/store'

import './assets/css/common.css'
import './assets/js/jquery-1.9.1.min.js'
import './assets/js/common.js'
import './assets/font/icon.css'
import '../static/font/style.css'
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
// 引入地图样式
import './assets/js/index.js';
import './assets/js/mapv.js';
import globalvariable from './router/global_variable.js'
Vue.prototype.baseURL = globalvariable

import Axios from 'axios'
Vue.prototype.$ajax = Axios;
import routerConfig from './router'
Vue.use(Router);
const router = new Router(routerConfig);
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.isLogin) {
      next()
    } else {
      next({ path: '/Login' })
    }
  } else {
    next()
  }
})
//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
var bus = new Vue();
window.bus = bus;


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
//广播一个全局事件
window.onresize = function () {
  window.bus.$emit("resize");
}
