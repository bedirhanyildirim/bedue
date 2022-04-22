import { createRouter, createWebHistory } from "vue-router"
import Home from '/src/pages/Home.vue'
import Dashboard from '/src/pages/Dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin',
        name: 'Dashboard',
        component: Dashboard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router