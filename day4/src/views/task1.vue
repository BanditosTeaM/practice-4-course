<script setup>
import { computed, ref, reactive, VueElement } from 'vue'
const age = ref(0)
const messageLazy = ref('')
const messageTrim = ref('')

</script>


<template>
        <p>1 Програма-приклад, Modifiers- trim, number, andlazy.</p>

		<div >
			<span >EnterAge:{{ age }}</span>
			<input
        
				v-model.number="age"
				type="number"
			/>
		</div>
		<div>
			<span >EnterMessage:{{ messageLazy }}</span>
			<input
        
				v-model.lazy="messageLazy"
			/>
		</div>
		<div >
			<span >EnterMessage:{{ messageTrim }}</span>
			<input
        
				v-model.trim="messageTrim"
			/>
		</div>


</template>