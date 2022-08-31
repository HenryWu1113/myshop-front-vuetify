import { defineStore } from 'pinia'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import router from '@/router'
import { apiAuth } from '../plugins/axios'
import i18n from '@/i18n'

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
      likes: [],
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
        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: '登入成功'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: 'Login succeesfully'
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: 'ログイン成功'
          })
        }

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
        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: '登出成功'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: 'Sign out suceesfully'
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: 'サインアウト成功'
          })
        }

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
    },
    async addCart(data) {
      if (this.token.length === 0) {

        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '請先登入'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Please Login'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: 'ログインしてください'
          })
        }
        router.push('/login')
        return
      }
      if (data.quantity <= 0) {

        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '數量必須大於 0'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Quantity can\'t be zero'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '数量を 0 にすることはできません'
          })
        }
      }
      try {
        const { data: resData } = await apiAuth.post('/users/cart', data)
        this.cart = resData.result
        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: '加入購物車成功'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: 'Add to Cart successful'
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: 'カートに追加しました'
          })
        }
      } catch (error) {

        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '加入購物車失敗'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: ' Add to cart failed'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: 'カートに追加できませんでした'
          })
        }
      }
    },
    async updateCart(data) {
      try {
        const { data: resData } = await apiAuth.patch('/users/cart', data)
        this.cart = resData.result
        return true
      } catch (error) {

        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '更新購物車失敗'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Failed to update cart'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: 'カートを更新できませんでした'
          })
        }
        return false
      }

    },
    async addLike(product) {
      if (this.token.length === 0) {
        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '請先登入'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Please Login'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: 'ログインしてください'
          })
        }
        router.push('/login')
        return
      }
      try {
        const { data } = await apiAuth.post('/users/likes', product)
        this.likes = data.result
      } catch (error) {

        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '加入收藏失敗'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'error',
            title: 'Failed to add to favorites',
            text: '加入收藏失敗'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: 'お気に入りに追加できませんでした'
          })
        }
      }
    },
    async deleteLike(product) {
      if (this.token.length === 0) {
        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '請先登入'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Please Login'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: 'ログインしてください'
          })
        }
        router.push('/login')
        return
      }
      try {
        const { data } = await apiAuth.patch('/users/likes', product)
        this.likes = data.result
      } catch (error) {

        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '取消收藏失敗'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Unfavourite failed'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: 'お気に入りから削除できませんでした'
          })
        }
      }
    },
    async checkout(data) {
      try {
        const { data: resData } = await apiAuth.post('/orders', data)
        this.cart = 0

        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: '送出訂單成功'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: 'Order sent successfully'
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: '注文が正常に送信されました'
          })
        }
        router.push('/order/' + resData.result)
      } catch (error) {
        console.log(error)

        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '送出訂單失敗'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Failed to send order'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '注文を送信できませんでした'
          })
        }
      }
    },
    async editUser(data) {
      try {
        console.log(data)
        const { data: resData } = await apiAuth.patch('/users', data)
        this.email = resData.result.email
        this.nickname = resData.result.nickname
        this.avatar = resData.result.avatar

        if (i18n.global.locale === 'tw') {
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: '編輯個人資料成功'
          })
        } else if (i18n.global.locale === 'en') {
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: 'Edit Successfully'
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: '成功',
            text: '編集成功'
          })
        }
        return true
        // { email: this.email, nickname: this.nickname, avatar: this.avatar }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: error.isAxiosError ? error.response.data.message : error.message
        })
      }
    },
    async getUser() {
      if (this.token.length === 0) return
      try {
        const { data } = await apiAuth.get('/users')
        this.account = data.result.account
        this.email = data.result.email
        this.nickname = data.result.nickname
        this.avatar = data.result.avatar
        this.cart = data.result.cart
        this.likes = data.result.likes
        this.role = data.result.role
      } catch (error) {
        this.logout()
      }
    }
  },
  persist: {
    key: 'Wu-Lee-shop',
    paths: ['token']
  }
})
