<template>
  <div class="MyContainer">
    <h1 class="text-h2 text-center mt-15"><b>{{ n.title }}</b></h1>
    <h6 class="text-h6 mt-15">發布時間 : {{ new Date(n.date).toLocaleString() }}</h6>
    <p class="mt-5" style="white-space: pre-wrap;">{{ n.content }}</p>
    <v-col cols="12" class="mt-5 text-center">
      <v-btn color="brown" variant="outlined" prepend-icon="mdi-arrow-left" @click="router.go(-1)">
        回上一頁</v-btn>
    </v-col>
  </div>
</template>

<style scoped lang="scss">
</style>

<script setup>
import { ref, reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const n = reactive({
  title: '',
  content: '',
  date: ''
})

const init = async () => {
  try {
    const { data } = await api.get('/news/' + route.params.id)
    n.title = data.result.title
    n.content = data.result.content
    n.date = data.result.date
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得最新消息失敗'
    })
    router.go(-1)
  }
}

init()
</script>