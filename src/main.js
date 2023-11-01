import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
