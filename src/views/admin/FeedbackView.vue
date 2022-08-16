<template>
  <h1 class="text-h2 text-center mt-15"><b>回饋訊息管理</b></h1>
  <v-row class="d-none d-lg-flex mt-10">
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
      <span>收件時間</span>
    </v-col>
    <v-col class="text-h6">
      <span>訊息內容</span>
    </v-col>
  </v-row>
  <v-divider class="mb-10 d-none d-lg-block"></v-divider>
  <div class="order_panel">
    <v-row v-if="feedbacks.length > 0" v-for="feedback in feedbacks" :key="feedback._id" class="mt-3">
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
        <v-btn variant="outlined">檢視內容</v-btn>
      </v-col>
      <v-divider></v-divider>
    </v-row>
  </div>

</template>

<style scoped lang="scss">
.order_panel {
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgb(233, 229, 255);
  padding: 10px 30px 50px 30px;

}
</style>

<script setup>
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { ref, reactive, computed } from 'vue'

const feedbacks = reactive([])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/feedbacks/all')
    feedbacks.push(...data.result)
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