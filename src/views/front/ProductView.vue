<template>
  <div id="product_view" class="mt-15 animate__animated animate__zoomInDown">
    <div class="MyContainer">
      <v-row>
        <v-col cols="12" lg="7">
          <v-img :src="product.image" style="border-radius:40px 5px; box-shadow: 5px 5px 10px #FFE082;" class="border">
          </v-img>
        </v-col>
        <v-col cols="12" lg="5">
          <div class="product_title d-flex justify-space-between">
            <h1 class="text-brown">{{ product.name }}</h1>
            <v-sapcer></v-sapcer>
            <v-btn icon v-if="isLike" @click="deleteLike({ product: product._id })" variant="text" class="text-red">
              <v-icon icon="mdi-heart" class="icon"></v-icon>
            </v-btn>
            <v-btn icon v-else @click="addLike({ product: product._id })" variant="text" class="text-red">
              <v-icon icon="mdi-heart-outline" class="icon"></v-icon>
            </v-btn>
          </div>
          <div class="product_content mt-10">
            <p style="white-space: pre-wrap;" class="text-h6">{{ product.description }}</p>
          </div>
          <div class="product_price mt-10">
            <h2 class="text-deep-orange">NT. {{ product.price }}</h2>
          </div>
          <div class="product_amount mt-5">
            <v-form v-model="valid" @submit.prevent="submit">
              <v-row>
                <v-col cols="4" lg="4">
                  <v-select v-model="quantity" :items="quantities" :rules="[rules.required]" variant="outlined"
                    density="compact">
                  </v-select>
                </v-col>
                <v-col cols="8"></v-col>
                <!-- <v-spacer></v-spacer> -->
                <v-col cols="6" lg="4">
                  <v-btn block color="brown" variant="outlined" prepend-icon="mdi-arrow-left" @click="router.go(-1)">
                    {{ $t('back') }}</v-btn>
                </v-col>
                <v-col cols="6" lg="8">
                  <v-btn block color="orange" type="submit" prepend-icon="mdi-cart" variant="outlined">{{ $t('addcart')
                  }}</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-col>
        <!-- <v-col cols="12" class="mt-5 text-center">
          <v-btn color="primary" variant="outlined" prepend-icon="mdi-arrow-left" @click="router.go(-1)">
            ????????????</v-btn>
        </v-col> -->
        <v-overlay v-if="loading" class="align-center justify-center" :model-value='!product.sell'>
          <h1 class="text-white">?????????</h1>
          <v-btn variant="outlined" color="white" block @click="router.push('/')">{{ $t('gohome') }}</v-btn>
        </v-overlay>
      </v-row>
    </div>
  </div>
  <LoadingImage v-if="waiting"></LoadingImage>
</template>

<style scoped lang="scss">
.icon {
  font-size: 2.5rem;
}
</style>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import LoadingImage from '../../components/LoadingImage.vue'
// import { useLoading } from 'vue3-loading-overlay';
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// const loader = useLoading()
const loading = ref(false)
const waiting = ref(false)

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
    return !!v || '???????????????'
  }
})

const submit = () => {
  if (!valid.value) return
  addCart({ product: product._id, quantity: parseInt(quantity.value) })
  quantity.value = '1'
}

// pinia ???????????? value ????????????
const isLike = computed(() => {
  return (likes.value.findIndex(item => item.product.toString() === product._id.toString()) > -1)
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
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.catagory = data.result.catagory
    product.sell = data.result.sell
    product.image = data.result.image
    product.description = data.result.description
    // loader.hide()
    waiting.value = false
    loading.value = true
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '??????',
      text: '????????????????????????'
    })
    router.go(-1)
  }
}

init()
</script>