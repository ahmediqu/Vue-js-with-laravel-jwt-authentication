import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import Vuex from 'vuex';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/popper.min';
import {auth} from './store/index';
import {routes} from './routes/main';

// Components
Vue.component('navbar-component', require('./components/partials/Navbar').default);
Vue.component('loader', require('./components/partials/Loader').default);

Vue.prototype.$http = Axios;

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.use(Vuex);
const store = new Vuex.Store(auth);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
