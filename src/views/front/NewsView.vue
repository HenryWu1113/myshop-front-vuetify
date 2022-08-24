<template>
  <div id="front_news_view">
    <div class="MyContainer mt-10">
      <h1 class="text-h2 text-center text-brown font-weight-bold" data-aos="fade-down" data-aos-duration="1000"
        data-aos-offset="150">{{ $t('news') }}</h1>
      <v-row v-if="news.length > 0" v-for="n in pagination" :key="n._id"
        class="mt-3 animate__animated animate__bounceIn" @click="router.push('/news/' + n._id)" style="cursor:pointer;">
        <v-col cols="12" md="" class="d-flex align-center">
          <h2 class="text-brown">
            ֍ {{ n.title }}
          </h2>
        </v-col>
        <v-spacer class="d-none d-md-block"></v-spacer>
        <v-col cols="12" md="" class="d-flex align-center justify-md-end">
          <div class="column_divider mr-3 d-none d-md-block"></div>
          <span style="width: 200px;" class="text-brown">{{ new Date(n.date).toLocaleString() }}</span>
        </v-col>
        <v-divider></v-divider>
      </v-row>
      <v-row v-else>
        <v-col cols="12" class="text-center">沒有最新消息</v-col>
      </v-row>
      <div class="text-center mt-10">
        <v-pagination v-model="currentPage" :length="Math.ceil(news.length / 5)"></v-pagination>
      </div>
    </div>
  </div>


</template>

<style scoped lang="scss">
</style>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const pageSize = 5
const currentPage = ref(1)

const news = reactive([])

import AOS from "aos"

onMounted(() => {
  AOS.init();
})

const pagination = computed(() => {
  return news.slice((currentPage.value - 1) * pageSize, pageSize * currentPage.value)
})

const init = async () => {
  try {
    const { data } = await api.get('/news')
    news.push(...data.result)
  } catch (error) {
    // console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

init()
</script>