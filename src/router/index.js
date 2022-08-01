import { createRouter, createWebHashHistory } from 'vue-router'
import FrontNavbar from '@/views/front/FrontNavbar.vue'
import FrontHomeView from '@/views/front/HomeView.vue'
import NotFoundView from '@/views/NotFound.vue'
import { useUserStore } from '@/stores/user'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontNavbar,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontHomeView,
          meta: {
            title: '吳李香',
            login: false,
            admin: false
          }
        },
        {
          path: 'brand',
          name: 'brand',
          component: () => import('@/views/front/BrandView.vue'),
          meta: {
            title: '吳李香 | 品牌特色',
            login: false,
            admin: false
          }
        },
        {
          path: 'why',
          name: 'why',
          component: () => import('@/views/front/WhyView.vue'),
          meta: {
            title: '吳李香 | WHY 夏雪芒果',
            login: false,
            admin: false
          }
        },
        {
          path: 'news',
          name: 'news',
          component: () => import('@/views/front/NewsView.vue'),
          meta: {
            title: '吳李香 | 最新消息',
            login: false,
            admin: false
          }
        },
        {
          path: 'news/:id',
          name: 'newscontent',
          component: () => import('@/views/front/NewscontentView.vue'),
          meta: {
            title: '吳李香 | 最新消息',
            login: false,
            admin: false
          }
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/front/ContactView.vue'),
          meta: {
            title: '吳李香 | 聯絡我們',
            login: false,
            admin: false
          }
        },
        {
          path: 'likes',
          name: 'likes',
          component: () => import('@/views/front/LikesView.vue'),
          meta: {
            title: '吳李香 | 收藏',
            login: true,
            admin: false
          }
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('@/views/front/ProductView.vue'),
          meta: {
            title: '吳李香 | 商品',
            login: false,
            admin: false
          }
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/front/CartView.vue'),
          meta: {
            title: '吳李香 | 購物車',
            login: true,
            admin: false
          }
        },
        {
          path: 'order/:id',
          name: 'payinfo',
          component: () => import('@/views/front/PayinfoView.vue'),
          meta: {
            title: '吳李香 | 付款資訊',
            login: true,
            admin: false
          }
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: () => import('@/views/front/UserinfoView.vue'),
          meta: {
            title: '吳李香 | 個人資料',
            login: true,
            admin: false
          }
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('@/views/front/OrderView.vue'),
          meta: {
            title: '吳李香 | 訂購紀錄',
            login: true,
            admin: false
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/front/LoginView.vue'),
          meta: {
            title: '吳李香 | 登入',
            login: false,
            admin: false
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/front/RegisterView.vue'),
          meta: {
            title: '吳李香 | 註冊',
            login: false,
            admin: false
          }
        },
      ]
    },
    {
      path: '/admin',
      component: () => import('@/views/admin/AdminNavbar.vue'),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: () => import('@/views/admin/HomeView.vue'),
          meta: {
            title: '吳李香 | 後臺管理 | 首頁',
            login: true,
            admin: true
          }
        },
        {
          path: 'users',
          name: 'admin-users',
          component: () => import('@/views/admin/UsersView.vue'),
          meta: {
            title: '吳李香 | 後臺管理 | 會員管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'orders',
          name: 'admin-orders',
          component: () => import('@/views/admin/OrdersView.vue'),
          meta: {
            title: '吳李香 | 後臺管理 | 訂單管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'products',
          name: 'admin-products',
          component: () => import('@/views/admin/ProductsView.vue'),
          meta: {
            title: '吳李香 | 後臺管理 | 商品管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'news',
          name: 'admin-news',
          component: () => import('@/views/admin/NewsView.vue'),
          meta: {
            title: '吳李香 | 後臺管理 | 最新消息管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'feedback',
          name: 'admin-feedback',
          component: () => import('@/views/admin/FeedbackView.vue'),
          meta: {
            title: '吳李香 | 後臺管理 | 回饋訊息管理',
            login: true,
            admin: true
          }
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: '購物網 | 404',
        login: false,
        admin: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()

  if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
