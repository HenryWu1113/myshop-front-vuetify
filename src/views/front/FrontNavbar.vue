<template>
  <v-app-bar class="bar" height="80">
    <v-container class="d-flex justify-space-between align-center">
      <div class="title d-flex align-center" @click="$router.push('/')">
        <img class="logo" src="../../assets/Logo.png">
        <h1 class="ms-2">吳李香</h1>
      </div>
      <div class="btn-group d-flex">
        <v-btn class="btn" variant="flat" color="primary" to="/">首頁</v-btn>
        <v-btn class="btn" variant="flat" color="warning" to="/brand">品牌特色</v-btn>
        <v-btn class="btn" to="/why">WHY 夏雪</v-btn>
        <v-btn class="btn" variant="flat" color="error" to="/news">最新資訊</v-btn>
        <v-btn class="btn" variant="flat" color="success" to="/contact">聯絡我們</v-btn>
      </div>
      <div class="bar-list-right-group d-flex">
        <v-btn to="/likes" class="rounded">
          <v-icon icon="mdi-heart" class="icon" color="red"></v-icon>
        </v-btn>
        <v-btn to="/cart">
          <v-icon icon="mdi-cart" class="icon" color="orange"></v-icon>
        </v-btn>
        <v-btn to="/">
          <v-icon icon="mdi-login-variant" class="icon" color="primary"></v-icon>
        </v-btn>
      </div>

    </v-container>
  </v-app-bar>
  <router-view></router-view>
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
}

.title h1 {
  color: brown;
}
</style>