import { createRouter, createWebHistory } from "vue-router"
import Store from "../store"
/* Pages */
import Home from '/src/pages/Home.vue'
import DashboardHome from '/src/pages/DashboardHome.vue'
import DashboardPages from '/src/pages/DashboardPages.vue'
import DashboardMenu from '/src/pages/DashboardMenu.vue'
import DashboardCompanies from '/src/pages/Dashboard/Companies/Companies.vue'
import DashboardProducts from '/src/pages/DashboardProducts.vue'
import DashboardCertificates from '/src/pages/DashboardCertificates.vue'
import DashboardUsers from '/src/pages/DashboardUsers.vue'
import DashboardLogin from '/src/pages/DashboardLogin.vue'
import DashboardSignup from '/src/pages/DashboardSignup.vue'
/* Layouts */
import uiTemplate from '/src/layouts/Frontend.vue'
import dashboardTemplate from '/src/layouts/Dashboard.vue'
import Fullscreen from '/src/layouts/Fullscreen.vue'

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
                    title: 'Welcome',
                    requiresAuth: false
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
                    title: 'Dashboard | NutritionSearch',
                    requiresAuth: true
                },
            },
            {
                path: 'pages',
                components: {
                    content: DashboardPages
                },
                meta: {
                    title: 'Pages | NutritionSearch',
                    requiresAuth: true
                }
            },
            {
                path: 'menu',
                components: {
                    content: DashboardMenu
                },
                meta: {
                    title: 'Menu | NutritionSearch',
                    requiresAuth: true
                }
            },
            {
                path: 'companies',
                components: {
                    content: DashboardCompanies
                },
                meta: {
                    title: 'Companies | NutritionSearch',
                    requiresAuth: true
                }
            },
            {
                path: 'products',
                components: {
                    content: DashboardProducts
                },
                meta: {
                    title: 'Products | NutritionSearch',
                    requiresAuth: true
                }
            },
            {
                path: 'certificates',
                components: {
                    content: DashboardCertificates
                },
                meta: {
                    title: 'Certificates | NutritionSearch',
                    requiresAuth: true
                }
            },
            {
                path: 'users',
                components: {
                    content: DashboardUsers
                },
                meta: {
                    title: 'Users | NutritionSearch',
                    requiresAuth: true
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
            title: 'Login | NutritionSearch',
            requiresAuth: false
        },
        children: [
            {
                path: '',
                component: DashboardLogin
            }
        ]
    },
    {
        path: '/signup',
        components: {
            template: Fullscreen
        },
        meta: {
            title: 'Signup | NutritionSearch',
            requiresAuth: false
        },
        children: [
            {
                path: '',
                component: DashboardSignup
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
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!Store.getters.isLogedIn) {
          next('/login')
        } else {
          next()
        }
      } else {
        next()
      }
})

export default router