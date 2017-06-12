import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "http://localhost:8080";

Vue.filter("currency", (value) => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  routes: routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {x: 0, y: 0};
  }
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
