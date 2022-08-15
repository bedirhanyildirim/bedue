import { createRouter, createWebHistory } from "vue-router"
import Store from "../store"
/* Pages */
import Home from '/src/pages/Frontend/Home.vue'
import About from '/src/pages/Frontend/About.vue'
import Strategy from '/src/pages/Frontend/Strategy.vue'
import Mission from '/src/pages/Frontend/Mission.vue'
import Values from '/src/pages/Frontend/Values.vue'
import Quality from '/src/pages/Frontend/Quality.vue'
import ProductTypes from '/src/pages/Frontend/ProductTypes.vue'
import Reports from '/src/pages/Frontend/Reports.vue'
import Certificates from '/src/pages/Frontend/Certificates.vue'
import GFOC from '/src/pages/Frontend/GFOC.vue'
import GKOC from '/src/pages/Frontend/GKOC.vue'
import Contact from '/src/pages/Frontend/Contact.vue'
import FAQ from '/src/pages/Frontend/FAQ.vue'
import CompanyDetail from '/src/pages/Frontend/CompanyDetail.vue'
import DashboardHome from '/src/pages/Dashboard/Home/Home.vue'
import DashboardPages from '/src/pages/Dashboard/Pages/Pages.vue'
import DashboardMenu from '/src/pages/Dashboard/Menu/Menu.vue'
import DashboardCompanies from '/src/pages/Dashboard/Companies/Companies.vue'
import DashboardProducts from '/src/pages/Dashboard/Products/Products.vue'
import DashboardCertificates from '/src/pages/Dashboard/Certificates/Certificates.vue'
import DashboardUsers from '/src/pages/Dashboard/Auth/Users.vue'
import DashboardLogin from '/src/pages/Dashboard/Auth/Login.vue'
import DashboardSignup from '/src/pages/Dashboard/Auth/Signup.vue'
import NewCompany from '/src/pages/Dashboard/Companies/NewCompany.vue'
import EditCompany from '/src/pages/Dashboard/Companies/EditCompany.vue'
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
            },
            {
                path: 'strategy',
                component: Strategy,
                meta: {
                    title: 'Strategy | NutritionSearch',
                    requiresAuth: false
                }
            },
            {
                path: 'mission',
                component: Mission,
                meta: {
                    title: 'Mission | NutritionSearch',
                    requiresAuth: false
                }
            },
            {
                path: 'values',
                component: Values,
                meta: {
                    title: 'Values | NutritionSearch',
                    requiresAuth: false
                }
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
            },
            {
                path: 'certificates',
                component: Certificates,
                meta: {
                    title: 'Certificates | NutritionSearch',
                    requiresAuth: false
                }
            },
            {
                path: 'certificates/GFOC',
                component: GFOC,
                meta: {
                    title: 'GFOC | NutritionSearch',
                    requiresAuth: false
                }
            },
            {
                path: 'certificates/GKOC',
                component: GKOC,
                meta: {
                    title: 'GKOC | NutritionSearch',
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
    {
        path: '/company',
        name: 'CompanyDetail',
        components: {
            template: uiTemplate
        },
        children: [
            {
                path: ':id',
                component: CompanyDetail,
                meta: {
                    title: 'Company Detail | NutritionSearch',
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
                path: 'companies/edit/:id',
                components: {
                    content: EditCompany
                },
                meta: {
                    title: 'Edit Company | NutritionSearch',
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
    mode: 'history',
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