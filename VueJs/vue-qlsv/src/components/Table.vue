<template>
    <div>
        <fieldset class="boder-layout">
            <legend>Danh sách sinh viên</legend>
            <table class="boder-layout">
                <thead>
                    <th></th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th> Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Khoa</th>
                    <th>Thao tác</th>
                </thead>
                <tbody class="table-contain" v-for="sv in filteredTodos" :key="sv" >
                    <Row :sinhVien="sv" :listSinhVien="listSinhVien" @handleCheckbox="getCheckBox"/>
                </tbody>
            </table>
        </fieldset>
    </div>
</template>


<script setup>
import { computed, ref } from 'vue';
import Row from './Row.vue';
const selectCheckBox=ref([])
const props = defineProps({
  listSinhVien: Array,
  tukhoa:String,
  date: String
})
const emit=defineEmits(["dataDelAll"])
function getCheckBox(index){
   selectCheckBox.value.push(index)
   emit("dataDelAll",selectCheckBox)
}
const filteredTodos = computed(() => {
  return props.tukhoa 
  ? props.listSinhVien.filter(sv=>sv.maSV.includes(props.tukhoa) || sv.tenSV.toLocaleLowerCase().includes(props.tukhoa.toLocaleLowerCase()) )
  : props.listSinhVien
})
</script>

<style scoped>
table, td, th {
  border: 1px solid black;
}

table {
  width: 100%;
  border-collapse: collapse;
}
th {
  background-color: red;
  color: white;
}
</style>