<template>
  <div id="product_card">
    <v-card variant="outlined" color="amber">
      <v-img :src="product.image" height="300" cover @click="router.push(`/product/${product._id}`)"
        style="cursor:pointer"></v-img>
      <v-card-title class="pt-5 pb-5">
        <h2 class="text-brown">
          {{ product.name }}
        </h2>
      </v-card-title>
      <v-card-actions class="pt-2">
        <h2 class="ms-2 text-deep-orange">NT. {{ product.price }}</h2>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon icon="mdi-cart" class="text-brown"></v-icon>
          <v-dialog v-model="dialog" activator="parent">
            <v-card width="500">
              <v-img cover :src="product.image" height="400"></v-img>
              <v-card-title class="text-center mt-5">
                <h2 class="text-brown">{{ product.name }}</h2>
              </v-card-title>
              <v-card-text class="text-center">
                <v-container>
                  <h2 class="mb-5 text-deep-orange">NT. {{ product.price }}</h2>
                  <v-form v-model="valid" @submit.prevent="submit">
                    <v-select v-model="quantity" :items="quantities" :rules="[rules.required]" variant="outlined">
                    </v-select>
                    <v-btn block color="orange" type="submit" prepend-icon="mdi-cart">加入購物車</v-btn>
                  </v-form>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-btn>
        <v-btn icon v-if="isLike" @click="deleteLike({ product: product._id })" variant="text">
          <v-icon icon="mdi-heart" class="text-red"></v-icon>
        </v-btn>
        <v-btn icon @click="addLike({ product: product._id })" v-else variant="text">
          <v-icon icon="mdi-heart-outline" class="text-red"></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>

</template>

<style scoped lang="scss">
#product_card {
  transition: 0.4s;
  box-shadow: 0 3px 8px #ffc107a9;
}

#product_card:hover {
  transform: translateY(-15px);
  box-shadow: 0 3px 13px #ffc107;

}
</style>

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