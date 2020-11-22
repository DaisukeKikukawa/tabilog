import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./firebase.js";
import './assets/ css/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV,
  faCoffee,
  faAd,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV,
  faCoffee,
  faAd,
  faBars,
)



Vue.component('fa', FontAwesomeIcon)



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
