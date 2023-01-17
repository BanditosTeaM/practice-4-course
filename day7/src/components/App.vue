<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

const API_KEY = process.env.API_KEY;

const getCities = function () {
  axios
    .post("https://api.novaposhta.ua/v2.0/json/", {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {
        Page: "1",
        FindByString: city.value,
        Limit: "20",
      },
    })
};

const warehouse = reactive({ info: [] });
const getWarehouses = function () {
  axios
    .post("https://api.novaposhta.ua/v2.0/json/", {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: city.value,
        Page: "1",
        Limit: "100",
        Language: "UA",
      },
    })
    .then((data) => {
      warehouse.info = data.data.data;
      console.log(warehouse.info);
    });
};

const city = ref("");

</script>

<template>
  <form :class="$style.poshta" @submit.prevent="getCities">
    <span>Населений пункт</span>
    <input
      v-model="city"
      :class="$style.cities"
      type="text"
      @blur="getCities"
    />
    <span>Поштове відділення</span>
    <select :class="$style.warehouses" name="warehous" @click="getWarehouses">
      <option value="warehous" v-for="warehous in warehouse.info">
        {{ warehous.Description }}
      </option>
    </select>
  </form>
</template>

<style src="../assets/style.css" lang="css" module></style>
