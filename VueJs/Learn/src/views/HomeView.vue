<template>
  <h1>Xin Chào</h1>
  <HelloWorld ref="table" msg="hihi" />
  <button @click="changeMe">click</button>
  {{ toggle }}
</template>
<!-- <script>
import { onMounted, ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

// export default {
//   setup() {
//     const table = ref(null);

//     onMounted(() => {
//       console.log(table.value);
//     });

//     return { table };

//   },
// }
// </script> -->
<script setup>
import { onMounted, ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
const table = ref(null)
const toggle = ref(true)
function changeMe() {
  table.value.hello()

}

</script>

