<template>
  <div id="cart_view">
    <div class="MyContainer">
      <h1 class="text-h2 text-center text-brown font-weight-bold mt-10" data-aos="fade-down" data-aos-duration="1000"
        data-aos-offset="150">{{ $t('cart') }}</h1>
      <v-row v-if="cart.length > 0" class="mt-4" v-for="(item, idx) in cart" :key="item._id"
        :class="{ 'bg-grey-lighten-1 ': !item.product.sell }">
        <v-col cols="12" md="">
          <v-img :src="item.product.image" @click="router.push(`/product/${item.product._id}`)"
            style="cursor: pointer;">
          </v-img>
        </v-col>
        <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
          <h2 class="text-brown" @click="router.push(`/product/${item.product._id}`)" style="cursor: pointer;">{{
              item.product.name
          }}</h2>
        </v-col>
        <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
          <span class="text-h6 text-deep-orange">NT. {{ item.product.price }}</span>
        </v-col>
        <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
          <v-btn icon variant="text" @click="update(idx, item.quantity - 1)" :disabled="item.quantity < 2">
            <v-icon icon="mdi-minus" color="brown"></v-icon>
          </v-btn>
          <span class="ms-3 me-3 text-h6">{{ item.quantity }}</span>
          <v-btn icon variant="text" @click="update(idx, item.quantity + 1)">
            <v-icon icon="mdi-plus" color="brown"></v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
          <span class="text-h6 text-deep-orange">NT. {{ item.product.price * item.quantity }}</span>
        </v-col>
        <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
          <v-btn icon variant="text" color="red" @click="update(idx, 0)">
            <v-icon icon="mdi-trash-can-outline"></v-icon>
          </v-btn>
        </v-col>
        <v-divider class="d-none d-md-block"></v-divider>
      </v-row>
      <v-row v-else class="mt-15">
        <v-col v-if="loading" cols="12" class="text-center no_product_img">
          <img v-if="$i18n.locale === 'tw'" src="../../assets/pngwingtw.png"
            class="animate__animated animate__rubberBand">
          <img v-else-if="$i18n.locale === 'en'" src="../../assets/pngwingen.png"
            class="animate__animated animate__tada">
          <img v-else src="../../assets/pngwingjp.png" class="animate__animated animate__heartBeat">
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" md="3" class="text-center mt-10">
          <span class="text-h6 text-red">{{ $t('totalprice') }} : NT.{{ totalPrice }}</span>
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
            <v-text-field v-model="form.address" type="text" label="收件地址" placeholder="請輸入收件地址"
              :rules="[rules.required]" variant="outlined">
            </v-text-field>
          </v-col>
          <v-col cols="12" md="2" class="ma-auto">
            <v-btn color="warning" block variant="outlined" type="submit" :disabled="!canCheckout">
              {{ $t('confirmandsend') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
  <LoadingImage v-if="waiting"></LoadingImage>
</template>

<style scoped lang="scss">
</style>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { isMobilePhone } from 'validator'
import AOS from "aos"
import LoadingImage from '../../components/LoadingImage.vue'
import i18n from '@/i18n'
// import { useLoading } from 'vue3-loading-overlay';
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// const loader = useLoading()
const loading = ref(false)
const waiting = ref(false)

onMounted(() => {
  AOS.init();
})

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
  // loading.value = false
}

const init = async () => {
  try {
    form.receiver = ''
    form.cellphone = ''
    form.address = ''
    waiting.value = true
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
    // loader.hide()
    waiting.value = false
    loading.value = true
  } catch (error) {
    if (i18n.global.locale === 'tw') {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '伺服器錯誤'
      })
    } else if (i18n.global.locale === 'en') {
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Server Error'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: 'サーバーエラー'
      })
    }
  }
}
init()
</script>