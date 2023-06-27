<template>
  <tr>
    
    <td class="list__check">
      <input @input="handleClick" v-model="checkbox" type="checkbox" :value="sinhVien.maSV" :id="sinhVien.maSV" />
    </td>
    <td class="txtMaSV">{{ sinhVien.maSV }}</td>
    <td class="txtName">{{ sinhVien.tenSV }}</td>
    <td class="txtNgaySinh">{{ moment(sinhVien.ngaySinh).format("DD/MM/YYYY") }}</td>
    <td class="txtGioiTinh">{{ sinhVien.gioiTinh }}</td>
    <td class="txtKhoa">{{ sinhVien.maKhoa }}</td>
    <td class="icon">
      <font-awesome-icon @click="editSV(sinhVien)" icon="fa-solid fa-pen-to-square" />
      <font-awesome-icon @click="deleteSV(sinhVien)" icon="fa-solid fa-trash" />
    </td>
  </tr>
</template>


<script setup>
import moment from "moment";
import { inject, ref, } from "vue";
const emit = defineEmits(['handleCheckbox'])
function handleClick(event){
  const index=event.target.value
  emit("handleCheckbox",index)
}
const props = defineProps({
  sinhVien:Object,
  listSinhVien:Array,
  selectCheckBox:Array
})
const checkbox=ref(props.selectCheckBox)
// nhận giữa dữ liệu từ componet cha khác bậc
const {editSV,deleteSV}=inject('dataDels')



</script>

<style scoped>
tr:nth-child(even) {background-color: #f2f2f2;}
.icon{
     text-align: center;
}
.list__check{
    text-align: center;
}
td, th {
  border: 1px solid black;
}

</style>