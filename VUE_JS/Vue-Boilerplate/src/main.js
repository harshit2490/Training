import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { vuetify } from './plugins';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');