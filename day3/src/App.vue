<script setup>
import { computed, ref, reactive, VueElement } from 'vue'

const students = reactive([
  {
    id: "1",
    surname: "Merenshin",
    name: "Danil",
    gruop: "MET 19 2/9",
    birthday: "2004",
    handedPractece: true
  },
  {
    id: "2",
    surname: "Gryzkp",
    name: "Anna",
    gruop: "RPZ 18 2/9",
    birthday: "2002",
    handedPractece: true
  },
  {
    id: "3",
    surname: "Valenka",
    name: "Valera",
    gruop: "RPZ 19 2/9",
    birthday: "2003",
    handedPractece: false
  },
  {
    id: "4",
    surname: "Neanko",
    name: "Egor",
    gruop: "RPZ 18 1/9",
    birthday: "2003",
    handedPractece: false
  },
])

const search = ref("")

const onClick = function(id){
  const index = students.findIndex(student => student.id === id)
	students.splice(index, 1)
}

</script>

<template>
  <h1>Day 3</h1>
  <div :class="$style.task">
    <h3>Створити масив студентів, якій міститьінформацію: ПІБ, група, рік народження, і булеве поле здав/не здав практичну роботу.<br>Відобразити масив студентів у вигляді таблиці, булеве поле вивести на екран як прапорець. <br>Реалізувати пошук по введенному в текстове поле прізвищу, шукати і при частковому співпадінні. Найденного студента підсвітити будь-яким кольором. <br>В таблицю студентів додати посилання “Видалити”, при натисненні на яке видаляємо відповідний елемент масива. (Додати до кожного елемента масива властивість id і викликаємо метод видалення з параметром id)</h3>
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
      <div :class="$style.div3">{{ student.gruop }}</div>
      <div :class="$style.div4">
        <input
          type="checkbox"
          v-model="student.handedPractece"
        >
      </div>
      <div :class="$style.div5"><a :class="$style.delete" @click="onClick(student.id)">Видалити</a></div>
    </div>
  </div>
</template>

<style src="./assets/style.css" lang="css" module></style>
