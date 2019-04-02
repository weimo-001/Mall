import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.config.productionTip = false

//import components
import Home from './page/Home.vue';
Vue.use(VueRouter);
Vue.use(ElementUI);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
