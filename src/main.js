import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePageTransition from "vue-page-transition";

Vue.config.productionTip = false

Vue.use(VuePageTransition);

Vue.directive('sticky', {
        bind(el, binding, vnode) {
                el.style.position = 'sticky';
                el.style.top = '0px';
        }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
