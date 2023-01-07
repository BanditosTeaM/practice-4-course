<script setup>
import { ref } from 'vue'

import firstImage from '../assets/image/six/first-image.png'
import secondImage from '../assets/image/six/second-image.png'

const currentImage = ref(1)

function onMouseEnter() {
	currentImage.value = 2
}

function onMouseLeave() {
	currentImage.value = 1
}
</script>

<template>
    <p>
        Додайте в html код зображення. Додайте скрипт, який буде виконувати такі дії: при
наведенні миші на картинку, зображення буде замінюватися іншим зображенням. При
виході миші за межі зображення, буде відновлюватися початкове зображення.
    </p>
	<div
		:class="$style.container"
		@mouseenter="onMouseEnter"
		@mouseleave="onMouseLeave"
	>
		<img
			:class="[
				$style.image,
				$style.firstImage,
				currentImage === 1 && $style.hidden
			]"
			:src="firstImage"
			alt="First image"
		/>
		<img
			:class="[$style.image, $style.secondImage]"
			:src="secondImage"
			alt="Second image"
		/>
	</div>

	
</template>

<style src="../assets/six.css" lang="css" module></style>
