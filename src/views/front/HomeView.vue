<template>
  <div id="Home_view">
    <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :effect="'fade'" :pagination="{
      clickable: true,
    }" :autoplay="{
  delay: 5000,
  disableOnInteraction: false,
}" :modules="modules" class="mySwiper">
      <!-- <swiper-slide v-for="(image, i) in images" :key="i">
      <img :src="image.src">
    </swiper-slide> -->
      <swiper-slide>
        <img src="../../assets/banner01newnew.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/fresh_mango_banner.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/banner02new.jpg">
      </swiper-slide>
    </swiper>
    <div class="MyContainer">
      <v-row class="mt-10">
        <v-col cols="12" class="text-center">
          <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-once="true"
            class="text-h2 text-brown font-weight-bold">{{ $t('latestproduct') }}</h1>
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
          <ProductCard :product="product" data-aos="flip-up" data-aos-duration="3000" data-aos-offset="150"
            data-aos-once="true">
          </ProductCard>
        </v-col>
        <v-col v-else>
          <h1 v-if="loading" class="text-center">{{ $t('noproduct') }}</h1>
        </v-col>
      </v-row>
    </div>
  </div>
  <FooterPart></FooterPart>
  <LoadingImage v-if="waiting"></LoadingImage>
</template>

<style scoped lang="scss">
</style>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import ProductCard from '@/components/ProductCard.vue'
import FooterPart from '@/components/FooterPart.vue'
import LoadingImage from '../../components/LoadingImage.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"
import i18n from '@/i18n'
// import { useI18n } from "vue-i18n"
// Import Swiper styles
import "swiper/css"

import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

import AOS from "aos"

// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper"
// import { useUserStore } from '@/stores/user'
// import { storeToRefs } from 'pinia'
// import { apiAuth } from '../../plugins/axios.js'
// const user = useUserStore()
// const { isLogin } = storeToRefs(user)
// import { useLoading } from 'vue3-loading-overlay';
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'


const modules = reactive([Pagination, Autoplay, EffectFade])

// const loader = useLoading()
const waiting = ref(false)
const loading = ref(false)
const item = ref('')
const search = ref('')
// const { locale } = useI18n()
const items = reactive(['', '', '', ''])
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
onMounted(() => {
  AOS.init();
})

// watch(i18n.global.locale, (n, o) => {
//   console.log(i18n.global.locale)
//   // if (n === 'tw') {
//   //   item.value = '全部'
//   //   items[0] = '全部'
//   //   items[1] = '芒果'
//   //   items[2] = '火龍果'
//   //   items[3] = '香蕉'
//   // } else if (n === 'en') {
//   //   item.value = 'All'
//   //   items[0] = 'All'
//   //   items[1] = 'Mango'
//   //   items[2] = 'Pitaya'
//   //   items[3] = 'Banana'
//   // } else {
//   //   item.value = '全部'
//   //   items[0] = '全部'
//   //   items[1] = 'マンゴー'
//   //   items[2] = 'ピタヤ'
//   //   items[3] = 'バナナ'
//   // }
// })

// 暴力破解 
setInterval(() => {
  if (i18n.global.locale === 'tw') {
    if (item.value === 'All') {
      item.value = '全部'
    } else if (item.value === 'Mango' || item.value === 'マンゴー') {
      item.value = '芒果'
    } else if (item.value === 'Pitaya' || item.value === 'ピタヤ') {
      item.value = '火龍果'
    } else if (item.value === 'Banana' || item.value === 'バナナ') {
      item.value = '香蕉'
    }
    items[0] = '全部'
    items[1] = '芒果'
    items[2] = '火龍果'
    items[3] = '香蕉'
  } else if (i18n.global.locale === 'en') {
    if (item.value === '全部') {
      item.value = 'All'
    } else if (item.value === '芒果' || item.value === 'マンゴー') {
      item.value = 'Mango'
    } else if (item.value === '火龍果' || item.value === 'ピタヤ') {
      item.value = 'Pitaya'
    } else if (item.value === '香蕉' || item.value === 'バナナ') {
      item.value = 'Banana'
    }
    items[0] = 'All'
    items[1] = 'Mango'
    items[2] = 'Pitaya'
    items[3] = 'Banana'
  } else {
    if (item.value === 'All') {
      item.value = '全部'
    } else if (item.value === 'Mango' || item.value === '芒果') {
      item.value = 'マンゴー'
    } else if (item.value === 'Pitaya' || item.value === '火龍果') {
      item.value = 'ピタヤ'
    } else if (item.value === '香蕉' || item.value === 'Banana') {
      item.value = 'バナナ'
    }
    items[0] = '全部'
    items[1] = 'マンゴー'
    items[2] = 'ピタヤ'
    items[3] = 'バナナ'
  }
}, 100)

const products = reactive([])

const filtereditems = computed(() => {
  return products.filter(i => {
    const inc = i.name.toLowerCase().includes(search.value.toLowerCase())
    if (item.value === '全部' || item.value === 'All') return inc
    else if (item.value === '芒果' || item.value === 'Mango' || item.value === 'マンゴー') return inc && i.category === '芒果'
    else if (item.value === '火龍果' || item.value === 'Pitaya' || item.value === 'ピタヤ') return inc && i.category === '火龍果'
    else return inc && i.category === '香蕉'
  })
})

const init = async () => {
  try {
    if (i18n.global.locale === 'tw') {
      item.value = '全部'
      items[0] = '全部'
      items[1] = '芒果'
      items[2] = '火龍果'
      items[3] = '香蕉'
    }
    else if (i18n.global.locale === 'en') {
      item.value = 'All'
      items[0] = 'All'
      items[1] = 'Mango'
      items[2] = 'Pitaya'
      items[3] = 'Banana'
    } else {
      item.value = '全部'
      items[0] = '全部'
      items[1] = 'マンゴー'
      items[2] = 'ピタヤ'
      items[3] = 'バナナ'
    }
    waiting.value = true
    const { data } = await api.get('/products')
    products.push(...data.result)
    // loader.hide()
    loading.value = true
    waiting.value = false
  } catch (error) {
    console.log(error)
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
<!-- <script>
import SwiperAnimation from '@cycjimmy/swiper-animation'
// use swiper 4+
const swiperAnimation = new SwiperAnimation();
const mySwiper4 = new Swiper('.swiper-container', {
  on: {
    init: function () {
      swiperAnimation.init(this).animate();
    },
    slideChange: function () {
      swiperAnimation.init(this).animate();
    }
  }
})
</script> -->