<template>
  <div id="likes_view">
    <h1 class="text-h2 text-center pt-15 text-brown font-weight-bold" data-aos="fade-down" data-aos-duration="1000"
      data-aos-offset="150">{{ $t('myfav') }}</h1>
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
    slidesPerView: 2
  },
  '960': {
    slidesPerView: 3
  },
  '1264': {
    slidesPerView: 4
  },
  '2200': {
    slidesPerView: 6
  }
}" :navigation="true" :speed="700" :modules="modules" class="mySwiper animate__animated animate__zoomIn">
      <swiper-slide v-if="likes.length > 0" v-for="(like, i) in likes" :key="like._id">
        <v-card variant="outlined" color="brown-lighten-4">
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
            <v-btn color="orange" @click="deleteLike(i)" prepend-icon="mdi-delete" block>{{ $t('deletelike') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </swiper-slide>
    </swiper>
    <v-row v-else>
      <v-col v-if="loading" cols="12" class="text-center mt-15 no_like_img">
        <img v-if="$i18n.locale === 'tw'" src="../../assets/minionmintw.png" class=" animate__animated animate__jello">
        <img v-else-if="$i18n.locale === 'en'" src="../../assets/minionminen.png"
          class=" animate__animated animate__bounce">
        <img v-else src="../../assets/minionminjp.png" class=" animate__animated animate__swing">
      </v-col>
    </v-row>
  </div>
  <LoadingImage v-if="waiting"></LoadingImage>
</template>

<style scoped lang="scss">
</style>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { ref, reactive, onMounted } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import AOS from "aos"
import LoadingImage from '../../components/LoadingImage.vue'
// import { useLoading } from 'vue3-loading-overlay';
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// const loader = useLoading()
const loading = ref(false)
const waiting = ref(false)

onMounted(() => {
  AOS.init();
})
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
    // loader.show({
    //   color: 'orange',
    //   loader: 'bars',
    //   width: 100,
    //   height: 100
    // })
    waiting.value = true
    const { data } = await apiAuth.get('/users/likes')
    likes.push(...data.result)
    // loader.hide()
    loading.value = true
    waiting.value = false
  } catch (error) {
    // console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得我的收藏'
    })
  }

}

init()
</script>