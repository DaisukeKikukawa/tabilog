import Vue from "vue"
import "@/firebase"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// import * as VueGoogleMaps from "vue2-google-maps"; //GoogleMapAPI

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

/* GoogleMap機能 
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCgHlOo-1ywOyvD5AIjjmuSQg5RFtzTlXw",
    libraries: "places"
  }
}); */
