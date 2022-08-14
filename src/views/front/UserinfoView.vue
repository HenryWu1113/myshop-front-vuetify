<template>
  <v-container>
    <h1 class="text-h2 text-center mt-15"><b>個人資料</b></h1>
    <div class="user_info_card">
      <v-row>
        <v-col cols="12" md="5" lg="6">
          <img :src="form.avatar" class="info_pic">
        </v-col>
        <v-col cols="12" md="7" lg="6" class="d-flex flex-column justify-center">
          <span class="text-h4">帳號 : {{ form.account }}</span>
          <span class="text-h4">暱稱 : {{ form.nickname }}</span>
          <span class="text-h4">信箱 : {{ form.email }}</span>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn variant="outlined" color="warning" @click="changeinfo">編輯個人資料</v-btn>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog">
        <v-form @submit.prevent="submitForm" v-model="valid">
          <v-card>
            <v-card-title>
              <h1 class="text-center mt-3 mb-3">個人資料</h1>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field type="account" label="帳號" placeholder="請輸入帳號" counter="20" maxlength="20"
                      v-model="form.account" :rules="rules.account" append-inner-icon="mdi-account-outline"
                      variant="outlined">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="暱稱" placeholder="請輸入暱稱" counter="10" maxlength="10" v-model="form.nickname"
                      :rules="rules.nickname" append-inner-icon="mdi-emoticon-happy-outline" variant="outlined">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field type="email" label="電子信箱" placeholder="請輸入電子信箱" v-model="form.email"
                      :rules="rules.email" append-inner-icon="mdi-email-outline" variant="outlined">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-file-input v-model="form.as" show-size accept='image/*' label="大頭貼" :rules="[rules.size]"
                      variant="outlined" prepend-icon="" append-inner-icon="mdi-link-variant">
                    </v-file-input>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-form>
      </v-dialog>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.user_info_card {
  // border: 1px solid #000;

  .info_pic {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>

<script setup>
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { ref, reactive } from 'vue'
import { isEmail } from 'validator'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { editUser } = user

const dialog = ref(false)
const valid = ref(false)

const form = reactive({
  account: '',
  email: '',
  nickname: '',
  avatar: []
})

const rules = reactive({
  account: [
    v => !!v || '帳號必填',
    v => (v.length >= 4 && v.length <= 20) || '帳號長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號只能由英數字組成'
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

const changeinfo = () => {
  dialog.value = true
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    form.account = data.result.account
    form.email = data.result.email
    form.nickname = data.result.nickname
    form.avatar = data.result.avatar
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得個人資料'
    })
  }
}

init()

</script>