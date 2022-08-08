<template>
  <v-container>
    <h1 class="text-center mt-15">購物車</h1>
    <v-row class="mt-4" v-for="(item, idx) in cart" :key="item._id" :class="{ 'bg-error': !item.product.sell }">
      <v-col cols="12" md="">
        <v-img :src="item.product.image"></v-img>
      </v-col>
      <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
        <h2>{{ item.product.name }}</h2>
      </v-col>
      <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
        <span class="text-h6">${{ item.product.price }}</span>
      </v-col>
      <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
        <v-btn icon variant="text">
          <v-icon icon="mdi-minus"></v-icon>
        </v-btn>
        <span class="ms-3 me-3 text-h6">{{ item.quantity }}</span>
        <v-btn icon variant="text">
          <v-icon icon="mdi-plus"></v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
        <span class="text-h6">${{ item.product.price * item.quantity }}</span>
      </v-col>
      <v-col cols="12" md="" class="d-flex align-center justify-center text-center">
        <v-btn icon variant="text" color="red">
          <v-icon icon="mdi-trash-can-outline"></v-icon>
        </v-btn>
      </v-col>
      <v-divider></v-divider>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
</style>

<script setup>
import { ref, reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'


const user = useUserStore()
const { updateCart } = user

const cart = reactive([])



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