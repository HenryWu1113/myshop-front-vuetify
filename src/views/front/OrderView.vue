<template>
  <div id="front_order_view">
    <div class="MyContainer">
      <h1 class="text-h2 text-center mt-15 text-brown font-weight-bold" data-aos="fade-down" data-aos-duration="1000"
        data-aos-offset="150">{{ $t('orderrecord') }}</h1>
      <v-row class="mt-5">
        <v-col cols="12" md="3">
          <v-select v-model="item" variant="outlined" :items="items" append-inner-icon="mdi-filter-menu-outline">
          </v-select>
        </v-col>
      </v-row>
      <v-row class="d-none d-lg-flex">
        <v-col class="text-h6">
          <span>{{ $t('orderid') }}</span>
        </v-col>
        <v-col class="text-h6">
          <span>{{ $t('orderdate') }}</span>
        </v-col>
        <v-col class="text-h6">
          <span>{{ $t('orderstate') }}</span>
        </v-col>
        <v-col class="text-h6">
          <span>{{ $t('totalprice') }}</span>
        </v-col>
        <v-col class="text-h6">
          <span>{{ $t('detail') }}</span>
        </v-col>
      </v-row>
      <v-divider class="mb-10 d-none d-lg-block"></v-divider>
      <div class="order_panel">
        <v-row v-if="orders.length > 0" v-for="order in filtereditems" :key="order._id" class="pt-3 pb-3 mt-10"
          style="border-left:3px solid #FFEB3B">
          <v-col cols="12" lg="" class="d-flex align-center">
            <span class="d-lg-none" @click="router.push('/order/' + order._id)" style="cursor: pointer;">{{
                $t('orderid')
            }}
              : </span>
            <span @click="router.push('/order/' + order._id)" style="cursor: pointer;" class="order_id">{{ order._id
            }}</span>
          </v-col>
          <v-col cols="12" lg="" class="d-flex align-center">
            <span class="d-lg-none">{{ $t('orderdate') }} : </span>
            <span v-if="$i18n.locale === 'tw'">{{ new Date(order.date).toLocaleString('zh-TW')
            }}</span>
            <span v-else-if="$i18n.locale === 'en'">{{ new Date(order.date).toLocaleString('en-US')
            }}</span>
            <span v-else>{{ new Date(order.date).toLocaleString('ja-JP')
            }}</span>
          </v-col>
          <v-col cols="12" md="4" lg="" class="d-flex align-center">
            <span class="d-lg-none">{{ $t('orderstate') }} : </span>
            <span v-if="order.state === 0">{{ $t('unpaid') }}</span>
            <span v-else-if="order.state === 1">{{ $t('orderestablished') }}</span>
            <span v-else="order.state === 2">{{ $t('ordercancel') }}</span>
          </v-col>
          <v-col cols="12" md="4" lg="" class="d-flex align-center">
            <span class="d-lg-none">{{ $t('totalprice') }} : </span>
            <span>NT. {{ order.totalPrice }}</span>
          </v-col>
          <v-col cols="12" md="4" lg="">
            <span class="d-lg-none">{{ $t('detail') }} : </span>
            <v-btn icon variant="text" @click="openDialog(order._id)">
              <v-icon icon="mdi-plus"></v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col v-if="loading" cols="12" class="text-center text-h3 mt-10 font-weight-bold">{{ $t('noorder') }}</v-col>
        </v-row>
        <v-dialog v-model="dialog">
          <v-card>
            <v-card-title>
              <h3 class="text-center mt-4 text-brown">~~~~~ {{ $t('orderid') }} :{{ form._id }} ~~~~~</h3>
            </v-card-title>
            <v-card-text>
              <v-row class="d-none d-md-flex">
                <v-col cols="12" md="5">
                  <span class="text-brown">{{ $t('product') }}</span>
                </v-col>
                <v-col cols="12" md="2">
                  <span class="text-brown">{{ $t('singleprice') }}</span>
                </v-col>
                <v-col cols="12" md="2">
                  <span class="text-brown">{{ $t('amount') }}</span>
                </v-col>
                <v-col cols="12" md="3">
                  <span class="text-brown">{{ $t('totalprice') }}</span>
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
                  <span class="d-md-none text-brown">{{ $t('singleprice') }} : </span>
                  <span class="text-deep-orange">NT. {{ product.product.price }}</span>
                </v-col>
                <v-col cols="4" md="2">
                  <span class="d-md-none text-brown">{{ $t('amount') }} : </span>
                  <span class="text-brown">{{ product.quantity }}</span>
                </v-col>
                <v-col cols="4" md="3">
                  <span class="d-md-none text-brown">{{ $t('totalprice') }} : </span>
                  <span class="text-deep-orange">NT. {{ product.product.price * product.quantity }}</span>
                </v-col>
                <v-divider class="d-md-none"></v-divider>
              </v-row>
              <v-divider class="d-none d-md-block"></v-divider>
            </v-card-text>
            <v-card-actions>
              <v-btn color="brown" block @click="dialog = false">{{ $t('close') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
  <LoadingImage v-if="waiting"></LoadingImage>
</template>

<style scoped lang="scss">
</style>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import AOS from "aos"
import i18n from '@/i18n'
import LoadingImage from '../../components/LoadingImage.vue'
// import { useLoading } from 'vue3-loading-overlay';
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// const loader = useLoading()
const waiting = ref(false)
const loading = ref(false)

onMounted(() => {
  AOS.init();
})

const router = useRouter()

const dialog = ref(false)
const item = ref('')

const orders = reactive([])
const form = reactive({
  _id: '',
  idx: 0
})
const items = reactive(['全部', '未付款', '訂單成立', '訂單取消'])

const filtereditems = computed(() => {
  if (item.value === '全部' || item.value === 'All') return orders
  else if (item.value === '未付款' || item.value === 'Unpaid' || item.value === '未払い') return orders.filter(item => item.state === 0)
  else if (item.value === '訂單成立' || item.value === 'Order Established' || item.value === '注文確定') return orders.filter(item => item.state === 1)
  else return orders.filter(item => item.state === 2)
})

const openDialog = (i) => {
  const idx = orders.findIndex(item => item._id === i)
  form._id = orders[idx]._id
  form.idx = idx
  dialog.value = true
}

// 暴力破解 
setInterval(() => {
  if (i18n.global.locale === 'tw') {
    if (item.value === 'All') {
      item.value = '全部'
    } else if (item.value === 'Unpaid' || item.value === '未払い') {
      item.value = '未付款'
    } else if (item.value === 'Order Established' || item.value === '注文確定') {
      item.value = '訂單成立'
    } else if (item.value === 'Order Canceled' || item.value === '注文を取り消す') {
      item.value = '訂單取消'
    }
    items[0] = '全部'
    items[1] = '未付款'
    items[2] = '訂單成立'
    items[3] = '訂單取消'
  } else if (i18n.global.locale === 'en') {
    if (item.value === '全部') {
      item.value = 'All'
    } else if (item.value === '未付款' || item.value === '未払い') {
      item.value = 'Unpaid'
    } else if (item.value === '訂單成立' || item.value === '注文確定') {
      item.value = 'Order Established'
    } else if (item.value === '訂單取消' || item.value === '注文を取り消す') {
      item.value = 'Order Canceled'
    }
    items[0] = 'All'
    items[1] = 'Unpaid'
    items[2] = 'Order Established'
    items[3] = 'Order Canceled'
  } else {
    if (item.value === 'All') {
      item.value = '全部'
    } else if (item.value === '未付款' || item.value === 'Unpaid') {
      item.value = '未払い'
    } else if (item.value === '訂單成立' || item.value === 'Order Established') {
      item.value = '注文確定'
    } else if (item.value === '訂單取消' || item.value === 'Order Canceled') {
      item.value = '注文を取り消す'
    }
    items[0] = '全部'
    items[1] = '未払い'
    items[2] = '注文確定'
    items[3] = '注文を取り消す'
  }
}, 100)

const init = async () => {
  try {
    if (i18n.global.locale === 'tw') {
      item.value = '全部'
      items[0] = '全部'
      items[1] = '未付款'
      items[2] = '訂單成立'
      items[3] = '訂單取消'
    }
    else if (i18n.global.locale === 'en') {
      item.value = 'All'
      items[0] = 'All'
      items[1] = 'Unpaid'
      items[2] = 'Order Established'
      items[3] = 'Order Canceled'
    } else {
      item.value = '全部'
      items[0] = '全部'
      items[1] = '未払い'
      items[2] = '注文確定'
      items[3] = '注文を取り消す'
    }
    waiting.value = true
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
    // loader.hide()
    waiting.value = false
    loading.value = true
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
}

init()
</script>