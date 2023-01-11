<script setup>
import { computed, ref, reactive, VueElement } from 'vue'
const students = reactive([
{
    id: "1",
    surname: "Merenshin",
    name: "Danil",
    group: "RPZ 19 2/9",
    birthday: "2004",
    handedPractece: true
  },
  {
    id: "2",
    surname: "Gryzkp",
    name: "Anna",
    group: "RPZ 18 2/9",
    birthday: "2002",
    handedPractece: true
  },
  {
    id: "3",
    surname: "Valenka",
    name: "Valera",
    group: "RPZ 19 2/9",
    birthday: "2003",
    handedPractece: false
  },
  {
    id: "4",
    surname: "Neanko",
    name: "Egor",
    group: "RPZ 18 1/9",
    birthday: "2003",
    handedPractece: false
  },
])

const addStudents = reactive({
	surname: '',
	name: '',
	group: 'RPZ 19 2/9',
	birthday: '2022',
	handedPractece: false
})

function addStudent() {
	students.push(JSON.parse(JSON.stringify(addStudents)))

	addStudents.surname = ''
	addStudents.name = ''
	addStudents.group = 'RPZ 19 2/9'
	addStudents.birthday = '2022'
	addStudents.handedPractece = false
}
const onClick = function(id){
  const index = students.findIndex(student => student.id === id)
	students.splice(index, 1)
}
</script>

<template>
    <p> В завдання з таблицею “Студенти” додати код, який дозволить додавати елементи в масив. Додати форму для введення нового студента і при натисненні на кнопку заповненний щойно “Студент” потрапляє в таблицю.
    </p>
    <input
      type="text"
      v-model="search"
	  />
    <div :class="$style.parent" v-for="student in students">
      <div :class="[
					$style.div1,
					search !== '' &&
						`${student.surname} ${student.name}`.indexOf(search) >=
							0 &&
              $style.divColor1
				]">{{ `${student.surname} ${student.name} `}}</div>
      <div :class="$style.div2">{{ student.birthday }}</div>
      <div :class="$style.div3">{{ student.group }}</div>
      <div :class="$style.div4">
        <input
          type="checkbox"
          v-model="student.handedPractece"
        >
      </div>
      <div :class="$style.div5"><a :class="$style.delete" @click="onClick(student.id)">Видалити</a></div>
    </div>
  
  <form
		:class="$style.addStudent"
		@submit.prevent="addStudent"
	>
		<label :class="$style.addStudentLabel">
			Прізвище
			<input
				type="text"
				v-model="addStudents.surname"
			/>
		</label>

		<label :class="$style.addStudentLabel">
			Ім'я
			<input
				type="text"
				v-model="addStudents.name"
			/>
		</label>

		<label :class="$style.addStudentLabel">
			Група
			<select
				class="select"
				v-model="addStudents.group"
			>
				<option value="RPZ 19 2/9">RPZ 19 2/9</option>
				<option value="RPZ 19 1/9">RPZ 19 1/9</option>
			</select>
		</label>

		<label :class="$style.addStudentLabel">
			Рік народження
			<input
				type="birthday"
				v-model="addStudents.birthday"
			/>
		</label>

		<label :class="$style.addStudentLabel">
			Виконання роботи
			<input
				v-model="addStudents.handedPractece"
				type="checkbox"
			/>
		</label>

		<button :class="$style.addStudentButton">Додати</button>
	</form>
</template>


<style src="../assets/task3.css" lang="css" module></style>