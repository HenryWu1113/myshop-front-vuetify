<template>
  <v-app-bar class="bar" height="80">
    <v-container class="d-flex justify-space-between align-center">
      <div class="title d-flex align-center" @click="$router.push('/')">
        <img class="logo" src="../../assets/Logo.png">
        <h1 class="ms-2 hidden-sm-and-down">吳李香</h1>
      </div>
      <div class="btn-group d-flex">
        <v-btn class="btn" variant="flat" color="primary" to="/">首頁</v-btn>
        <v-btn class="btn" variant="flat" color="warning" to="/brand">品牌特色</v-btn>
        <v-btn class="btn" to="/why">WHY 夏雪</v-btn>
        <v-btn class="btn" variant="flat" color="error" to="/news">最新資訊</v-btn>
        <v-btn class="btn" variant="flat" color="success" to="/contact">聯絡我們</v-btn>
      </div>
      <div class="bar-list-right-group d-flex">
        <v-btn v-if="isAdmin && isLogin" icon to="/admin" class="mr-5">
          <v-icon icon="mdi-fingerprint" class="icon" color="primary"></v-icon>
        </v-btn>
        <v-btn icon to="/likes" class="mr-5">
          <v-icon icon="mdi-heart" class="icon" color="red"></v-icon>
        </v-btn>
        <v-btn icon to="/cart" class="mr-5">
          <v-badge class="badge" color="red" v-if='cart > 0'>
            <v-icon icon="mdi-cart" class="icon" color="orange"></v-icon>
          </v-badge>
          <v-icon v-if='cart === 0' icon="mdi-cart" class="icon" color="orange"></v-icon>
        </v-btn>
        <v-btn v-if="!isLogin" icon to="/login">
          <v-icon icon="mdi-login-variant" class="icon" color="primary"></v-icon>
        </v-btn>
        <!-- <v-btn v-if="isLogin" icon>
          <v-icon icon="mdi-account" class="icon" color="primary"></v-icon>
        </v-btn> -->
        <v-menu transition="slide-y-transition" v-if="isLogin">
          <template v-slot:activator="{ props }">
            <v-btn icon color="primary" v-bind="props">
              <v-icon icon="mdi-account" class="icon" color="primary"></v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              aaa
            </v-list-item>
            <v-list-item>
              bbb
            </v-list-item>
            <v-list-item>
              ccc
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
  <v-main>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<style scoped lang="scss">
.btn {
  font-size: 20px;
  font-weight: 700;
}

.logo {
  width: 75px;
}

.icon {
  font-size: 2.5rem;
}

.title {
  cursor: pointer;

  h1 {
    color: brown;
  }
}

.dialog {
  width: 100px;
}
</style>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, cart } = storeToRefs(user)

</script>