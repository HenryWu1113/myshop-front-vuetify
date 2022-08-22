<template>
  <div id="Home_view">
    <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :effect="'fade'" :pagination="{
      clickable: true,
    }" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :modules="modules" class="mySwiper">
      <!-- <swiper-slide v-for="(image, i) in images" :key="i">
      <img :src="image.src">
    </swiper-slide> -->
      <swiper-slide>
        <img src="../../assets/banner01.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/banner02.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/banner03.jpg">
      </swiper-slide>
    </swiper>
    <div class="MyContainer">
      <v-row class="mt-10">
        <v-col cols="12" class="text-center">
          <h1 class="text-h2 text-brown font-weight-bold">最新商品</h1>
        </v-col>
        <v-col cols="6" md="4" lg="3">
          <v-select variant="outlined" v-model="item" :items="items"></v-select>
        </v-col>
        <v-col cols="6" md="8" lg="9">
          <v-text-field variant="outlined" v-model="search" placeholder="搜尋" appendInnerIcon="mdi-shopping-search">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row style="min-height:500px">
        <v-col v-if="products.length > 0" cols="12" md="6" lg="4" xl="3" v-for="product in filtereditems">
          <ProductCard :product="product"></ProductCard>
        </v-col>
        <v-col v-else>
          <h1 class="text-center">沒有商品</h1>
        </v-col>
      </v-row>
    </div>
  </div>
  <FooterPart></FooterPart>

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
import FooterPart from '@/components/FooterPart.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"

// Import Swiper styles
import "swiper/css"

import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper"
import { computed } from 'vue'
// import { useUserStore } from '@/stores/user'
// import { storeToRefs } from 'pinia'
// import { apiAuth } from '../../plugins/axios.js'
// const user = useUserStore()
// const { isLogin } = storeToRefs(user)

const modules = reactive([Pagination, Autoplay, EffectFade])

const item = ref('全部')
const search = ref('')

const items = reactive(['全部', '芒果', '火龍果', '香蕉'])
// const images = reactive([
//   {
//     src: '../../assets/banner01.jpg',
//   },
//   {
//     src: 'https://img.freepik.com/premium-photo/collage-fruits-isolated-white-background-with-copy-space-fresh-healthy-fruits-berries-close-up_88281-124.jpg?w=1380'
//   },
//   {
//     src: 'https://img.freepik.com/premium-photo/flying-fruits-berries-isolated-white-background_88281-1410.jpg?w=1380'
//   }
// ]
// )

const products = reactive([])

const filtereditems = computed(() => {
  return products.filter(i => {
    const inc = i.name.toLowerCase().includes(search.value.toLowerCase())
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