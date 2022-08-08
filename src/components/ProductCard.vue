<template>
  <v-card>
    <v-img :src="product.image" height="300" cover @click="router.push(`/product/${product._id}`)"
      style="cursor:pointer"></v-img>
    <v-card-title>
      <h2>
        {{ product.name }}
      </h2>
    </v-card-title>
    <v-card-actions>
      <h2 class="ms-2">${{ product.price }}</h2>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon icon="mdi-cart"></v-icon>
        <v-dialog v-model="dialog" activator="parent">
          <v-card width="500">
            <v-img cover :src="product.image" height="400"></v-img>
            <v-card-title class="text-center mt-5">
              <h2>{{ product.name }}</h2>
            </v-card-title>
            <v-card-text class="text-center">
              <v-container>
                <h2 class="mb-5">${{ product.price }}</h2>
                <v-form v-model="valid" @submit.prevent="submit">
                  <v-select v-model="quantity" :items="quantities" :rules="[rules.required]"></v-select>
                  <v-btn block color="primary" type="submit" prepend-icon="mdi-cart">加入購物車</v-btn>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-btn>
      <v-btn icon v-if="isLike" @click="deleteLike({ product: product._id })">
        <v-icon icon="mdi-heart"></v-icon>
      </v-btn>
      <v-btn icon @click="addLike({ product: product._id })" v-else>
        <v-icon icon="mdi-heart-outline"></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const user = useUserStore()
const router = useRouter()
const { addCart, addLike, deleteLike } = user
const { likes } = storeToRefs(user)


// 下面函式可用到裡面的值
const props = defineProps(['product'])

const dialog = ref(false)
const valid = ref(false)
const quantity = ref('1')
// const isLike = ref(false)


const quantities = reactive(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
const rules = reactive({
  required(v) {
    return !!v || '請選擇數量'
  }
})

const submit = () => {
  if (!valid.value) return
  addCart({ product: props.product._id, quantity: parseInt(quantity.value) })
  dialog.value = false
  quantity.value = '1'
}

// pinia 的值要加 value 取的到值
const isLike = computed(() => {
  return (likes.value.findIndex(item => item.product.toString() === props.product._id.toString()) > -1)
})





</script>