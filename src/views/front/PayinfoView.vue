<template>
  <v-container>
    <div class="order_slogan">
      <v-icon icon="mdi-thumb-up-outline" style="font-size:8rem"></v-icon>
      <h1 class="text-h3 mt-2"><b>感謝您的購買</b></h1>
      <p class="text-h6 mt-2">您的訂單已經成功提交，您的貨品將在完成繳費後 7 日內送達</p>
    </div>
    <div class="order_info">
      <h1 class="text-h2 mb-5">繳款資訊</h1>
      <div class="order_info_content">
        <h1>銀行名稱 : </h1>
        <h1>XXXX分行</h1>
      </div>
      <div class="order_info_content">
        <h1>銀行號碼 : </h1>
        <h1>777</h1>
      </div>
      <div class="order_info_content">
        <h1>戶頭名稱 : </h1>
        <h1>XX公司</h1>
      </div>
      <div class="order_info_content">
        <h1>帳戶號碼 : </h1>
        <h1>111111111111</h1>
      </div>
      <div class="order_info_content">
        <h1>繳款截止時間 : </h1>
        <h1>{{ new Date(orderinfo.deadline).toLocaleString() }}</h1>
      </div>
    </div>
    <div class="home_button">
      <v-btn prepend-icon="mdi-home" variant="outlined" color="primary" to="/" size="large" rounded>回首頁</v-btn>
    </div>
  </v-container>

</template>

<style scoped lang="scss">
.order_slogan {
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 7rem 0;
}

.order_info {
  width: 100%;

  .order_info_content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}

.home_button {
  margin-top: 2rem;
  width: 100%;
  text-align: center;
}
</style>

<script setup>
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const orderinfo = reactive({
  _id: '',
  deadline: ''
})

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders/' + route.params.id)
    orderinfo._id = data.result._id
    orderinfo.deadline = data.result.deadline
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得訂購單失敗'
    })
    router.go(-1)
  }
}

init()
</script>
