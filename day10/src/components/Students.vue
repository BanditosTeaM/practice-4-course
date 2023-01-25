<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

const getStudentsApi = reactive({ students: [] })
const store = useStore()
const isWhite = ref("")

const getStudents = () => {
	return axios.get('http://34.82.81.113:3000/students')
}
const getStudentsFromApi = () => {
	getStudents().then(value=>{
		getStudentsApi.students = value.data
		setStoreStudentsCount(getStudentsApi.students.length)
	})
}

const setStoreStudentsCount = function(count){
	store.commit('setCount', count)
}

const countStudents = computed(() => {
	return store.getters.getCount
})

onMounted(() => getStudentsFromApi())

const search = ref("")

const onClick = function(id){
	axios.delete(`http://34.82.81.113:3000/students/${id}`)
    	.then(() => getStudentsFromApi())
}

const edit = function(item){
	editedStudent._id = item._id
	editedStudent.name = item.name
	editedStudent.group = item.group
	editedStudent.isDonePr = item.isDonePr

}

const student = reactive({
	name: '',
	group: 'RPZ 19 2/9',
	isDonePr: false
})

const editedStudent = reactive({
	_id: '',
	name: '',
	group: '',
	isDonePr: false
})


function addStudent() {
	axios.post("http://34.82.81.113:3000/students", {...student}).then(()=>getStudentsFromApi())
}

function editStudent(id) {
	if (editedStudent._id !== ''){
		axios.put(`http://34.82.81.113:3000/students/${id}`, {...editedStudent}).then(()=>getStudentsFromApi());
		editedStudent._id = '';
		editedStudent.name = '';
		editedStudent.group = '';
		editedStudent.isDonePr = false;
	}
}

const changeTheme = function(){
	isWhite.value = !isWhite.value
	store.commit('changeTheme', isWhite.value);
}
</script>

<template>
	<div class="changeTheme" :class="{ white: isWhite , dark: !isWhite}">
		<div>Кол-во студентів: {{ countStudents }}</div>
		<div :class="$style.task">
		<button @click="changeTheme"> Змінити тему</button>
		<input type="text"/>
		<table >
				<tr :class="$style.parent" v-for="student in getStudentsApi.students">
				<td> <router-link v-bind:to="'/student-info/'+student._id"> {{ `${student.name}`}} </router-link>  </td>
				<td >{{ student.group }}</td>
				<td >
					<input
					type="checkbox"
					v-model="student.isDonePr"
					>
				</td>
				<td ><a :class="$style.delete" @click="onClick(student._id)">Видалити</a></td>
				<td >
					<img :class="$style.edit" :src="`../assets/edit.webp`" alt="edit" @click="edit(student)">
				</td>
				</tr>
		</table>
	</div>
	<form
			:class="$style.addStudent"
			@submit.prevent="addStudent"
		>
			<label :class="$style.addStudentLabel">
				ФІО
				<input
					type="text"
					v-model="student.name"
				/>
			</label>

			<label :class="$style.addStudentLabel">
				Група
				<input
					type="text"
					v-model="student.group"
				/>
			</label>

			<label :class="$style.addStudentLabel">
				Виконання роботи
				<input
					v-model="student.isDonePr"
					type="checkbox"
				/>
			</label>

			<button :class="$style.addStudentButton">Додати</button>
		</form>
		<hr>

	
		<form
		:class="$style.addStudent"
		@submit.prevent="editStudent(editedStudent._id)"
	>
		<label :class="$style.addStudentLabel">
			Ім'я
			<input
				type="text"
				v-model="editedStudent.name"
			/>
		</label>

		<label :class="$style.addStudentLabel">
			Група
			<select v-model="student.group">
				<option value="RPZ 19 1/9">RPZ 19 1/9</option>
				<option value="RPZ 19 2/9">RPZ 19 2/9</option>
			</select>
		</label>

		<label :class="$style.addStudentLabel">
			Виконання роботи
			<input
				v-model="editedStudent.isDonePr"
				type="checkbox"
			/>
		</label>

		<button :class="$style.addStudentButton">Редагувати</button>
	</form>
		
	</div>
</template>

<style src="../assets/style.css" lang="css" module></style>
<style>
.changeTheme{
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	padding: 30px;
	
}
.dark{
   background-color: rgb(65, 65, 65);
   color:white;
}
.white{
   background-color: #fff;
   color: black;
}
.dark a {
	color: white;
}
.white a{
	color: black;
}
td{
	padding-right: 30px;
}
</style>
