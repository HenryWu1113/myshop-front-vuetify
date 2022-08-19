<template>
  <div class="MyContainer mt-10">
    <h1 class="text-h2 text-center text-brown font-weight-bold">最新消息</h1>
    <v-row v-if="news.length > 0" v-for="n in news" :key="n._id" class="mt-3">
      <v-col cols="" class="d-flex align-center">
        <h2 @click="router.push('/news/' + n._id)" style="cursor:pointer;">
          ֍ {{ n.title }}
        </h2>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="" class="d-flex align-center justify-end">
        <div class="column_divider mr-3"></div>
        <span style="width: 200px;">{{ new Date(n.date).toLocaleString() }}</span>
      </v-col>
      <v-divider></v-divider>
    </v-row>
    <v-row v-else>
      <v-col cols="12" class="text-center">沒有最新消息</v-col>
    </v-row>
    <!-- <div class="text-center">
      <v-pagination v-model="page" :length="news.length / 5"></v-pagination>
    </div> -->
  </div>


</template>

<style scoped lang="scss">
.column_divider {
  width: 2px;
  height: 50px;
  background: grey;
}
</style>

<script setup>
import { ref, reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import { useRouter } from 'vue-router'

const router = useRouter()

// const page = ref(1)

const news = reactive([])

// const pagination = computed(() => {
//   if (page.value === 1) {
//     for (let i = 0; i < 5; i++) {
//       return news[i]
//     }
//   }
// })

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