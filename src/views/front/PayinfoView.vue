<template>
  <div id="payinfo_view">
    <div class="MyContainer">
      <div class="order_slogan">
        <v-icon icon="mdi-thumb-up-outline"></v-icon>
        <h1 class="mt-2 font-weight-bold">{{ $t('thanks') }}</h1>
        <p class="mt-2">{{ $t('remind') }}</p>
      </div>
      <div class="order_info">
        <h1 class="mb-5 order_info_title">{{ $t('painfo') }}</h1>
        <div class="order_info_content">
          <h1>{{ $t('bankname') }} : </h1>
          <h1>華南銀行</h1>
        </div>
        <div class="order_info_content">
          <h1>{{ $t('banknumber') }} : </h1>
          <h1>777</h1>
        </div>
        <div class="order_info_content">
          <h1>{{ $t('accountname') }} : </h1>
          <h1>XX {{ $t('company') }}</h1>
        </div>
        <div class="order_info_content">
          <h1>{{ $t('accountnumber') }} : </h1>
          <h1>111111111111</h1>
        </div>
        <div class="order_info_content">
          <h1>{{ $t('deadline') }} : </h1>
          <h1>{{ new Date(orderinfo.deadline).toLocaleDateString() }} 23:00:00</h1>
        </div>
      </div>
      <div class="home_button">
        <v-btn prepend-icon="mdi-home" variant="outlined" color="brown" to="/">{{ $t('gohome') }}</v-btn>
      </div>
    </div>
  </div>
  <LoadingImage v-if="waiting"></LoadingImage>
</template>

<style scoped lang="scss">
</style>

<script setup>
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import LoadingImage from '../../components/LoadingImage.vue'
// import { useLoading } from 'vue3-loading-overlay';
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// const loader = useLoading()
const waiting = ref(false)
const route = useRoute()

const orderinfo = reactive({
  _id: '',
  deadline: ''
})

const init = async () => {
  try {
    // loader.show({
    //   color: 'orange',
    //   loader: 'bars',
    //   width: 100,
    //   height: 100
    // })
    waiting.value = true
    const { data } = await apiAuth.get('/orders/' + route.params.id)
    orderinfo._id = data.result._id
    orderinfo.deadline = data.result.deadline
    waiting.value = false
    // loader.hide()
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
