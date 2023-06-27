<template>
    <div class="history">
        <div>Lịch sử chơi</div>
        <button @click="handleToggle">toggle</button>
        <ol :class="sort">
            <li class="itemHistory" v-for="item in props.history" :key="item.id">
                {{ item.item }}
            </li>
        </ol>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    history: Array,
    isLight: Boolean,
});
const sort = ref("");
function handleToggle() {
    sort.value == "" ? (sort.value = "change") : (sort.value = "");
}
</script>


<style scoped>
.history {
    margin-left: 20px;
}

.change {
    display: flex;
    flex-direction: column-reverse;
}
</style>