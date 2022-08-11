<template>
  <v-container>
    <h1 class="text-center mt-15">購物車</h1>
    <v-row v-if="cart.length > 0" class="mt-4" v-for="(item, idx) in cart" :key="item._id"
      :class="{ 'bg-error': !item.product.sell }">
      <v-col cols="12" md="">
        <v-img :src="item.product.image" @click="router.push(`/product/${item.product._id}`)" style="cursor: pointer;">
        </v-img>
      </v-col>
      <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
        <h2 @click="router.push(`/product/${item.product._id}`)" style="cursor: pointer;">{{ item.product.name }}</h2>
      </v-col>
      <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
        <span class="text-h6">${{ item.product.price }}</span>
      </v-col>
      <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
        <v-btn icon variant="text" @click="update(idx, item.quantity - 1)" :disabled="item.quantity < 2">
          <v-icon icon="mdi-minus"></v-icon>
        </v-btn>
        <span class="ms-3 me-3 text-h6">{{ item.quantity }}</span>
        <v-btn icon variant="text" @click="update(idx, item.quantity + 1)">
          <v-icon icon="mdi-plus"></v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
        <span class="text-h6">${{ item.product.price * item.quantity }}</span>
      </v-col>
      <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
        <v-btn icon variant="text" color="red" @click="update(idx, 0)">
          <v-icon icon="mdi-trash-can-outline"></v-icon>
        </v-btn>
      </v-col>
      <v-divider></v-divider>
    </v-row>
    <h1 v-else class="text-h1 text-center mt-10">沒有商品哦</h1>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="3" class="text-center mt-10">
        <span class="text-h6">總價 : NT.{{ totalPrice }}</span>
      </v-col>
    </v-row>
    <v-form v-model="valid" @submit.prevent="submit">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="form.receiver" type="text" label="收件者姓名" placeholder="請輸入收件者姓名" counter="10"
            maxlength="10" :rules="[rules.required]" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="form.cellphone" type="text" label="收件者電話" placeholder="請輸入收件者電話"
            :rules="[rules.required, rules.isMobilePhone]" variant="outlined">
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="form.address" type="text" label="收件地址" placeholder="請輸入收件地址" :rules="[rules.required]"
            variant="outlined">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="2" class="ma-auto">
          <v-btn color="warning" block variant="outlined" type="submit" :disabled="!canCheckout">
            確認並送出
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<style scoped lang="scss">
</style>

<script setup>
import { ref, reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { isMobilePhone } from 'validator'


const router = useRouter()

const user = useUserStore()
const { updateCart, checkout } = user

const valid = ref(false)
// const loading = ref(false)

const cart = reactive([])
const form = reactive({
  receiver: '',
  cellphone: '',
  address: ''
})

const rules = reactive({
  required(v) {
    return !!v || '必填'
  },
  isMobilePhone(v) {
    return isMobilePhone(v, 'zh-TW') || '手機號碼格式錯誤'
  }
})

const totalPrice = computed(() => {
  return cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
})

const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(item => {
    return !item.product.sell
  })
})

const update = async (idx, quantity) => {
  const result = await updateCart({ product: cart[idx].product._id, quantity })
  if (result) {
    if (quantity === 0) {
      cart.splice(idx, 1)
    } else {
      cart[idx].quantity = quantity
    }
  }
}

const submit = async () => {
  if (!valid.value) return
  // loading.value = true
  checkout({
    receiver: form.receiver,
    cellphone: form.cellphone,
    address: form.address
  })
  form.receiver = ''
  form.cellphone = ''
  form.address = ''
  // loading.value = false
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>