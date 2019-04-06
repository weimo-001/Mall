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
import Signup from './pages/Signup.vue';
import Login from './pages/Login.vue';
import GlobalNav from "./components/GlobalNav.vue";
import RegularNav from "./components/RegularNav.vue";
import GlobalFooter from "./components/GlobalFooter.vue";

Vue.use(VueRouter);
Vue.use(ElementUI);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        GlobalNav,
        RegularNav,
        default: Home,
        footer: GlobalFooter
      }
    }, {
      path: '/product/:id',
      components: {
        GlobalNav,
        default: ProductView,
        footer: GlobalFooter
      }
    }, {
      path: '/search',
      components: {
        GlobalNav,
        RegularNav,
        default: Search,
        footer: GlobalFooter
      }
    }, {
      path: '/login',
      components: {
        GlobalNav,
        default: Login,
        footer: GlobalFooter
      },
    }, {
      path: '/signup',
      components: {
        GlobalNav,
        default: Signup,
        footer: GlobalFooter
      },
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
