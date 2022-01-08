import Hero from './components/marvel/Hero'
import Home from './components/Home'

export const routes = [
    {
        name:'home.component',
        path: '/',
        component: Home
    },
    {
        name:'hero.component',
        path:'/pokemon',
        component:Hero
    }
]
