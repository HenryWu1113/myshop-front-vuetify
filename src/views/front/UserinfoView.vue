<template>
  <div class="MyContainer">
    <h1 class="text-h2 text-center mt-15"><b>個人資料</b></h1>
    <div class="user_info_card">
      <v-row>
        <v-col cols="12" md="5" lg="6">
          <img :src="users.avatar" class="info_pic">
        </v-col>
        <v-col cols="12" md="7" lg="6" class="d-flex flex-column justify-center">
          <span class="text-h4">帳號 : {{ users.account }}</span>
          <span class="text-h4">暱稱 : {{ users.nickname }}</span>
          <span class="text-h4">信箱 : {{ users.email }}</span>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn variant="outlined" color="warning" @click="changeinfo">編輯個人資料</v-btn>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" persistent>
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
                      variant="outlined" disabled>
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
                    <v-file-input v-model="form.avatar" show-size accept='image/*' label="大頭貼" :rules="rules.size"
                      variant="outlined" prepend-icon="" append-inner-icon="mdi-link-variant">
                    </v-file-input>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="warning" @click="dialog = false">取消</v-btn>
              <v-btn type="submit" color="primary">確定</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user_info_card {
  // border: 1px solid #000;

  .info_pic {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
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
import { storeToRefs } from 'pinia'


const user = useUserStore()
const { editUser } = user
const { nickname, email, account, avatar } = storeToRefs(user)

const dialog = ref(false)
const valid = ref(false)

const users = reactive({
  account: '',
  email: '',
  nickname: '',
  avatar: []
})

// const users = reactive([])

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
  ],
  size: [
    v => !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024) || '檔案格式不符'
  ]
})

const changeinfo = () => {
  dialog.value = true
  form.account = account.value
  form.email = email.value
  form.nickname = nickname.value
  form.avatar = []
}

const submitForm = async () => {
  if (!valid.value) return
  const fd = new FormData()
  for (const key in form) {
    if (['account'].includes(key)) continue
    // key 的名稱要跟後台 upload 裡面的 upload.single('image') 的 image 名稱一樣
    else if (key === 'avatar') fd.append('image', form[key][0])
    else fd.append(key, form[key])
  }
  const result = await editUser(fd)
  console.log(fd)
  if (result) {
    // console.log(nickname.value)
    users.account = account.value
    users.email = email.value
    users.nickname = nickname.value
    users.avatar = avatar.value
  }
  dialog.value = false
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    form.account = data.result.account
    form.email = data.result.email
    form.nickname = data.result.nickname
    // form.avatar = data.result.avatar
    users.account = data.result.account
    users.email = data.result.email
    users.nickname = data.result.nickname
    users.avatar = data.result.avatar
    // users.push(data.result)
    console.log(users)
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