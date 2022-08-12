<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
user.getUser()
</script>
