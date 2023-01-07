<script setup>
import { ref } from 'vue';
const login = ref('');
const password = ref('');
function loginButton(){
  if (login.value == 'toma' && password.value == '123')
    alert('Ласкаво просимо');
  else if (login.value == 'petya' && password.value == '777')
    alert('Ласкаво просимо');
  else if (login.value == 'olya' && password.value == '456')
    alert('Ласкаво просимо');
  else alert('Помилка входу');
}
</script>

<template>
<p :class="$style.task">
    Завдання 2 (1 бал)
      Користувач вводить логін і пароль. Якщо логін і пароль збігаються із зазначеними нижче,
      то виводиться «Ласкаво просимо». Якщо не збігаються - то «Помилка входу»
    </p>
<div>
    <form @submit.prevent="loginButton">
      <label :class="$style.label">Login: <input type="text" v-model="login"></label> <br>
      <label :class="$style.label">Password: <input type="password" v-model="password"></label> <br>
      <button :class="$style.button">Login</button>
    </form>
  </div>
</template>

<style src="../assets/ten.css" lang="css" module></style>