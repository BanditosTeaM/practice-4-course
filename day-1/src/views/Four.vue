<script>
export default {
	methods: {
		onClick() {
			window.alert(this.$el.textContent)
		}
	}
}

</script>

<template>
    
	<button
		@click="onClick"
		:class="$style.button"
	>
		Саме цей текст виводіть
	</button>
    
</template>

<style src="../assets/four.css" lang="css" module></style>

