<template>
  <v-container>
    <h1 class="text-h2 text-center mt-15"><b>最新消息管理</b></h1>
    <v-btn class="mt-5 mb-15" color="success" @click="openDialog('', -1)">新增最新消息</v-btn>
    <v-row v-if="news.length > 0" v-for="(n, idx) in news" :key="n._id" class="mt-3">
      <v-col cols="" class="d-flex align-center">
        <h2 @click="router.push('/news/' + n._id)" style="cursor:pointer;">
          ֍ {{ n.title }}
        </h2>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="" class="d-flex align-center justify-end">
        <v-icon v-if="n.shownews" icon="mdi-eye-outline"></v-icon>
        <v-icon v-else icon="mdi-eye-off-outline"></v-icon>
        <v-btn icon variant="text" class="mr-3" @click="openDialog(n._id, idx)">
          <v-icon icon="mdi-pen"></v-icon>
        </v-btn>
        <div class="column_divider mr-3"></div>
        <span style="width: 200px;">{{ new Date(n.date).toLocaleString() }}</span>
      </v-col>
      <v-divider></v-divider>
    </v-row>
    <v-row v-else>
      <v-col cols="12" class="text-center">沒有最新消息</v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="dialog" persistent>
    <v-form v-model="valid" @submit.prevent="submitForm">
      <v-card>
        <v-card-title class="text-center mt-5">
          <h2>{{ form._id.length > 0 ? '編輯最新消息' : '新增最新消息' }}</h2>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="form.title" variant="outlined" label="標題" :rules="[rules.required]">
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-checkbox v-model="form.shownews" label="刊登">
                </v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="form.content" label="最新消息內容" :rules="[rules.required]" variant="outlined">
                </v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="outlined" @click="dialog = false" :disabled='submitting'>關閉</v-btn>
          <v-btn color="warning" variant="outlined" type="submit" :loading="submitting">
            確認
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<style scoped lang="scss">
.column_divider {
  width: 2px;
  height: 50px;
  background: grey;
}
</style>

<script setup>
import { ref, reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const dialog = ref(false)
const valid = ref(false)
const submitting = ref(false)

const news = reactive([])
const form = reactive({
  _id: '',
  title: '',
  content: '',
  shownews: false,
  idx: -1
})

const rules = reactive({
  required(v) {
    return !!v || '必填'
  }
})

const openDialog = (_id, idx) => {
  form._id = _id
  form.idx = idx
  if (idx > -1) {
    form.title = news[idx].title
    form.content = news[idx].content
    form.shownews = news[idx].shownews
  } else {
    form.title = ''
    form.content = ''
    form.shownews = false
  }
  dialog.value = true
}

const submitForm = async () => {
  if (!valid) return
  submitting.value = true
  const fm = {
    title: form.title,
    content: form.content,
    shownews: form.shownews
  }
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/news', fm)
      news.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/news/' + form._id, fm)
      news[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '修改成功'
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  dialog.value = false
  submitting.value = false
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/news/all')
    news.push(...data.result)
  } catch (error) {
    // console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

init()
</script>