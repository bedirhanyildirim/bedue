import { createRouter, createWebHistory } from "vue-router"
import Store from "../store"
/* Pages */
import Home from '/src/pages/Frontend/Home.vue'
import About from '/src/pages/Frontend/About.vue'
import Quality from '/src/pages/Frontend/Quality.vue'
import ProductTypes from '/src/pages/Frontend/ProductTypes.vue'
import Reports from '/src/pages/Frontend/Reports.vue'
import Certificates from '/src/pages/Frontend/Certificates.vue'
import GFOC from '/src/pages/Frontend/GFOC.vue'
import Contact from '/src/pages/Frontend/Contact.vue'
import FAQ from '/src/pages/Frontend/FAQ.vue'
import DashboardHome from '/src/pages/Dashboard/Home/Home.vue'
import DashboardPages from '/src/pages/DashboardPages.vue'
import DashboardMenu from '/src/pages/DashboardMenu.vue'
import DashboardCompanies from '/src/pages/Dashboard/Companies/Companies.vue'
import DashboardProducts from '/src/pages/Dashboard/Products/Products.vue'
import DashboardCertificates from '/src/pages/Dashboard/Certificates/Certificates.vue'
import DashboardUsers from '/src/pages/DashboardUsers.vue'
import DashboardLogin from '/src/pages/DashboardLogin.vue'
import DashboardSignup from '/src/pages/DashboardSignup.vue'
import NewCompany from '/src/pages/Dashboard/Companies/NewCompany.vue'
import NewProduct from '/src/pages/Dashboard/Products/NewProduct.vue'
import NewCertificate from '/src/pages/Dashboard/Certificates/NewCertificate.vue'
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
                    title: 'Home | NutritionSearch',
                    requiresAuth: false
                },
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        components: {
            template: uiTemplate
        },
        children: [
            {
                path: '',
                component: About,
                meta: {
                    title: 'About | NutritionSearch',
                    requiresAuth: false
                },
            }
        ]
    },
    {
        path: '/quality',
        name: 'Quality',
        components: {
            template: uiTemplate
        },
        children: [
            {
                path: '',
                component: Quality,
                meta: {
                    title: 'Quality | NutritionSearch',
                    requiresAuth: false
                },
            },
            {
                path:'types',
                component: ProductTypes,
                meta: {
                    title: 'Types',
                    requiresAuth: false
                }
            }
        ]
    },
    {
        path: '/reports',
        name: 'Reports',
        components: {
            template: uiTemplate
        },
        children: [
            {
                path: '',
                component: Reports,
                meta: {
                    title: 'Reports | NutritionSearch',
                    requiresAuth: false
                },
            }
        ]
    },
    {
        path: '/certificates',
        name: 'Certificates',
        components: {
            template: uiTemplate
        },
        children: [
            {
                path: '',
                component: Certificates,
                meta: {
                    title: 'Certificates | NutritionSearch',
                    requiresAuth: false
                },
            },
            {
                path: 'GFOC',
                component: GFOC,
                meta: {
                    title: 'GFOC | NutritionSearch',
                    requiresAuth: false
                }
            }
        ]
    },
    {
        path: '/contact',
        name: 'Contact',
        components: {
            template: uiTemplate
        },
        children: [
            {
                path: '',
                component: Contact,
                meta: {
                    title: 'Contact | NutritionSearch',
                    requiresAuth: false
                },
            }
        ]
    },
    {
        path: '/faq',
        name: 'FAQ',
        components: {
            template: uiTemplate
        },
        children: [
            {
                path: '',
                component: FAQ,
                meta: {
                    title: 'F.A.Q. | NutritionSearch',
                    requiresAuth: false
                },
            }
        ]
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
                path: 'companies/new',
                components: {
                    content: NewCompany
                },
                meta: {
                    title: 'New Company | NutritionSearch',
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
                path: 'products/new',
                components: {
                    content: NewProduct
                },
                meta: {
                    title: 'New Product | NutritionSearch',
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
                path:'certificates/new',
                components: {
                    content: NewCertificate
                },
                meta: {
                    title: 'New Certificate | NutritionSearch',
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