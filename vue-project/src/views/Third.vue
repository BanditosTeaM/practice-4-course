<script setup>
import { ref } from 'vue'

const currentOffset = ref(0)

const onClick = () => {
	currentOffset.value += 100
}
</script>

<template>
    <p
    :class="$style.task"
    >
    Створіть блок розмірами 50x50px. Додайте подію кліка, так, що під час кожного кліка на
блоці він відсувається на 100px вниз від попереднього положення.
    </p>
	<div
		:class="$style.block"
		:style="`margin-top: ${currentOffset}px;`"
		@click="onClick"
	></div>
</template>

<style src="../assets/third.css" lang="css" module></style>