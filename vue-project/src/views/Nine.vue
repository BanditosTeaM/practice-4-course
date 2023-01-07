<script setup>
import { ref } from 'vue';
const experience = ref();

function getResult(){
  if (experience.value >= 0 && experience.value <= 3)
    alert("Надбавка 0%");
  else if (experience.value >= 4 && experience.value <= 10)
    alert("Надбавка 10%");
  else if (experience.value >= 11 && experience.value <= 20)
    alert("Надбавка 20%");
  else alert('Надбавка 25%');
}
</script>

<template>
    <p :class="$style.task"><b>Завдання 4 (1 бал)</b>
Створіть програму, яка виводить надбавку за стаж. Користувач вводить стаж роботи, а
програма пише йому надбавку.
    </p>
    <div>
    
    <form @submit.prevent="getResult">
      <label :class="$style.label">стаж: <input type="text" v-model="experience"></label> <br>
      <button :class="$style.button">Узнать надбавку</button>
    </form>
  </div>
</template>

<style src="../assets/nine.css" lang="css" module></style>