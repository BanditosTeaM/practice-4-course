<script>
export default {
	data() {
		return {
			num1: 100,
			num2: 200,
			total: '',
			styleobj: {
				width: '100px',
				height: '100px',
				backgroundColor: 'red'
			}
		}
	},
	methods: {
		changeBgColor: function () {
			this.styleobj.backgroundColor = 'green'
		},
		originalColor: function () {
			this.styleobj.backgroundColor = 'red'
		}
	}
}
</script>

<template>
	<p> 2 Створити блок червоного кольору, при наведенні курсору миші змінюємо колір блока на зелений, при отведенні курсора миші - знову червоний</p>

	<div class="container">
		<div
			v-bind:style="styleobj"
			v-on:mouseover="changeBgColor"
			v-on:mouseout="originalColor"
		></div>
	</div>
</template>