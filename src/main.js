import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

//css
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './style/global.scss';
import './style/changeElementUI.scss';
// Vue.config.productionTip = false

//import components
import Home from './pages/Home.vue';
import ProductView from "./pages/ProductView.vue";
import Search from './pages/Search.vue';


Vue.use(VueRouter);
Vue.use(ElementUI);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/product/:id',
      component: ProductView
    },{
      path:'/search',
      component:Search
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
