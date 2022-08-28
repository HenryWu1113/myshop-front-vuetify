<template>
  <div id="back_order_view">
    <v-container>
      <h1 class="text-h2 text-center mt-15 font-weight-bold">訂單管理</h1>
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
        <v-col class="text-h6">
          <span>訂單資訊</span>
        </v-col>
      </v-row>
      <v-divider class="mb-10 d-none d-lg-block"></v-divider>
      <div class="order_panel">
        <v-row v-if="orders.length > 0" v-for="order in filtereditems" :key="order._id" class="pt-3 pb-3 mt-10"
          style="border-left:3px solid #FFEB3B">
          <v-col cols="12" lg="" class="d-flex align-center">
            <span class="d-lg-none" @click="router.push('/order/' + order._id)" style="cursor: pointer;">訂單編號 : </span>
            <span @click="router.push('/order/' + order._id)" style="cursor: pointer;" class="order_id">{{ order._id
            }}</span>
          </v-col>
          <v-col cols="12" lg="" class="d-flex align-center">
            <span class="d-lg-none">訂購日期 : </span>
            <span>{{ new Date(order.date).toLocaleString() }}</span>
          </v-col>
          <v-col cols="12" sm="3" lg="" class="d-flex align-center">
            <span class="d-lg-none">訂單狀態 : </span>
            <span v-if="order.state === 0">未付款</span>
            <span v-else-if="order.state === 1">訂單成立</span>
            <span v-else="order.state === 2">訂單取消</span>
          </v-col>
          <v-col cols="12" sm="3" lg="" class="d-flex align-center">
            <span class="d-lg-none">總價 : </span>
            <span>NT. {{ order.totalPrice }}</span>
          </v-col>
          <v-col cols="12" sm="3" lg="">
            <span class="d-lg-none">詳細資訊 : </span>
            <v-btn icon variant="text" @click="openDialog(order._id)">
              <v-icon icon="mdi-plus"></v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="3" lg="">
            <span class="d-lg-none">訂單資訊 : </span>
            <v-btn icon variant="text" @click="changeOrder(order._id)">
              <v-icon icon="mdi-pen"></v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col v-if="loading" cols="12" class="text-center mt-10">
            <h1>沒有訂單哦</h1>
          </v-col>
        </v-row>
        <v-dialog v-model="dialog">
          <v-card>
            <v-card-title>
              <h3 class="text-center mt-4 text-brown">~~~~~ 訂單編號 :{{ form._id }} ~~~~~</h3>
            </v-card-title>
            <v-card-text>
              <v-row class="d-none d-md-flex">
                <v-col cols="12" md="5">
                  <span class="text-brown">產品</span>
                </v-col>
                <v-col cols="12" md="2">
                  <span class="text-brown">單價</span>
                </v-col>
                <v-col cols="12" md="2">
                  <span class="text-brown">數量</span>
                </v-col>
                <v-col cols="12" md="3">
                  <span class="text-brown">總價</span>
                </v-col>
              </v-row>
              <v-divider class="d-none d-md-block mb-1"></v-divider>
              <v-row v-for="product in orders[form.idx].products" :key="product._id">
                <v-col cols="12" md="5">
                  <span class="d-none d-md-block text-brown" @click="router.push('/product/' + product.product._id)"
                    style="cursor:pointer">
                    {{ product.product.name }}
                  </span>
                  <span class="d-md-none text-h6 text-brown" @click="router.push('/product/' + product.product._id)"
                    style="cursor:pointer">
                    <b>{{ product.product.name }}</b>
                  </span>
                </v-col>
                <v-col cols="4" md="2">
                  <span class="d-md-none text-brown">單價 : </span>
                  <span class="text-deep-orange">NT. {{ product.product.price }}</span>
                </v-col>
                <v-col cols="4" md="2">
                  <span class="d-md-none text-brown">數量 : </span>
                  <span class="text-brown">{{ product.quantity }}</span>
                </v-col>
                <v-col cols="4" md="3">
                  <span class="d-md-none text-brown">總價 : </span>
                  <span class="text-deep-orange">NT. {{ product.product.price * product.quantity }}</span>
                </v-col>
                <v-divider class="d-md-none"></v-divider>
              </v-row>
              <v-divider class="d-none d-md-block"></v-divider>
            </v-card-text>
            <v-card-actions>
              <v-btn color="brown" block @click="dialog = false">關閉</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialog2" persistent>
          <v-form @submit.prevent="submitForm" v-model="form.valid">
            <v-card>
              <v-card-title>
                <h3 class="text-center mt-4 text-brown">~~~~~ 訂單編號 :{{ form._id }} ~~~~~</h3>
              </v-card-title>
              <v-card-text>
                <h2 class="text-center text-brown mb-4">會員 : {{ form.nickname }}</h2>
                <v-text-field v-model="form.receiver" type="text" label="收件者姓名" placeholder="請輸入收件者姓名" counter="10"
                  maxlength="10" :rules="[rules.required]" variant="outlined"></v-text-field>
                <v-text-field v-model="form.cellphone" type="text" label="收件者電話" placeholder="請輸入收件者電話"
                  :rules="[rules.required, rules.isMobilePhone]" variant="outlined">
                </v-text-field>
                <v-text-field v-model="form.address" type="text" label="收件地址" placeholder="請輸入收件地址"
                  :rules="[rules.required]" variant="outlined">
                </v-text-field>
                <v-select v-model="form.state" :items="orderState" item-title="opt" item-value="value"
                  variant="outlined">
                </v-select>
              </v-card-text>
              <v-card-actions class="d-flex justify-center mb-3">
                <v-btn color="brown" variant="outlined" @click="dialog2 = false">關閉</v-btn>
                <v-btn color="warning" variant="outlined" type="submit" :loading="form.submitting">
                  確認更改
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-dialog>
      </div>

    </v-container>
  </div>
  <LoadingImage v-if="waiting"></LoadingImage>
</template>

<style scoped lang="scss">
.order_panel {
  background-color: #FFFDE7;
  border-radius: 20px;

  .order_id {
    transition: 0.4s;

    &:hover {
      color: red;
    }
  }
}
</style>

<script setup>
import { ref, reactive, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { isMobilePhone } from 'validator'
import LoadingImage from '../../components/LoadingImage.vue'

const router = useRouter()

const waiting = ref(false)
const loading = ref(false)
const dialog = ref(false)
const dialog2 = ref(false)
const item = ref('全部')

const orders = reactive([])
const form = reactive({
  _id: '',
  nickname: '',
  cellphone: '',
  address: '',
  receiver: '',
  state: 0,
  idx: 0,
  valid: false,
  submitting: false
})

const rules = reactive({
  required(v) {
    return !!v || '必填'
  },
  isMobilePhone(v) {
    return isMobilePhone(v, 'zh-TW') || '手機號碼格式錯誤'
  }
})

const items = reactive(['全部', '未付款', '訂單成立', '訂單取消'])
const orderState = reactive([
  { opt: '未付款', value: 0 },
  { opt: '訂單成立', value: 1 },
  { opt: '訂單取消', value: 2 }
])

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

const changeOrder = (i) => {
  const idx = orders.findIndex(item => item._id === i)
  form._id = orders[idx]._id
  form.nickname = orders[idx].user.nickname
  form.cellphone = orders[idx].cellphone
  form.receiver = orders[idx].receiver
  form.address = orders[idx].address
  form.state = orders[idx].state
  form.idx = idx
  dialog2.value = true
}

const submitForm = async () => {
  if (!form.valid) return
  form.submitting = true
  const change = {
    receiver: form.receiver,
    cellphone: form.cellphone,
    address: form.address,
    state: form.state
  }
  try {
    const { data } = await apiAuth.patch('/orders/' + form._id, change)
    orders[form.idx] = data.result
    // 把 totalPrice 物件加回去
    orders[form.idx].totalPrice = orders[form.idx].products.reduce((a, b) => {
      return a + b.product.price * b.quantity
    }, 0)
    // console.log(orders[form.idx])
    // console.log(data.result)
    console.log(orders)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '編輯成功'
    })
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  dialog2.value = false
  form.submitting = false
}

const init = async () => {
  try {
    waiting.value = true
    const { data } = await apiAuth.get('/orders/all')
    // console.log(data.result)
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
    loading.value = true
    waiting.value = false
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