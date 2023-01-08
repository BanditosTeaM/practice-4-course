<script setup>
import { ref } from 'vue';

    const number = ref('');
    const degree = ref('');
    function getResult(){
        const result =Math.pow(number.value,degree.value);
        alert(result);
        console.log(number,degree);
    }
    
</script>

<template>
    <p :class="$style.task"> Завдання 5 (1 бал)
        Створіть функцію, яка отримує два параметри - число і ступінь числа. Використовуючи
Math.Pow всередині функції, зведіть число в ступінь і виведіть за допомогою alert.</p>
    <form @submit.prevent="getResult">
        <label :class="$style.label">Число <input type="text" v-model = "number"></label> <br>
        <label :class="$style.label">Степень<input type="text" v-model = "degree"></label> <br>
        <button :class="$style.button">Возвести число в степень</button>
    </form>

</template>

<style src="../assets/eight.css" lang="css" module></style>
