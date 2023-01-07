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
    <p>Візміть рядок з input. Розрахуйте його довжину. Виведіть результат.</p>
    <form @submit.prevent="getResult">
        <label>Строка <input type="text" v-model = "string"></label>
        <button>Узнать длинну</button>
    </form>

</template>
