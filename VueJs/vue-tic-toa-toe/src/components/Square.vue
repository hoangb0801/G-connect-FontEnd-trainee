<template>
  <button @click="handleClick" class="square" :class="`${props.lightIndex ===
    (props.rowIndex - 1).toString() + (props.colIndex - 1).toString()
    ? 'light'
    : ''} ${isLight && 'light'}`
    ">
    {{ arrayBoard[rowIndex - 1][colIndex - 1] }}
  </button>
</template>

<script setup>
const props = defineProps({
  arrayBoard: Array,
  rowIndex: Number,
  colIndex: Number,
  lightIndex: String,
  isLight: Boolean,
});
// console.log(props.arrWin)
const emit = defineEmits(["handleClick"]);
// truyền index được click
function handleClick() {
  emit("handleClick", props.rowIndex - 1, props.colIndex - 1);
}
</script>
<style scoped>
.square {
  width: 80px;
  height: 80px;
}

.light {
  background-color: yellow;
}
</style>
