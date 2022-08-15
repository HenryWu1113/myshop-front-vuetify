<template>
  <v-container>
    <h1 class="text-h2 text-center mt-15"><b>會員管理</b></h1>
    <v-row class="mt-10">
      <v-col cols="12">
        <v-table>
          <thead>
            <th class="text-h6 text-left">帳號</th>
            <th class="text-h6 text-left">暱稱</th>
            <th class="text-h6 text-left">電子信箱</th>
            <th class="text-h6 text-left">權限</th>
            <!-- <th class="text-h6 text-left">管理</th> -->
          </thead>
          <tbody>
            <tr v-if="users.length > 0" v-for="(user, idx) in users" :key="user._id">
              <td class="pl-0">
                <span>{{ user.account }}</span>
              </td>
              <td class="pl-0">
                {{ user.nickname }}
              </td>
              <td class="pl-0">
                {{ user.email }}
              </td>
              <td v-if="user.role === 0" class="pl-0">
                <span>一般使用者</span>
              </td>
              <td v-else class="pl-0">
                <span>管理員</span>
              </td>
              <!-- <td class="pl-0">
                <v-btn icon color="primary" variant="text" @click="openDialog(user._id)">
                  <v-icon icon="mdi-delete" color="red"></v-icon>
                </v-btn>
              </td> -->
            </tr>
            <tr v-else>
              <td class="text-center" colspan="5">沒有會員</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <!-- <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title>
          <h2>確認刪除會員?</h2>
        </v-card-title>
        <v-card-text>
          <span>{{ users[idx].account }}</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" color="red">取消</v-btn>
          <v-btn @click="deleteUser" color="primary">確認</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios.js';

const dialog = ref(false)
const idx = ref(0)

const users = reactive([])

const openDialog = (i) => {
  dialog.value = true
  const idx = users.findIndex(item => item._id === i)
  idx.value = idx
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.push(...data.result)
    console.log(users)
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