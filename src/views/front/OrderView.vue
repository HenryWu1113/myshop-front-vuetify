<template>
  <div class="MyContainer">
    <h1 class="text-h2 text-center mt-15"><b>訂購紀錄</b></h1>
    <v-row class="mt-5">
      <v-col cols="12" md="3">
        <v-select v-model="item" variant="outlined" :items="items" append-inner-icon="mdi-filter-menu-outline">
        </v-select>
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
      <v-row v-if="orders.length > 0" v-for="order in filtereditems" :key="order._id" class="pt-3 pb-3 mt-10"
        style="border-left:3px solid grey">
        <v-col cols="12" lg="">
          <span class="d-lg-none" @click="router.push('/order/' + order._id)" style="cursor: pointer;">訂單編號 : </span>
          <span @click="router.push('/order/' + order._id)" style="cursor: pointer;">{{ order._id }}</span>
        </v-col>
        <v-col cols="12" lg="">
          <span class="d-lg-none">訂購日期 : </span>
          <span>{{ new Date(order.date).toLocaleString() }}</span>
        </v-col>
        <v-col cols="12" md="4" lg="" class="d-flex align-center">
          <span class="d-lg-none">訂單狀態 : </span>
          <span v-if="order.state === 0">未付款</span>
          <span v-else-if="order.state === 1">訂單成立</span>
          <span v-else="order.state === 2">訂單取消</span>
        </v-col>
        <v-col cols="12" md="4" lg="" class="d-flex align-center">
          <span class="d-lg-none">總價 : </span>
          <span>NT. {{ order.totalPrice }}</span>
        </v-col>
        <v-col cols="12" md="4" lg="">
          <span class="d-lg-none">詳細資訊 : </span>
          <v-btn icon variant="text" @click="openDialog(order._id)">
            <v-icon icon="mdi-plus"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <h1 v-else class="text-h1 text-center mt-10">沒有訂單哦</h1>
      <v-dialog v-model="dialog">
        <v-card>
          <v-card-title>
            <h3 class="text-center mt-4">~~~~~ 訂單編號 :{{ form._id }} ~~~~~</h3>
          </v-card-title>
          <v-card-text>
            <v-row class="d-none d-md-flex">
              <v-col cols="12" md="5">
                <span>產品</span>
              </v-col>
              <v-col cols="12" md="2">
                <span>單價</span>
              </v-col>
              <v-col cols="12" md="2">
                <span>數量</span>
              </v-col>
              <v-col cols="12" md="3">
                <span>總價</span>
              </v-col>
            </v-row>
            <v-divider class="d-none d-md-block mb-1"></v-divider>
            <v-row v-for="product in orders[form.idx].products" :key="product._id">
              <v-col cols="12" md="5">
                <span class="d-none d-md-block" @click="router.push('/product/' + product.product._id)"
                  style="cursor:pointer">
                  {{ product.product.name }}
                </span>
                <span class="d-md-none text-h6" @click="router.push('/product/' + product.product._id)"
                  style="cursor:pointer">
                  <b>{{ product.product.name }}</b>
                </span>
              </v-col>
              <v-col cols="4" md="2">
                <span class="d-md-none">單價 : </span>
                <span>NT. {{ product.product.price }}</span>
              </v-col>
              <v-col cols="4" md="2">
                <span class="d-md-none">數量 : </span>
                <span>{{ product.quantity }}</span>
              </v-col>
              <v-col cols="4" md="3">
                <span class="d-md-none">總價 : </span>
                <span>NT. {{ product.product.price * product.quantity }}</span>
              </v-col>
              <v-divider class="d-md-none"></v-divider>
            </v-row>
            <v-divider class="d-none d-md-block"></v-divider>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">關閉</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

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
import { ref, reactive, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const router = useRouter()

const dialog = ref(false)
const item = ref('全部')

const orders = reactive([])
const form = reactive({
  _id: '',
  idx: 0
})
const items = reactive(['全部', '未付款', '訂單成立', '訂單取消'])

const filtereditems = computed(() => {
  if (item.value === '全部') return orders
  else if (item.value === '未付款') return orders.filter(item => item.state === 0)
  else if (item.value === '訂單成立') return orders.filter(item => item.state === 1)
  else return orders.filter(item => item.state === 2)
})

const openDialog = (i) => {
  const idx = orders.findIndex(item => item._id === i)
  form._id = orders[idx]._id
  form.idx = idx
  dialog.value = true
}

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