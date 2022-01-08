require('./bootstrap');

//import vue
import vue from 'vue'
window.vue = vue

//component app
import App from './components/App'

//import axios
import axios from "axios";
import vueAxios from 'vue-axios'

//import router
import vueRouter from 'vue-router'
import {routes} from './Route'
vue.use(vueRouter)
vue.use(vueAxios,axios)

const route = new vueRouter({
    mode:'history',
    routes:routes

})

// sliderbar configuration
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);

//importacion y configuracion de componente
import Hero from './components/marvel/Hero.vue';
vue.component('Hero' , Hero)

//sweetalert import
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

vue.use(VueSweetalert2)

const app = new vue({
    el:'#app',
    router:route,
    render: h => h(App)
})

