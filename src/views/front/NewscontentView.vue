<template>
  <div id="news_content_view">
    <div class="MyContainer">
      <h1 class="text-h2 text-center mt-15 font-weight-bold text-brown" data-aos="fade-down" data-aos-duration="1000"
        data-aos-offset="150">{{ n.title }}</h1>
      <h6 v-if="$i18n.locale === 'tw'" class="text-h6 mt-15 text-orange" data-aos="fade-down" data-aos-duration="1000"
        data-aos-offset="150">{{
            $t('release')
        }} :
        {{ new Date(n.date).toLocaleString('zh-TW') }}</h6>
      <h6 v-else-if="$i18n.locale === 'en'" class="text-h6 mt-15 text-orange" data-aos="fade-down"
        data-aos-duration="1000" data-aos-offset="150">{{
            $t('release')
        }} :
        {{ new Date(n.date).toLocaleString('en-US') }}</h6>
      <h6 v-else class="text-h6 mt-15 text-orange" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">
        {{
            $t('release')
        }} :
        {{ new Date(n.date).toLocaleString('ja-JP') }}</h6>
      <p class="mt-5 text-brown" style="white-space: pre-wrap; font-size: 18px;;" data-aos="fade-down"
        data-aos-duration="1000" data-aos-offset="150">{{ n.content }}</p>
      <v-col cols="12" class="mt-5 text-center">
        <v-btn color="brown" variant="outlined" prepend-icon="mdi-arrow-left" @click="router.go(-1)"
          class="animate__animated animate__fadeInUp">
          {{ $t('back') }}</v-btn>
      </v-col>
    </div>
  </div>
  <LoadingImage v-if="waiting"></LoadingImage>
</template>

<style scoped lang="scss">
</style>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import { useRouter, useRoute } from 'vue-router'
import AOS from "aos"
import LoadingImage from '../../components/LoadingImage.vue'
import i18n from '@/i18n'
// import { useLoading } from 'vue3-loading-overlay';
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// const loader = useLoading()
const waiting = ref(false)

onMounted(() => {
  AOS.init();
})

const router = useRouter()
const route = useRoute()

const n = reactive({
  title: '',
  content: '',
  date: ''
})

const init = async () => {
  try {
    // loader.show({
    //   color: 'orange',
    //   loader: 'bars',
    //   width: 100,
    //   height: 100
    // })
    waiting.value = true
    const { data } = await api.get('/news/' + route.params.id)
    n.title = data.result.title
    n.content = data.result.content
    n.date = data.result.date
    waiting.value = false
    // loader.hide()
  } catch (error) {
    // console.log(error)

    if (i18n.global.locale === 'tw') {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '取得最新消息失敗'
      })
    } else if (i18n.global.locale === 'en') {
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Failed to get latest news'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '最新ニュースの取得に失敗しました'
      })
    }
    router.go(-1)
  }
}

init()
</script>