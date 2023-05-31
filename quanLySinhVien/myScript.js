var sinhVienList=[
    {
        maSV: 'HN01',
        tenSV: 'Nguyễn Văn A',
        ngaySinh: '01/01/2000',
        gioiTinh:"Nam",
        maKhoa:'CNTT'
    },
    {
        maSV: 'HN02',
        tenSV: 'Nguyễn Văn B',
        ngaySinh: '01/01/2000',
        gioiTinh:"Nam",
        maKhoa:'CNTT'
    },
    {
        maSV: 'HN01',
        tenSV: 'Nguyễn Văn A',
        ngaySinh: '01/01/2000',
        gioiTinh:"Nam",
        maKhoa:'CNTT'
    },
    {
        maSV: 'HN02',
        tenSV: 'Nguyễn Văn B',
        ngaySinh: '01/01/2000',
        gioiTinh:"Nam",
        maKhoa:'CNTT'
    },
    

]
class SinhVien{
    constructor(maSV,tenSV,ngaySinh,gioiTinh,maKhoa){
        this.maSV=maSV;
        this.tenSV=tenSV;
        this.ngaySinh=ngaySinh;
        this.gioiTinh=gioiTinh;
        this.maKhoa=maKhoa;
    }
}
class Khoa{
    constructor(maKhoa,tenKhoa){
        this.maKhoa=maKhoa;
        this.tenKhoa=tenKhoa;
    }
}
reder()
function reder(){
    var elememnt= document.getElementsByClassName("table-contain");
    let text="";
    sinhVienList.forEach(function(sv){

        text +=`
        <tr>
        <td>
            <input type="checkbox">
        </td>
        <td class="txtMaSV">${sv.maSV}</td>
        <td class="txtName">${sv.tenSV}</td>
        <td class="txtNgaySinh">${sv.ngaySinh}</td>
        <td class="txtGioiTinh">${sv.gioiTinh}</td>
        <td class="txtKhoa">${sv.maKhoa}</td>
        <td>
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </td>
    </tr>
        `;
    } 
    )
    elememnt[0].innerHTML=text
   
     
}