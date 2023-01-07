<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>



<template>
  <h1>День 1</h1>
  <div>
    <router-link class="link"
      v-for="item in 10"
					:to="'task-' + item"
          
				>
					Завдання {{ item }}
				</router-link>
  </div>

  <RouterView />
</template>




