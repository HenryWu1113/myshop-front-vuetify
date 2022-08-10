<template>
  <v-form v-model="valid" @submit.prevent="register">
    <v-card class="ma-auto" max-width="800">
      <v-card-title class="text-center mt-5">
        <img class="register-logo" src="../../assets/Logo.png">
        <p class="text-h4">註冊</p>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field type="account" label="帳號" placeholder="請輸入帳號" counter="20" maxlength="20"
                v-model="form.account" :rules="rules.account" clearable clear-icon="mdi-delete"
                append-icon="mdi-account-outline" variant="outlined">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field :type="showpwd ? 'text' : 'password'" label="密碼" placeholder="請輸入帳號" counter="20"
                maxlength="20" v-model="form.password" :rules="rules.password" clearable clear-icon="mdi-delete"
                :append-icon="showpwd ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showpwd = !showpwd"
                variant="outlined">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="暱稱" placeholder="請輸入暱稱" counter="10" maxlength="10" v-model="form.nickname"
                :rules="rules.nickname" clearable clear-icon="mdi-delete" append-icon="mdi-emoticon-happy-outline"
                variant="outlined">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field type="email" label="電子信箱" placeholder="請輸入電子信箱" v-model="form.email" :rules="rules.email"
                clearable clear-icon="mdi-delete" append-icon="mdi-email-outline" variant="outlined">
              </v-text-field>
            </v-col>
          </v-row>
          <div class="d-flex justify-center">
            <v-btn color="success" variant="flat" type="submit" :loading="loading">
              註冊
            </v-btn>
          </div>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-3" to="/login">前往登入頁面</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<style scoped>
.register-logo {
  width: 150px;
}
</style>

<script setup>
import { ref, reactive } from 'vue'
import { isEmail } from 'validator'
import { api } from '@/plugins/axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()

const showpwd = ref(false)
const valid = ref(false)
const loading = ref(false)

const form = reactive({
  account: '',
  password: '',
  nickname: '',
  email: ''
})

const rules = reactive({
  account: [
    v => !!v || '帳號必填',
    v => (v.length >= 4 && v.length <= 20) || '帳號長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號只能由英數字組成'
  ],
  password: [
    v => !!v || '密碼必填',
    v => (v.length >= 4 && v.length <= 20) || '密碼長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼只能由英數字組成'
  ],
  nickname: [
    v => !!v || '暱稱必填',
    v => (v && v.length <= 10) || '暱稱長度不得超過 10 個字'
  ],
  email: [
    v => !!v || '電子信箱必填',
    v => isEmail(v) || '電子信箱格式錯誤'
  ]
})

const register = async () => {
  if (!valid.value) return
  loading.value = true
  try {
    await api.post('/users', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
  loading.value = false
}

</script>