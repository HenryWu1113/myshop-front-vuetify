import { createRouter, createWebHashHistory } from 'vue-router'
import FrontNavbar from '@/views/front/FrontNavbar.vue'
import FrontHomeView from '@/views/front/HomeView.vue'
import NotFoundView from '@/views/NotFound.vue'


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
            title: '吳李香'
          }
        },
        {
          path: 'brand',
          name: 'brand',
          component: () => import('@/views/front/BrandView.vue'),
          meta: {
            title: '吳李香 | 品牌特色'
          }
        },
        {
          path: 'why',
          name: 'why',
          component: () => import('@/views/front/WhyView.vue'),
          meta: {
            title: '吳李香 | WHY 夏雪芒果'
          }
        },
        {
          path: 'news',
          name: 'news',
          component: () => import('@/views/front/NewsView.vue'),
          meta: {
            title: '吳李香 | 最新消息'
          }
        },
        {
          path: 'news/:id',
          name: 'newscontent',
          component: () => import('@/views/front/NewscontentView.vue'),
          meta: {
            title: '吳李香 | 最新消息'
          }
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/front/ContactView.vue'),
          meta: {
            title: '吳李香 | 聯絡我們'
          }
        },
        {
          path: 'likes',
          name: 'likes',
          component: () => import('@/views/front/LikesView.vue'),
          meta: {
            title: '吳李香 | 收藏'
          }
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('@/views/front/ProductView.vue'),
          meta: {
            title: '吳李香 | 商品'
          }
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/front/CartView.vue'),
          meta: {
            title: '吳李香 | 購物車'
          }
        },
        {
          path: 'cart/:id',
          name: 'payinfo',
          component: () => import('@/views/front/PayinfoView.vue'),
          meta: {
            title: '吳李香 | 付款資訊'
          }
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: () => import('@/views/front/UserinfoView.vue'),
          meta: {
            title: '吳李香 | 個人資料'
          }
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('@/views/front/OrderView.vue'),
          meta: {
            title: '吳李香 | 訂購紀錄'
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/front/LoginView.vue'),
          meta: {
            title: '吳李香 | 登入'
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/front/RegisterView.vue'),
          meta: {
            title: '吳李香 | 註冊'
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
            title: '吳李香 | 後臺管理 | 首頁'
          }
        },
        {
          path: 'users',
          name: 'admin-users',
          component: () => import('@/views/admin/UsersView.vue'),
          meta: {
            title: '吳李香 | 後臺管理 | 會員管理'
          }
        },
        {
          path: 'orders',
          name: 'admin-orders',
          component: () => import('@/views/admin/OrdersView.vue'),
          meta: {
            title: '吳李香 | 後臺管理 | 訂單管理'
          }
        },
        {
          path: 'products',
          name: 'admin-products',
          component: () => import('@/views/admin/ProductsView.vue'),
          meta: {
            title: '吳李香 | 後臺管理 | 商品管理'
          }
        },
        {
          path: 'news',
          name: 'admin-news',
          component: () => import('@/views/admin/NewsView.vue'),
          meta: {
            title: '吳李香 | 後臺管理 | 最新消息管理'
          }
        },
        {
          path: 'feedback',
          name: 'admin-feedback',
          component: () => import('@/views/admin/FeedbackView.vue'),
          meta: {
            title: '吳李香 | 後臺管理 | 回饋訊息管理'
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

export default router
