<template>
  <v-app-bar height="80" color="red" location="top" image="https://wdaweb.github.io/index_assets/img/wda.png">
    <h1>Front</h1>
    <v-btn class="btn" width="200" variant="flat" color="primary" to="/">home</v-btn>
    <v-btn class="btn" variant="flat" color="oh" flat to="/brand">brand</v-btn>
    <v-btn class="btn" to="/why">why</v-btn>
    <v-btn class="btn" to="/news">news</v-btn>
    <v-btn class="btn" to="/contact">contact</v-btn>
    <v-spacer></v-spacer>
    <v-btn to="/admin">admin</v-btn>
    <v-btn to="/admin/products">products</v-btn>
    <v-btn to="/admin/news">news</v-btn>
  </v-app-bar>
  <router-view></router-view>
</template>