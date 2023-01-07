<script setup>
import { ref } from 'vue'
const folderOpened = ref(false)

function onDoubleClick() {
	folderOpened.value = !folderOpened.value
}
</script>

<template>
	<p
		:class="[$style.task]"	
	>Створіть блок div, як зображення фону встановіть йому зображення закритої папки.
Додайте подію, яка виконується при подвійному натисканні на блоці і замінює фон блоку
на зображення відкритої папки</p>
	<div
		:class="[$style.block, folderOpened && $style.opened]"
		@dblclick="onDoubleClick"
	></div>

</template>

<style src="../assets/first.css" lang="css" module></style>