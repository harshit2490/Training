import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { ValidationProvider } from 'vee-validate';
import router from './router'
// import VueRouter from "vue-router";
// import Login from "./components/Login";
// import Register from "./components/Register";

// For 'vee-validation'
Vue.component('ValidationProvider', ValidationProvider);

// // For 'vue-router'
// Vue.use(VueRouter);
// const routes = [
//   { path: "/login", component: Login },
//   { path: "/register", component: Register },
// ];
// const router = new VueRouter({
//   routes,
// });

// Vue.config.productionTip = false
Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
