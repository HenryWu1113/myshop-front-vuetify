<template>
  <v-container>
    <h1 class="text-center mt-15">購物車</h1>
    <v-card class="bg-orange">
      <v-row class="mt-4" v-for="(item, idx) in cart" :key="item._id" :class="{ 'bg-error': !item.product.sell }">
        <v-col cols="12" md="">
          <v-img :src="item.product.image"></v-img>
        </v-col>
        <v-col cols="12" md="">
          <p>{{ item.product.name }}</p>
        </v-col>
        <v-col cols="12" md="">
          {{ item.product.price }}
        </v-col>
        <v-col cols="12" md="">
          <v-btn icon>
            <v-icon icon="mdi-minus"></v-icon>
          </v-btn>
          <span>{{ item.quantity }}</span>
          <v-btn icon>
            <v-icon icon="mdi-plus"></v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="">{{ item.product.price * item.quantity }}</v-col>
        <v-col cols="12" md="">
          <v-btn icon>
            <v-icon icon="mdi-trash-can-outline"></v-icon>
          </v-btn>
        </v-col>
        <v-divider></v-divider>
      </v-row>
    </v-card>

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