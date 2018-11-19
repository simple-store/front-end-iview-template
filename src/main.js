import Vue from 'vue';
import i18n from './i18n';
import App from './common/App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './common/css/base.less';
import './plugins/iview';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
