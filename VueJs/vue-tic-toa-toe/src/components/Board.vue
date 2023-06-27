<template>
  <div class="board">
    <div>
      <h3>Lượt chơi tiếp theo:
        <span>{{ currentPlayer }}</span>
      </h3>

    </div>
    <div v-for="rowIndex in rows" :key="rowIndex" class="board-rows">
      <div v-for="colIndex in cols" :key="colIndex" class="board-cols">
        <Square @handleClick="handleClick" :arrayBoard="array" :rowIndex="rowIndex" :colIndex="colIndex"
          :lightIndex="lightIndex"
          :isLight="arrayWin && arrayWin.includes((rowIndex - 1).toString() + (colIndex - 1).toString())" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Square from "./Square.vue";
const props = defineProps({
  size: Object,
});
const lightIndex = ref("");
const rows = ref(props.size.rows);
const cols = ref(props.size.cols);
const initPlayer = "X";
const currentPlayer = ref(initPlayer);
const array = ref([]);
const history = ref([]);
const emit = defineEmits(["history"]);
let id = 0;
let arrayWin = ref([]);
//tạo mảng  lưu các giá trị ban đầu
function resetBoard() {
  const arrayInit = [];
  for (let i = 0; i < rows.value; i++) {
    arrayInit.push([]);
  }
  for (let i = 0; i < rows.value; i++) {
    for (let j = 0; j < cols.value; j++) {
      arrayInit[i].push("");
    }
  }
  array.value = arrayInit;
}

// set bảng mặc định
resetBoard();
// khi thay đổi khi props thay đổi
watch(props, function () {
  rows.value = props.size.rows;
  cols.value = props.size.cols;
  resetBoard();
});

// check win
function checkWin(currentPlayer, rowIndex, colIndex) {
  // console.log(rowIndex + "x" + colIndex);
  let result = false; // biến check win
  let count = 1;
  // check hang dọc
  let arrayStore = ["" + rowIndex + colIndex]; // mảng lưu kết quả kiểm tra
  let arrayResult = []; // mảng lưu kết quả thắng

  for (let i = rowIndex - 1; i >= 0; i--) {
    if (array.value[i][colIndex] == currentPlayer.value) {
      count++;
      arrayStore.push(i.toString() + colIndex.toString());
    } else {
      break;
    }
  }
  for (let i = rowIndex + 1; i < rows.value; i++) {
    if (array.value[i][colIndex] == currentPlayer.value) {
      count++;
      arrayStore.push(i.toString() + colIndex.toString());
    } else {
      break;
    }
  }
  if (count === 5) {
    result = true;
    arrayResult = [...arrayStore];
  }
  // console.log("count doc:" + count)
  // check hang ngang
  arrayStore = ["" + rowIndex + colIndex];
  count = 1;
  for (let i = colIndex - 1; i >= 0; i--) {
    if (array.value[rowIndex][i] == currentPlayer.value) {
      count++;
      arrayStore.push(rowIndex.toString() + i.toString());
    } else {
      break;
    }
  }
  for (let i = colIndex + 1; i < cols.value; i++) {
    if (array.value[rowIndex][i] == currentPlayer.value) {
      count++;
      arrayStore.push(rowIndex.toString() + i.toString());
    } else {
      break;
    }
  }
  // console.log("count ngang: " + count)

  if (count === 5) {
    result = true;
    arrayResult = [...arrayStore];
  }
  // check hangc cheo
  count = 1;
  arrayStore = ["" + rowIndex + colIndex];
  //  chéo trên trá
  for (let i = colIndex - 1; i >= 0; i--) {
    let row = rowIndex - (colIndex - i);
    if (row < 0) {
      break;
    } else if (array.value[row][i] === currentPlayer.value) {
      count++;
      arrayStore.push(row.toString() + i.toString());
    } else {
      break;
    }
  }
  if (count === 5) {
    result = true;
    arrayResult = [...arrayStore];
  }
  for (let i = colIndex + 1; i < cols.value; i++) {
    // console.log(i)
    let row = rowIndex + (i - colIndex);
    if (row > rows.value - 1) {
      break;
    }
    if (array.value[row][i] === currentPlayer.value) {
      count++;
      arrayStore.push(row.toString() + i.toString());
    } else {
      break;
    }
  }
  // console.log("cheo: " + count)
  if (count === 5) {
    result = true;
    arrayResult = [...arrayStore];
  }
  //     // cheo 2
  arrayStore = ["" + rowIndex + colIndex];
  count = 1;
  // trên phải
  for (let i = colIndex + 1; i < cols.value; i++) {
    let row = rowIndex - (i - colIndex);
    if (row < 0) {
      break;
    }
    if (array.value[rowIndex - (i - colIndex)][i] === currentPlayer.value) {
      count++;
      arrayStore.push(row.toString() + i.toString());
    } else {
      break;
    }
  }
  if (count === 5) {
    result = true;
    arrayResult = [...arrayStore];
  }
  // coo giam hang tang
  for (let i = colIndex - 1; i >= 0; i--) {
    let row = rowIndex + (colIndex - i);
    if (row > rows.value - 1) {
      break;
    } else if (
      array.value[rowIndex + (colIndex - i)][i] === currentPlayer.value
    ) {
      count++;
      arrayStore.push(row.toString() + i.toString());
    } else {
      break;
    }
  }
  if (count === 5) {
    result = true;
    arrayResult = [...arrayStore];
  }
  // setArrayWin(arrayResult)
  //   console.log(arrayResult);
  return { result, arrayResult };
}
// check Hòa
function checkHoa() {
  for (let i = 0; i < rows.value; i++) {
    for (let j = 0; j < cols.value; j++) {
      if (array.value[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}
function handleClick(rowIndex, colIndex) {
  // kiểm tra xem ô còn trống mới cho điền
  if (array.value[rowIndex][colIndex] === "") {
    lightIndex.value = rowIndex.toString() + colIndex.toString();
    history.value.push({
      id: id++,
      item: "index: " + rowIndex + "x" + colIndex,
    });
    array.value[rowIndex][colIndex] = currentPlayer.value;

    if (checkWin(currentPlayer, rowIndex, colIndex).result) {
      arrayWin.value = checkWin(currentPlayer, rowIndex, colIndex).arrayResult;
      setTimeout(function () {
        let check = window.confirm("Player Win: " + currentPlayer.value);
        if (check) {
          resetBoard();
          currentPlayer.value = "X";
          history.value = [];
          lightIndex.value = "";
          arrayWin.value = []
        }

      }, 100)

    } else if (checkHoa()) {
      let check = window.confirm("Hòa");
      if (check) {
        resetBoard();
        currentPlayer.value = "X";
        history.value = [];
        // setArrayWin([]);
        lightIndex.value = "";
      }
    }
    else {
      // đổi lượt
      currentPlayer.value === "X"
        ? (currentPlayer.value = "O")
        : (currentPlayer.value = "X");
    }
    emit("history", history.value);

  }
  else {
    return;
  }
}
</script>

<style scoped>
.board {
  border-right: 1px solid black;
}

.board-rows {
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  padding-right: 10px;
}

.board-cols {
  display: flex;
  flex-direction: column;
}
</style>