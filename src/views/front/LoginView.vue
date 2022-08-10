<template>
  <v-form v-model="valid" @submit.prevent="login">
    <v-card class="ma-auto" max-width="800">
      <v-card-title class="text-center mt-5">
        <img class="register-logo" src="../../assets/Logo.png">
        <p class="text-h4">登入</p>
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
          </v-row>
          <div class="d-flex justify-center">
            <v-btn color="success" variant="flat" type="submit">
              登入
            </v-btn>
          </div>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-3" to="/register">註冊</v-btn>
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
import { useUserStore } from '@/stores/user'

const showpwd = ref(false)
const valid = ref(false)

const user = useUserStore()

const form = reactive({
  account: '',
  password: ''
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
  ]
})

const login = () => {
  user.login(form)
}


</script>