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
import vueRoter from 'vue-router'
import {routes} from './Route'
vue.use(vueRoter)
vue.use(vueAxios,axios)

const route = new VueRouter({
    mode:'history',
    routes:routes

})

const app = new vue({
    el:'#app',
    router:route,
    render: h => h(App)
})

