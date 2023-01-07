<script setup>
import { ref } from 'vue';

    const string = ref('');
    function getResult(){
        const length = string.value.length;
        alert(length);
        console.log(string);
    }
</script>

<template>
    <p :class="$style.task">Завдання 1 (1 бал)
        Візміть рядок з input. Розрахуйте його довжину. Виведіть результат.</p>
    <form @submit.prevent="getResult">
        <label :class="$style.label">Строка <input type="text" v-model = "string"></label> <br>
        <button :class="$style.button">Узнать длинну</button>
    </form>

</template>

<style src="../assets/seven.css" lang="css" module></style>