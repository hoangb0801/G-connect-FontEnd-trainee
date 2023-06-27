<template>
  <header>
    <form class="" @submit.prevent="handleSubmit">
      <label for="input__size">Nhập hàng x cột : </label>
      <input type="text" class="input__size" v-model="rows" />X
      <input type="text" class="input__size" v-model="cols" />
      <button type="submit">Chơi</button>
    </form>
  </header>
  <div class="contain">
    <Board :size="size" @history="data" />
    <History :history="history" />
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import Board from "./components/Board.vue";
import History from "./components/History.vue";
const rows = ref(5);
const cols = ref(5);
const size = ref({ rows: 5, cols: 5 });
const history = ref([]);
function data(data) {
  history.value = data;
  // console.log(history.value);
}
function handleSubmit() {
  // lấy size bẳng
  size.value = { rows: Number(rows.value), cols: Number(cols.value) };
  // console.log(size.value);
}
</script>
<style scoped>
.contain {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  background-color: aqua;
  justify-content: center;
  padding: 10px;
}
</style>
