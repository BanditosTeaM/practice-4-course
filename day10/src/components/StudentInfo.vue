<script>
import axios from "axios"
import { ref } from "vue";

import Modal from "./Modal.vue";

export default {
    components: { Modal },
    props: {
        id: '',
    },
    data() {
        return{
            student: {},
        };
    },
    mounted(){
        axios.get(`http://34.82.81.113:3000/students/${this.id}`).then((res)=>{
            this.student = res.data;
        });
    },
    setup() {
        const isOpen = ref(false);

        return { isOpen };
    },
    computed: {
        isDonePrOfStudent() {
            return this.student.isDonePr ? 'здана' : 'не здана'
        }
    }
}
</script>

<template>
    <div class="section">
        <div class="photo">
            <img :src="student.photo" width="300" @click="isOpen = true">
        </div>
        <div class="info">
            {{ student.name }} <br>
            Група {{ student.group }} <br>
            Робота {{isDonePrOfStudent}} <br>
        </div>
    </div>

    <button @click="isOpen = true">Show Modal</button>
	<Modal :open="isOpen" @close="isOpen = !isOpen">
		<img class="modalImg" :src="student.photo">
	</Modal>
</template>

