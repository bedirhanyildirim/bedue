import { createRouter, createWebHistory } from "vue-router"
import Home from '/src/pages/Home.vue'
import Dashboard from '/src/pages/Dashboard.vue'
import uiTemplate from '/src/layouts/Frontend.vue'
import dashboardTemplate from '/src/layouts/Dashboard.vue'
import { isLoggedIn } from '/src/utils/helper.js'

const routes = [
    {
        path: '/',
        name: 'Home',
        components: {
            template: uiTemplate
        },
        children: [
            {
                path: '',
                component: Home,
                meta: {
                    title: 'Welcome'
                },
            }
        ]
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        components: {
            template: dashboardTemplate
        },
        children: [
            {
                path: 'home',
                components: {
                    content: Dashboard
                },
                meta: {
                    title: 'Dashboard | NutritionSearch'
                },
            }
        ]
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