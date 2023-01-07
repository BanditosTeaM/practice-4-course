<script setup>
import { ref } from 'vue'
const blocksCount = 300

const hoverId = ref(-1)

function onMouseEnter(id) {
	hoverId.value = id
}

function onMouseLeave() {
	hoverId.value = -1
}
</script>

<template>
    <p 
    :class="[$style.task]"
    >Завдання 3 (2 бали) Додайте в документ 300-400 блоків div квадратної форми з розмірами сторін 30px, і
кольором фону. Додавання елементів виконайте за допомогою циклу. Додайте подія при
наведенні миші, яке буде скруглять дані блоки за допомогою border-radius до кола.
Для уповільнення ефекту заокруглення в CSS можна додати transition.</p>
	<div :class="$style.wrapper">
		<div
			:class="[$style.block, hoverId === id && $style.hover]"
			v-for="id in blocksCount"
			:key="id"
			@mouseenter="onMouseEnter(id)"
			@mouseleave="onMouseLeave(id)"
		>
			{{ id }}
		</div>
	</div>
</template>

<style src="../assets/second.css" lang="css" module></style>
