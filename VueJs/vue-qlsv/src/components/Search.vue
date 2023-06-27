<template>
<form id="form-1" @submit.prevent="handleSubmit" >
        <fieldset class="boder-layout">
            <legend>Tìm kiếm</legend>
            <label class="seach__label label-color" for="txtTuKhoa">Từ khóa:  </label>
            <input class="search__input" type="text" id="txtTuKhoa" placeholder="Từ khóa cần tìm" v-model.lazy="tukhoa">
            <button class="seach btn" type="submit">Tìm kiếm</button>
            <label>{{ tukhoa }}</label>
        </fieldset>
    </form>
</template>

<script setup>
import { ref, watch } from "vue"
const props = defineProps({
  listSinhVien:Array
})
const tukhoa=ref('')
const emit = defineEmits(['response'])
function handleSubmit(){
    // console.log(tukhoa.value)
    emit('response', tukhoa.value)
    tukhoa.value='';
}
</script>

<style scoped>
.boder-layout{
    width: 100%;
    display: flex;
}
.search__input{
    flex: 3;
    max-width: 600px;
}
</style>