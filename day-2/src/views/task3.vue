<script setup >
import { computed, ref, reactive, VueElement } from 'vue'
var quotes = [
{
   "quote": "This is just a Quote1",
   "source": ""
},
{
   "quote": "This is just a Quote2 This is just a Quote2 This is just a Quote2 This is just a Quote2",
   "source": "Martin"
},
{
   "quote": "This is just a Quote3",
   "source": "Dennis"
},
  {
   "quote": "This is just a Quote4 long longlonglonglonglonglong",
   "source": ""
},
{
   "quote": "This is just a Quote4 Quote4Quote4Quote4Quote4Quote4Quote4",
   "source": ""
},
{
   "quote": "asdaw",
   "source": "awas"
},
{
   "quote": "This is just a Quote4",
   "source": ""
},

]
const isAuthor = ref("")
const filteredQuotes = computed(()=>{
  return quotes.filter(element => {
    return Boolean(element.source) == Boolean(isAuthor.value)})
})
let sortedQuotes = reactive({sortQuotes: []})
const sortQuotes = function(){
  sortedQuotes.sortQuotes = quotes.sort((a,b)=>a.source > b.source ? 1: -1)
  console.log(sortedQuotes.sortQuotes)
}
</script>

<template>
    <div>
        <h1 :class="$style.task"><b>Фільтрація по цитатам,які мають автора і не мають автора. За допомогою перемикача (radiobutton).</b></h1>
    <input type="radio" name="author" v-model="isAuthor" value="exist">Є автор
    <input type="radio" name="author" v-model="isAuthor" value="">Немає автора
    <div class="quotes" v-for="qoute in filteredQuotes">
      <p >{{ qoute.quote }}</p>
      <p >{{ qoute.source }}</p>
    </div>
  </div>
  
  <div >
    <h1 :class="$style.task"><b>Сортування списку цитат по прізвищу автора за алфавітом. Сортувати в окремому списку, зберігаючи відображення первинного, не відсортованого списку.</b></h1>
    <button @click="sortQuotes">Сортувати</button>
    <div class="quotes" v-for="qoute in sortedQuotes.sortQuotes">
      <p >{{ qoute.quote }}</p>
      <p >{{ qoute.source }}</p>
    </div>
  </div>
</template>

<style src="../assets/task1.css" lang="css" module ></style>