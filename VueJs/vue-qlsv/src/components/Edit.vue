<template>
 <form id="form-2" action="" class="edit-user" @submit.prevent="handleSubmit">
        <fieldset class="boder-layout">
            <legend>Chỉnh sửa</legend>
            <div class="sub">
                <button type="submit" @click="()=>btnClick='add'" class="btn">Thêm mới</button>
                <button type="submit" @click="()=>btnClick='edit'" class="btn">Cập Nhật</button>
                <button type="button" @click="deleteAllClick" class="btn">Xóa</button>
            </div>
            <table>
                <tr>
                    <td class="label-color">
                        <label for="txtMaSV">Mã SV</label>
                        <label for="txtMaSV" class="requemt">*</label>
                    </td>
                    <td>
                        <input v-model="maSV" type="text" name="txtMaSV" id="txtMaSV" required :disabled="check">
                    </td>
                </tr>
                <tr>
                    <td class="label-color">
                        <label for="txtTenSV">Tên sinh viên</label>
                        <label for="txtTenSV" class="requemt">*</label>
                    </td>
                    <td>
                        <input v-model="tenSV" type="text" name="txtTenSV" id="txtTenSV" required>
                    </td>
                </tr>
                <tr>
                    <td class="label-color">
                        <label for="txtNgaySinh">Ngày Sinh</label>
                    </td>
                    <td>
                        <input v-model="ngaySinh" type="date" name="txtNgaySinh" id="txtNgaySinh">
                    </td>
                </tr>
                <tr>
                    <td class="label-color">
                        <label for="Nam">Giới tính</label>
                    </td>
                    <td>
                        <input v-model="gioiTinh" class="gioiTinh" type="radio" id="Nam" name="rdbGioiTinh" value="Nam" :checked="gioiTinh=='Nam'?true:false">
                        <label for="Nam">Nam</label>
                        <input v-model="gioiTinh" class="gioiTinh" type="radio" id="Nu" name="rdbGioiTinh" value="Nữ" :checked="gioiTinh=='Nu'?true:false">
                        <label for="Nu">Nữ</label>
                    </td>
                </tr>
                <tr>
                    <td class="label-color">
                        <label for="drpKhoa">Khoa</label>
                        <label for="drpKhoa" class="requemt">*</label>
                    </td>
                    <td>
                        <select v-model="khoa" id="drpKhoa" name="drpKhoa" required>
                            <option disabled selected value> --Chọn khoa đào tạo-- </option>
                            <option value="CNTT">CNTT</option>
                            <option value="ATTT">ATTT</option>
                            <option value="QTKD">QTKD</option>
                            <option value="KT">KT</option>
                        </select>
                    </td>
                </tr>
            </table>
        </fieldset>
    </form>
</template>

<script setup>
import { ref, watch,toRefs } from "vue"
    const check=ref(false)
    const btnClick=ref("")
    const maSV=ref("")
    const tenSV=ref("")
    const ngaySinh=ref("")
    const gioiTinh=ref("Nam")
    const khoa=ref("")
  const props= defineProps({
    listSinhVien:Array,
    updateSinhVien:Object,
    maSinhVien:String
  })
  const { listSinhVien,updateSinhVien,maSinhVien } = toRefs(props)
  watch([updateSinhVien,maSinhVien],function(){
    check.value=true
    maSV.value=props.updateSinhVien.maSV
    tenSV.value=props.updateSinhVien.tenSV
    ngaySinh.value=props.updateSinhVien.ngaySinh
    gioiTinh.value=props.updateSinhVien.gioiTinh
    khoa.value=props.updateSinhVien.maKhoa
  })
  function init(){
    maSV.value=""
    tenSV.value=""
    ngaySinh.value=""
    gioiTinh.value=""
    khoa.value=""

  }
  const emit = defineEmits(['handleUpdate','handleDeleteAll'])
 
  function handleSubmit (){
    let newSv={
    maSV:maSV.value,
    tenSV:tenSV.value,
    ngaySinh:ngaySinh.value,
    gioiTinh:gioiTinh.value,
    maKhoa:khoa.value
  }
    if(btnClick.value==="add"){
        if(props.listSinhVien.some((sv) => sv.maSV === newSv.maSV)){
           alert("sinh viên đã tồn tại")
        }
        else{
            console.log(newSv)
            props.listSinhVien.push(newSv)
            init()
        }   
    }
    else{
        check.value=false
        emit("handleUpdate",newSv)
        init()
    }
  }
  function deleteAllClick(){
    emit("handleDeleteAll")
  }
</script>

<style scoped>
.requemt{
    color: red;
}

</style>