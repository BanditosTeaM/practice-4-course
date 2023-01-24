<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
const API_KEY = process.env.API_KEY

const cityWeather = ref(null) 
const addCity = ref('Київ')
const arrCity = reactive({name:[]}) 
const selectedCity = ref('') 
const theme = ref('white') 
let userLocation = {} 



const getCityWeather = function() {
	axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.value}&appid=${API_KEY}&units=metric`)
	.then(data => {
    cityWeather.value = data.data; 
  })
}

const getCoordsWeather = function(){
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${API_KEY}&units=metric`)
  .then(data => cityWeather.value = data.data)
}


async function showPosition(position) {
  userLocation = await position.coords
  getCoordsWeather()
}

const addUserCity = function(city){
  arrCity.name.push(city)
  localStorage.setItem ('cityName', JSON.stringify(arrCity.name))
}



onMounted(()=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("err");
  }
  arrCity.name = JSON.parse(localStorage.getItem('cityName'))
  theme.value = localStorage.getItem('theme')
  
})





const switchStyle = function(){
  if(theme.value === "white"){
    theme.value = "black"
  localStorage.setItem("theme","black")
  document.documentElement.classList.add("dark")
  } else if(theme.value === "black"){
    theme.value = "white"
  localStorage.setItem("theme","white")
  document.documentElement.classList.remove("dark")
  } else{
    console.log("error theme")
  }
}



</script>

<template>
  <section>
    <button @click="switchStyle">Зміна теми</button>
    <div class="city">
      <form
        class="addCity"
        @submit.prevent="addUserCity(addCity)"
      >
        <label class="addLabel dark:text-white">Введіть місто:</label>
        <input class="addInput dark:bg-gray-500" v-model="addCity" type="text" id="myInput" />

        

        <button class="addButton">Додати</button>
      </form>

      

      <div class="selectCity">
        <label class="selectLabel dark:text-white">Оберіть місто: </label>
        <select class="selectSelect dark:bg-gray-500" v-model="selectedCity">
          <option v-for="city in arrCity.name">
            {{ city }}
          </option>
        </select>
        <button class="selectButton" @click="getCityWeather">Погода</button>
      </div>
    </div>

    <div class="dark:bg-gray-500 p-5 rounded-xl" v-if="cityWeather!==null">
      <table>
        <tr>
          <td>{{ cityWeather.name }}</td>
          <td>{{ cityWeather.sys.country }}</td>
          <td>{{ "["+cityWeather.coord.lon+";"+cityWeather.coord.lat+"]" }}</td>
        </tr>
        <tr>
          <td><img src="https://cdn-icons-png.flaticon.com/512/5243/5243174.png" class="humidity"></td>
          <td>humidity</td>
          <td>{{ cityWeather.main.humidity }}</td>
        </tr>
        <tr>
          <td><img src="https://e.unicode-table.com/orig/b9/e532c0c070b2bff5deb7ce6815c083.png" class="temp"></td>
          <td>temp</td>
          <td>{{ cityWeather.main.temp }}</td>
        </tr>
        <tr>
          <td><img src="https://openweathermap.org/img/wn/02d.png"></td>
          <td>main</td>
          <td>{{ cityWeather.weather[0].main }}</td>
        </tr>
        <tr>
          <td><img src="https://openweathermap.org/img/wn/50d.png"></td>
          <td>pressure</td>
          <td>{{ cityWeather.main.pressure }}</td>
        </tr>
        <tr>
          <td><img src="https://openweathermap.org/img/wn/02n.png"></td>
          <td>description</td>
          <td>{{ cityWeather.weather[0].description }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<style src="../assets/style.css" lang="css"></style>
