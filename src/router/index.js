import { createRouter, createWebHistory } from "vue-router"
/* Pages */
import Home from '/src/pages/Home.vue'
import DashboardHome from '/src/pages/DashboardHome.vue'
import DashboardPages from '/src/pages/DashboardPages.vue'
import DashboardMenu from '/src/pages/DashboardMenu.vue'
import DashboardCompanies from '/src/pages/DashboardCompanies.vue'
import DashboardProducts from '/src/pages/DashboardProducts.vue'
import DashboardCertificates from '/src/pages/DashboardCertificates.vue'
import DashboardUsers from '/src/pages/DashboardUsers.vue'
import DashboardLogin from '/src/pages/DashboardLogin.vue'
/* Layouts */
import uiTemplate from '/src/layouts/Frontend.vue'
import dashboardTemplate from '/src/layouts/Dashboard.vue'
import Fullscreen from '/src/layouts/Fullscreen.vue'
/* Utils */
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
        redirect: '/dashboard/home',
        components: {
            template: dashboardTemplate
        },
        children: [
            {
                path: 'home',
                components: {
                    content: DashboardHome
                },
                meta: {
                    title: 'Dashboard | NutritionSearch'
                },
            },
            {
                path: 'pages',
                components: {
                    content: DashboardPages
                },
                meta: {
                    title: 'Pages | NutritionSearch'
                }
            },
            {
                path: 'menu',
                components: {
                    content: DashboardMenu
                },
                meta: {
                    title: 'Menu | NutritionSearch'
                }
            },
            {
                path: 'companies',
                components: {
                    content: DashboardCompanies
                },
                meta: {
                    title: 'Companies | NutritionSearch'
                }
            },
            {
                path: 'products',
                components: {
                    content: DashboardProducts
                },
                meta: {
                    title: 'Products | NutritionSearch'
                }
            },
            {
                path: 'Certificates',
                components: {
                    content: DashboardCertificates
                },
                meta: {
                    title: 'Certificates | NutritionSearch'
                }
            },
            {
                path: 'users',
                components: {
                    content: DashboardUsers
                },
                meta: {
                    title: 'Users | NutritionSearch'
                }
            }
        ]
    },
    {
        path: '/login',
        components: {
            template: Fullscreen
        },
        meta: {
            title: 'Login | NutritionSearch'
        },
        children: [
            {
                path: '',
                component: DashboardLogin
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