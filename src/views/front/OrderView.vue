<template>
  <v-container>
    <h1 class="text-h2 text-center mt-15"><b>訂購紀錄</b></h1>
    <v-row class="mt-5">
      <v-col cols="12" md="3" sm="4">
        <v-select v-model="item" variant="outlined" :items="items" append-inner-icon="mdi-pistol"></v-select>
      </v-col>
    </v-row>
    <v-row class="d-none d-lg-flex">
      <v-col class="text-h6">
        <span>訂單編號</span>
      </v-col>
      <v-col class="text-h6">
        <span>訂購日期</span>
      </v-col>
      <v-col class="text-h6">
        <span>訂單狀態</span>
      </v-col>
      <v-col class="text-h6">
        <span>總價</span>
      </v-col>
      <v-col class="text-h6">
        <span>詳細資訊</span>
      </v-col>
    </v-row>
    <v-divider class="mb-10 d-none d-lg-block"></v-divider>
    <div class="order_panel">
      <v-row v-if="orders.length > 0" v-for="(order, idx) in orders" :key="order._id" class="pt-3 pb-3 mt-10"
        style="border-left:3px solid grey">
        <v-col cols="12" lg="">
          <span class="d-lg-none">訂單編號 : </span>
          <span>{{ order._id }}</span>
        </v-col>
        <v-col cols="12" lg="">
          <span class="d-lg-none">訂購日期 : </span>
          <span>{{ new Date(order.date).toLocaleString() }}</span>
        </v-col>
        <v-col cols="12" sm="4" lg="" class="d-flex align-center">
          <span class="d-lg-none">訂單狀態 : </span>
          <span v-if="order.state === 0">未付款</span>
          <span v-else-if="order.state === 1">訂單成立</span>
          <span v-else="order.state === 2">訂單取消</span>
        </v-col>
        <v-col cols="12" sm="4" lg="" class="d-flex align-center">
          <span class="d-lg-none">總價 : </span>
          <span>NT. {{ order.totalPrice }}</span>
        </v-col>
        <v-col cols="12" sm="4" lg="">
          <span class="d-lg-none">詳細資訊 : </span>
          <v-btn icon variant="text">
            <v-icon icon="mdi-plus"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <h1 v-else class="text-h1 text-center mt-10">沒有訂單哦</h1>
    </div>

  </v-container>
</template>

<style scoped lang="scss">
.order_panel {
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgb(233, 229, 255);
  padding: 10px 30px;
}
</style>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const item = ref('全部')

const orders = reactive([])
const items = reactive(['全部', '未付款', '訂單成立', '訂單取消'])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
}

init()
</script>