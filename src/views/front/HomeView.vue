<template>
  <v-carousel cover cycle hide-delimiter-background hide-delimiters show-arrows="hover" interval="5000">
    <v-carousel-item v-for="(image, i) in images" :key="i">
      <v-img :src="image.src" cover>
      </v-img>
    </v-carousel-item>
  </v-carousel>
  <v-container class="mt-10">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          Activator slot
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-row>
      <v-col v-if="products.length > 0" cols="12" sm="6" lg="4" xl="3" v-for="product in products">
        <ProductCard :product="product"></ProductCard>
      </v-col>
      <v-col v-else>
        <h1 class="text-center">沒有商品</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
</style>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import ProductCard from '@/components/ProductCard.vue'
// import { useUserStore } from '@/stores/user'
// import { storeToRefs } from 'pinia'
// import { apiAuth } from '../../plugins/axios.js'
// const user = useUserStore()
// const { isLogin } = storeToRefs(user)

const images = reactive([
  {
    src: 'https://images.unsplash.com/photo-1659563095582-bcacd4c09298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1659586554861-4d3f759c3f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    src: 'https://images.unsplash.com/photo-1659525899282-4cf4dbe3788c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
]
)

const products = reactive([])


const init = async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}

// const login = async () => {
//   if (isLogin !== true) return
//   try {
//     const { data } = await apiAuth.get('/users/likes')
//     likeproducts.push(...data.result)
//   } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: '失敗',
//       text: '伺服器錯誤'
//     })
//   }
// }

init()
// login()
</script>