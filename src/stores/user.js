import { defineStore } from 'pinia'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import router from '@/router'
import { apiAuth } from '../plugins/axios'

export const useUserStore = defineStore({
  id: 'user',
  state() {
    return {
      token: '',
      account: '',
      email: '',
      nickname: '',
      avatar: '',
      cart: 0,
      likes: 0,
      role: 0
    }
  },
  getters: {
    isLogin() {
      return this.token.length !== 0
    },
    isAdmin() {
      return this.role === 1
    }
  },
  actions: {
    async login(form) {
      try {
        const { data } = await api.post('/users/login', form)
        this.token = data.result.token
        this.account = data.result.account
        this.email = data.result.email
        this.nickname = data.result.nickname
        this.avatar = data.result.avatar
        this.cart = data.result.cart
        this.likes = data.result.likes
        this.role = data.result.role
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
        })
      }
    },
    async logout() {
      try {
        await apiAuth.delete('/users/logout')
        router.push('/')
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登出成功'
        })
      } catch (_) {
      }
      this.token = ''
      this.account = ''
      this.email = ''
      this.nickname = ''
      this.avatar = ''
      this.cart = 0
      this.likes = 0
      this.role = 0
    }
  }
})