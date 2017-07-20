import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';

// 全局注册
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
