<template>
  <div class="container">
    <v-row>
      <v-col cols="12" lg="7">
        <v-img :src="product.image"></v-img>
      </v-col>
      <v-col cols="12" lg="5">
        <div class="product_title d-flex justify-space-between">
          <h1>{{ product.name }}</h1>
          <v-sapcer></v-sapcer>
          <v-btn icon v-if="isLike" @click="deleteLike({ product: product._id })">
            <v-icon icon="mdi-heart"></v-icon>
          </v-btn>
          <v-btn icon @click="addLike({ product: product._id })" v-else>
            <v-icon icon="mdi-heart-outline"></v-icon>
          </v-btn>
        </div>
        <div class="product_content mt-10">
          <p>{{ product.description }}</p>
        </div>
        <div class="product_price mt-10">
          <h2>${{ product.price }}</h2>
        </div>
        <div class="product_amount mt-5">
          <v-form v-model="valid" @submit.prevent="submit">
            <v-row>
              <v-col cols="4" lg="4">
                <v-select v-model="quantity" :items="quantities" :rules="[rules.required]" variant="outlined">
                </v-select>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="8" lg="5">
                <v-btn block color="warning" type="submit" prepend-icon="mdi-cart">加入購物車</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </div>
      </v-col>
      <v-col cols="12" class="mt-5 text-center">
        <v-btn color="primary" variant="outlined" prepend-icon="mdi-cart" @click="router.go(-1)">
          回上一頁</v-btn>
      </v-col>
      <v-overlay class="align-center justify-center" :model-value='!product.sell'>
        <h1 class="text-white">已下架</h1>
      </v-overlay>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: auto;
  width: 80%;
  max-width: 1110px;
  margin-top: 8rem;
}
</style>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()
const user = useUserStore()
const { addCart, addLike, deleteLike } = user
const { likes } = storeToRefs(user)

const valid = ref(false)
const quantity = ref('1')

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  category: '',
  sell: false,
  image: '',
  description: ''
})

const quantities = reactive(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])

const rules = reactive({
  required(v) {
    return !!v || '請選擇數量'
  }
})

const submit = () => {
  if (!valid.value) return
  addCart({ product: product._id, quantity: parseInt(quantity.value) })
  quantity.value = '1'
}

// pinia 的值要加 value 取的到值
const isLike = computed(() => {
  return (likes.value.findIndex(item => item.product.toString() === product._id.toString()) > -1)
})

const init = async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.catagory = data.result.catagory
    product.sell = data.result.sell
    product.image = data.result.image
    product.description = data.result.description
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品資料失敗'
    })
    router.go(-1)
  }
}

init()
</script>