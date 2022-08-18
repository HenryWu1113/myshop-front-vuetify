<template>
  <div class="container pt-10">
    <h1 class="text-center">Products</h1>
    <v-btn class="mt-5" color="success" @click="openDialog('', -1)">新增商品</v-btn>
    <v-row class="mt-10">
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th class="text-h6">圖片</th>
              <th class="text-h6">名稱</th>
              <th class="text-h6">分類</th>
              <th class="text-h6">上架</th>
              <th class="text-h6">管理</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="products.length > 0" v-for="(product, idx) in products" :key="product._id">
              <td>
                <v-img :src="product.image" cover height="200"></v-img>
              </td>
              <td>
                {{ product.name }}
              </td>
              <td>
                {{ product.category }}
              </td>
              <td>
                {{ product.sell === true ? '上架中' : '已下架' }}
              </td>
              <td>
                <v-btn icon color="primary" variant="text" @click="openDialog(product._id, idx)">
                  <v-icon icon="mdi-pen"></v-icon>
                </v-btn>
              </td>
            </tr>
            <tr v-else>
              <td class="text-center" colspan="5">沒有商品</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </div>
  <v-dialog v-model="form.dialog" persistent>
    <v-form @submit.prevent="submitForm" v-model="form.valid">
      <v-card>
        <v-card-title>
          <h2 class="text-center mt-5">{{ form._id.length > 0 ? '編輯商品' : '新增商品' }}</h2>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="form.name" label="商品名稱" :rules="[rules.required]" variant="outlined"
                  append-inner-icon="mdi-star-outline">
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field type="number" min="0" v-model="form.price" label="商品價格"
                  :rules="[rules.required, rules.price]" variant="outlined" append-inner-icon="mdi-bitcoin">
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select :items="categories" type="number" min="0" v-model="form.category" label="商品分類"
                  :rules="[rules.required]" variant="outlined" append-inner-icon="mdi-lipstick"></v-select>
              </v-col>
              <v-col cols="12">
                <v-checkbox v-model="form.sell" label="上架"></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-file-input v-model="form.image" show-size accept='image/*' label="商品圖片" :rules="[rules.size]"
                  variant="outlined" prepend-icon="" append-inner-icon="mdi-link-variant">
                </v-file-input>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="form.description" label="商品描述" variant="outlined"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" @click="form.dialog = false" :disabled="form.submitting" variant="outlined">取消</v-btn>
          <v-btn type="submit" color="primary" :loading="form.submitting" variant="outlined">確定</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<style scoped lang="scss">
// .container {
//   width: 80%;
//   margin: auto;
// }
</style>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios.js';

const products = reactive([])
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
  dialog: false,
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

const openDialog = (_id, idx) => {
  console.log(form.image);
  form._id = _id
  if (idx > -1) {
    form.name = products[idx].name
    form.price = products[idx].price
    form.category = products[idx].category
    form.sell = products[idx].sell
    form.description = products[idx].description
  } else {
    form.name = ''
    form.price = 0
    form.category = ''
    form.sell = false
    form.description = ''
  }
  form.image = []
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

const submitForm = async () => {
  if (!form.valid) return
  form.submitting = true

  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'valid', 'submitting', 'dialog'].includes(key)) continue
    else if (key === 'image') fd.append(key, form[key][0])
    else fd.append(key, form[key])
  }
  // console.log(fd)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      products[form.idx] = data.result
      console.log(form)
      console.log(form.idx)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
    console.log(products)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

init()
</script>