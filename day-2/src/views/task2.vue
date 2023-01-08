<script setup>
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
               "quote": "This is just a Quote5 just a Quote5just a Quote5just a Quote5",
               "source": ""
            },
            {
               "quote": "This is just a Quote4",
               "source": ""
            },
            
]


</script>

<template>
    <p :class="$style.task">Задание 2-4 <br>v-for — відобразити список всіх цитат </p>

    <div v-for = "qt in quotes " >
        <p> {{ qt.quote }}</p>
        <p> {{ qt.source }}</p>
    </div>
    <p :class="$style.task">v-bind — цитати, які довше 40 символів відображати червоним кольором</p>
    <div v-for = "qt in quotes "  >
        <p v-bind:class="qt.quote.length > 40 ? $style.red : $style.black"> {{ qt.quote }}</p>
        <p> {{ qt.source }}</p>
    </div>
    <p :class="$style.task">
        v-if — відобразити за допомогою цієї директиви лише ті
цитати, які мають автора
    </p>

    <div v-for = "qt in quotes ">
        <p v-if="qt.source != ''">{{ qt.quote }}</p>
    </div>
</template>


<style src="../assets/task1.css" lang="css" module ></style>