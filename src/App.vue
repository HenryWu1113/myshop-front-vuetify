<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style scoped lang="scss">
</style>

<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
user.getUser()
</script>
