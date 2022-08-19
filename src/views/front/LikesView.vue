<template>
  <h1 class="text-h2 text-center mt-15"><b>我的收藏</b></h1>
  <div class="MyContainer">
    <swiper v-if="likes.length > 0" :effect="'coverflow'" :grabCursor="true" :centeredSlides="true"
      :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }" :pagination="{
  clickable: true,
}" :breakpoints="{
  '600': {
    slidesPerView: 1
  },
  '960': {
    slidesPerView: 2
  },
  '1264': {
    slidesPerView: 4
  }
}" :navigation="true" :speed="700" :modules="modules" class="mySwiper">
      <swiper-slide v-if="likes.length > 0" v-for="(like, i) in likes" :key="like._id">
        <v-card class="rounded-xl">
          <v-img :src="like.product.image" @click="router.push(`/product/${like.product._id}`)" style="cursor:pointer">
          </v-img>
          <v-card-title>
            <h2 class="ms-3 text-brown">{{ like.product.name }}</h2>
          </v-card-title>
          <v-card-text>
            <v-container>
              <h2 class="text-deep-orange">NT. {{ like.product.price }}</h2>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" @click="deleteLike(i)" prepend-icon="mdi-delete" block>移除收藏
            </v-btn>
          </v-card-actions>
        </v-card>
      </swiper-slide>
    </swiper>
    <h1 v-else class="text-h1 text-center mt-10">沒有收藏哦!!!</h1>
  </div>
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
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  // width: 300px;
  // height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { ref, reactive } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const user = useUserStore()

// Import Swiper styles
import "swiper/css"

import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper"

// const idx = ref(-1)

const likes = reactive([])
const modules = reactive([EffectCoverflow, Pagination, Navigation])

const deleteLike = (i) => {
  // idx.value = i
  user.deleteLike({ product: likes[i].product._id })
  likes.splice(i, 1)
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/likes')
    likes.push(...data.result)
    console.log(likes)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得我的收藏'
    })
  }

}

init()
</script>