<template>
  <div id="app">
    <Search  @response="getTuKhoa"></Search>
    <Table :listSinhVien="listSinhVien" :tukhoa="tukhoa" 
    @dataDelAll="(data)=>dataDelAll.value=data.value"
    ></Table>
    <Edit :listSinhVien="listSinhVien" :updateSinhVien="updateSinhVien" :maSinhVien="maSV"
    @handleUpdate="update"
    @handleDeleteAll="deleteAll"
    ></Edit>
  </div>
</template>

<script setup>
  import { compile, provide, ref } from "vue";
  import Edit from "./components/Edit.vue";
  import Search from "./components/Search.vue";
  import Table from "./components/Table.vue";
  const dataDelAll=ref([])
  const tukhoa = ref("");
  const maSV=ref("")
  const listSinhVien = ref([
  {
    maSV: "HN01",
    tenSV: "Nguyễn Văn A",
    ngaySinh: "2000-01-01",
    gioiTinh: "Nam",
    maKhoa: "CNTT",
  },
  {
    maSV: "HN02",
    tenSV: "Nguyễn Văn B",
    ngaySinh: "2000-01-08",
    gioiTinh: "Nam",
    maKhoa: "CNTT",
  },
  {
    maSV: "HN03",
    tenSV: "Nguyễn Văn C",
    ngaySinh: "2000-01-01",
    gioiTinh: "Nam",
    maKhoa: "CNTT",
  },
  {
    maSV: "HN04",
    tenSV: "Nguyễn Văn D",
    ngaySinh: "2000-01-10",
    gioiTinh: "Nam",
    maKhoa: "CNTT",
  },
  {
    maSV: "VP02",
    tenSV: "Nguyễn Văn A",
    ngaySinh: "2000-01-01",
    gioiTinh: "Nam",
    maKhoa: "CNTT",
  },
  {
    maSV: "NN01",
    tenSV: "Nguyễn Văn B",
    ngaySinh: "2000-01-01",
    gioiTinh: "Nu",
    maKhoa: "KT",
  },
  {
    maSV: "GC11",
    tenSV: "Nguyễn Văn A",
    ngaySinh: "2000-01-01",
    gioiTinh: "Nu",
    maKhoa: "CNTT",
  },
  {
    maSV: "HN09",
    tenSV: "Nguyễn Văn B",
    ngaySinh: "2000-01-01",
    gioiTinh: "Nam",
    maKhoa: "CNTT",
  },
  {
    maSV: "HH01",
    tenSV: "Nguyễn Văn A",
    ngaySinh: "2000-01-01",
    gioiTinh: "Nam",
    maKhoa: "CNTT",
  },
  {
    maSV: "HH02",
    tenSV: "Nguyễn Văn B",
    ngaySinh: "2000-01-01",
    gioiTinh: "Nu",
    maKhoa: "ATTT",
  },
]);
  const updateSinhVien=ref({})
  const dataDel=ref('hi')
  function deleteSV(sv){
  confirm("Xác nhận Xóa:"+sv.tenSV)?
  listSinhVien.value= listSinhVien.value.filter(i=>i.maSV!==sv.maSV)
  : ""
}
function update(sv){
  let idex=listSinhVien.value.findIndex(sinhVien=>sinhVien.maSV===sv.maSV)
  listSinhVien.value[idex]=sv
}
function editSV(sv){
     updateSinhVien.value={
      maSV:sv.maSV,
      tenSV:sv.tenSV,
      ngaySinh:sv.ngaySinh,
      gioiTinh:sv.gioiTinh,
      maKhoa:sv.maKhoa
     }
     maSV.value=sv.maSV

}
function deleteAll(){
     console.log("xóa all")
     console.log(dataDelAll.value.value)
    listSinhVien.value= confirm("Xác nhận xóa") ? listSinhVien.value.filter(sv=>!dataDelAll.value.value.includes(sv.maSV)) :""
    
}
provide("dataDels",{editSV,deleteSV})

function getTuKhoa(tuKhoa){
  tukhoa.value=tuKhoa;
  // console.log(tukhoa.value)
}
</script>

<style >
.btn {
  font-weight: 500;
  color: white;
  background-color: red;
}

.label {
  background-color: aliceblue;
}
</style>