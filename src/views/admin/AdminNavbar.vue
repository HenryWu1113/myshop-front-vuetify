<template>
  <v-app-bar height="100" color="amber">
    <v-container class="d-flex align-center">
      <h1 class="text-white">後臺管理</h1>
      <v-spacer></v-spacer>
      <v-btn icon to="/">
        <v-icon class="icon" color="white" icon="mdi-arrow-left-bold-outline"></v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer floating permanent>
    <v-list density="comfortable" nav color="transparent">
      <v-list-item v-for="(list, i) in lists" :key="i" :value="list" :prepend-icon="list.icon" :title="list.title"
        :to="list.to" height="50" color="orange">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<style scoped lang="scss">
.icon {
  font-size: 2.5rem
}
</style>

<script setup>
import { reactive } from 'vue'
const lists = reactive([
  {
    title: '後臺首頁',
    icon: 'mdi-home-account',
    to: '/admin/'
  },
  {
    title: '會員管理',
    icon: 'mdi-account',
    to: '/admin/users'
  },
  {
    title: '訂單管理',
    icon: 'mdi-format-list-bulleted',
    to: '/admin/orders'
  },
  {
    title: '商品管理',
    icon: 'mdi-shopping-outline',
    to: '/admin/products'
  },
  {
    title: '最新消息管理',
    icon: 'mdi-new-box',
    to: '/admin/news'
  },
  {
    title: '回饋訊息管理',
    icon: 'mdi-message-processing-outline',
    to: '/admin/feedback'
  }
])
</script>