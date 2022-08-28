<template>
  <h1 class="text-h2 text-brown text-center mt-15 font-weight-bold">回饋訊息管理</h1>
  <v-row class="d-none d-lg-flex mt-10 text-brown">
    <v-col class="text-h6">
      <span>會員帳號</span>
    </v-col>
    <v-col class="text-h6">
      <span>會員暱稱</span>
    </v-col>
    <v-col class="text-h6">
      <span>會員電子信箱</span>
    </v-col>
    <v-col class="text-h6">
      <span>寄件時間</span>
    </v-col>
    <v-col class="text-h6">
      <span>訊息內容</span>
    </v-col>
  </v-row>
  <v-divider class="mb-10 d-none d-lg-block"></v-divider>
  <div class="order_panel">
    <v-row v-if="feedbacks.length > 0" v-for="(feedback, i) in feedbacks" :key="feedback._id" class="mt-3 text-brown">
      <v-col>
        <span>{{ feedback.user.account }}</span>
      </v-col>
      <v-col>
        <span>{{ feedback.user.nickname }}</span>
      </v-col>
      <v-col>
        <span>{{ feedback.user.email }}</span>
      </v-col>
      <v-col>
        <span>{{ new Date(feedback.date).toLocaleString() }}</span>
      </v-col>
      <v-col>
        <v-btn variant="outlined" @click="openDialog(i)">檢視內容</v-btn>
      </v-col>
      <v-divider></v-divider>
    </v-row>
    <v-row v-else>
      <v-col v-if="loading" cols="12" class="text-center">
        <h1>沒有回饋訊息</h1>
      </v-col>
    </v-row>
  </div>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title class="text-center mt-5">
        <h2>會員帳號 : {{ feedbacks[idx].user.account }}</h2>
      </v-card-title>
      <v-card-text>
        <v-container>
          <p>時間 : {{ new Date(feedbacks[idx].date).toLocaleString() }}</p>
          <span>訊息 : {{ feedbacks[idx].comment }}</span>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn block color="warning" @click="dialog = false">關閉</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <LoadingImage v-if="waiting"></LoadingImage>

</template>

<style scoped lang="scss">
.order_panel {
  background-color: #FFFDE7;
  border-radius: 20px;
  padding: 10px 30px 50px 30px;

}
</style>

<script setup>
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { ref, reactive, computed } from 'vue'
import LoadingImage from '../../components/LoadingImage.vue'

const dialog = ref(false)
const idx = ref(-1)
const waiting = ref(false)
const loading = ref(false)

const feedbacks = reactive([])

const openDialog = (i) => {
  idx.value = i
  dialog.value = true
}

const init = async () => {
  try {
    waiting.value = true
    const { data } = await apiAuth.get('/feedbacks/all')
    feedbacks.push(...data.result)
    loading.value = true
    waiting.value = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

init()
</script>