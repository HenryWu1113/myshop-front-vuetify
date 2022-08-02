<template>
  <div class="container pt-10">
    <h1 class="text-center">Products</h1>
    <v-btn class="mt-5" color="success" @click="dialog = true">新增商品</v-btn>
    <v-row class="mt-10">
      <v-col cols="12" sm="6" md="4" class="text-center">
      </v-col>
      <v-col cols="12" class="text-center">
        <p>沒有商品</p>
      </v-col>
    </v-row>
  </div>
  <v-dialog v-model="dialog">
    <v-form @submit.prevent="submitForm" v-model="form.valid">
      <v-card>
        <v-card-title>
          <h2 class="text-center">{{ form._id > 0 ? '編輯商品' : '新增商品' }}</h2>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="form.name" label="商品名稱"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field type="number" min="0" v-model="form.price" label="商品價格"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select :items="categories" type="number" min="0" v-model="form.category" label="商品分類"></v-select>
              </v-col>
              <v-col cols="12">
                <v-checkbox v-model="form.sell" label="上架"></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-file-input v-model="form.image" show-size accept='image/*' label="商品圖片"></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="form.description" label="商品描述"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-action>
          <v-spacer></v-spacer>
          <v-btn type="submit" color="primary" :loading="form.submitting">確定</v-btn>
          <v-btn color="warning" @click="dialog = false">取消</v-btn>
        </v-card-action>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<style scoped lang="scss">
.container {
  width: 1200px;
  margin: auto;
}
</style>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'


const products = ref([])
const dialog = ref(false)
const categories = reactive(['芒果', '香蕉', '火龍果'])
const form = reactive({
  _id: '',
  name: '',
  price: '',
  category: '',
  description: '',
  image: [],
  sell: false,
  idx: -1,
  valid: false,
  submitting: false
})

const rules = reactive({
  required(v) {
    return !!v || '必填'
  },
  price(v) {
    return v > -1 || '必須大於等於 0'
  },
  size(v) {
    return !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024) || '檔案格式不符'
  }
})

const submitForm = async () => {
  if (!form.valid) return
  form.submitting = true

  try {

  } catch (error) {

  }
}
</script>