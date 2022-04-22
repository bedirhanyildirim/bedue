import { createRouter, createWebHistory } from "vue-router"
import Home from '/src/pages/Home.vue'
import Dashboard from '/src/pages/Dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Welcome'
        }
    },
    {
        path: '/admin',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            title: 'Dashboard'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeResolve((to, from, next) => {
    next()
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title  
    next()
})

export default router