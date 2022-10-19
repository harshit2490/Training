import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import About from "./components/About";
import Settings from './components/Settings'

Vue.use(VueRouter);
const routes = [
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/settings", component: Settings },
];
const router = new VueRouter({
  routes,
});
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
