<script setup>
const name = 'Ярослав'
function onClick(){
    console.log(`Click: ${name}`)
}
function mouseEnter(){
    console.log(`Enter: ${name}`)
}
function mouseLeave(){
    console.log(`Leave: ${name}`)
}
</script>

<template>
    <p :class="$style.task">Задание 1 <br>Pеалізувати на 3 різні події вивід вашого
    імені</p>
    <div 
    :class="$style.box"
    @click="onClick"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    ></div>
</template>

<style src="../assets/task1.css" lang="css" module ></style>
