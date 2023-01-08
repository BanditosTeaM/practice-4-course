<script setup>
import { ref } from 'vue';
const apartment = ref();

function getResult(){
  if (apartment.value >= 1 && apartment.value <= 20)
    alert("Перший під'їзд");
  else if (apartment.value >= 21 && apartment.value <= 48)
    alert("Другий під'їзд");
  else if (apartment.value >= 49 && apartment.value <= 90)
    alert("Третій під'їзд");
  else alert('Існують квартири з 1 по 90');
}
</script>

<template>
    <p :class="$style.task">Завдання 1 (1 бал)
      В першому під`їзді квартири з 1 по 20. У другому з 21 по 48. У третьому з 49 по 90.
      Користувач вводить номер квартири. Програма повинна вказати в якому під`їзді
      знаходиться дана квартира.
      Програма повинна враховувати варіант введення чисел за межами діапазону 1..90.
    </p>
    <div>
    
    <form @submit.prevent="getResult">
      <label :class="$style.label">Квартира: <input type="text" v-model="apartment"></label> <br>
      <button :class="$style.button">Узнать подъезд</button>
    </form>
  </div>
</template>

<style src="../assets/eleven.css" lang="css" module></style>