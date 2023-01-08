<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <h1>День 2</h1>
  <router-link
  v-for = "item in 3"
  :to = "'task-' + item"
  >
  Задание {{ item }}
  </router-link>
  
  <RouterView />
</template>

