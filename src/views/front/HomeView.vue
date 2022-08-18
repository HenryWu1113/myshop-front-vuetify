<template>
  <!-- <v-carousel cover cycle hide-delimiter-background hide-delimiters show-arrows="hover" interval="5000">
    <v-carousel-item v-for="(image, i) in images" :key="i">
      <v-img :src="image.src" cover>
      </v-img>
    </v-carousel-item>
  </v-carousel> -->


  <!-- <v-container class="mt-10"> -->
  <!-- <v-menu>
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
    </v-menu> -->
  <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
    clickable: true,
  }" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :modules="modules" class="mySwiper">
    <swiper-slide v-for="(image, i) in images" :key="i">
      <img :src="image.src">
    </swiper-slide>
  </swiper>
  <div class="MyContainer">
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="text-h2">最新商品</h1>
      </v-col>
      <v-col cols="6" md="4" lg="3">
        <v-select variant="outlined" v-model="item" :items="items"></v-select>
      </v-col>
      <v-col cols="6" md="8" lg="9">
        <v-text-field variant="outlined" v-model="search" placeholder="搜尋" appendInnerIcon="mdi-shopping-search">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="products.length > 0" cols="12" md="6" lg="4" xl="3" v-for="product in filtereditems">
        <ProductCard :product="product"></ProductCard>
      </v-col>
      <v-col v-else>
        <h1 class="text-center">沒有商品</h1>
      </v-col>
    </v-row>
  </div>

  <!-- </v-container> -->
</template>

<style scoped lang="scss">
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  aspect-ratio: 16 / 6;
  // height: 300px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// @media (min-width:960px) {
//   .swiper {
//     width: 100%;
//     height: 500px;
//   }
// }
</style>

<script setup>
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import ProductCard from '@/components/ProductCard.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"

// Import Swiper styles
import "swiper/css"

import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Autoplay } from "swiper"
import { computed } from '@vue/reactivity'
// import { useUserStore } from '@/stores/user'
// import { storeToRefs } from 'pinia'
// import { apiAuth } from '../../plugins/axios.js'
// const user = useUserStore()
// const { isLogin } = storeToRefs(user)

const modules = reactive([Pagination, Autoplay])

const item = ref('全部')
const search = ref('')

const items = reactive(['全部', '芒果', '火龍果', '香蕉'])
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

const filtereditems = computed(() => {
  return products.filter(i => {
    const inc = i.name.includes(search.value)
    if (item.value === '全部') return inc
    else if (item.value === '芒果') return inc && i.category === '芒果'
    else if (item.value === '火龍果') return inc && i.category === '火龍果'
    else return inc && i.category === '香蕉'
  })
})

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