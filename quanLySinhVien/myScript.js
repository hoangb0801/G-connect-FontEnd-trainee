var sinhVienList = [
    {
        maSV: 'HN01',
        tenSV: 'Nguyễn Văn A',
        ngaySinh: '01/01/2000',
        gioiTinh: "Nam",
        maKhoa: 'CNTT'
    },
    {
        maSV: 'HN02',
        tenSV: 'Nguyễn Văn B',
        ngaySinh: '01/01/2000',
        gioiTinh: "Nam",
        maKhoa: 'CNTT'
    },
    {
        maSV: 'HN03',
        tenSV: 'Nguyễn Văn C',
        ngaySinh: '01/01/2000',
        gioiTinh: "Nam",
        maKhoa: 'CNTT'
    },
    {
        maSV: 'HN04',
        tenSV: 'Nguyễn Văn D',
        ngaySinh: '01/01/2000',
        gioiTinh: "Nam",
        maKhoa: 'CNTT'
    },
    {
        maSV: 'VP02',
        tenSV: 'Nguyễn Văn A',
        ngaySinh: '01/01/2000',
        gioiTinh: "Nam",
        maKhoa: 'CNTT'
    },
    {
        maSV: 'NN01',
        tenSV: 'Nguyễn Văn B',
        ngaySinh: '01/01/2000',
        gioiTinh: "Nu",
        maKhoa: 'KT'
    },
    {
        maSV: 'GC11',
        tenSV: 'Nguyễn Văn A',
        ngaySinh: '01/01/2000',
        gioiTinh: "Nu",
        maKhoa: 'CNTT'
    },
    {
        maSV: 'HN09',
        tenSV: 'Nguyễn Văn B',
        ngaySinh: '01/01/2000',
        gioiTinh: "Nam",
        maKhoa: 'CNTT'
    },
    {
        maSV: 'HH01',
        tenSV: 'Nguyễn Văn A',
        ngaySinh: '01/01/2000',
        gioiTinh: "Nam",
        maKhoa: 'CNTT'
    },
    {
        maSV: 'HH02',
        tenSV: 'Nguyễn Văn B',
        ngaySinh: '01/01/2000',
        gioiTinh: "Nu",
        maKhoa: 'ATTT'
    },

]
class SinhVien {
    constructor(maSV, tenSV, ngaySinh, gioiTinh, maKhoa) {
        this.maSV = maSV;
        this.tenSV = tenSV;
        this.ngaySinh = ngaySinh;
        this.gioiTinh = gioiTinh;
        this.maKhoa = maKhoa;
    }

}
class Khoa {
    constructor(maKhoa, tenKhoa) {
        this.maKhoa = maKhoa;
        this.tenKhoa = tenKhoa;
    }
}
// In danh sách---------------------------------
reder()    // reder ra danh sách mặc định
function reder() {

    var elememnt = document.getElementsByClassName("table-contain");
    let text = "";
    sinhVienList.forEach(function (sv) {

        text += `
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
            <i onclick="editClick(this)" class="icon-edit fa-solid fa-pen-to-square"></i>
            <i onclick="deleteClick(this)" class="icon-delete fa-solid fa-trash"></i>
        </td>
    </tr>
        `;
    }
    )
    elememnt[0].innerHTML = text
}


// tìm kiếm - trả về dánh sách sinh viên------------------------
let formElement1 = document.getElementById("form-1");
if (formElement1) {
    formElement1.onsubmit = function (e) {
        e.preventDefault();
        searchElement = formElement1.getElementsByClassName("seach-input");
        // console.log(searchElement)
        let keyWord = searchElement[0].value;
        // console.log(keyWord)
        if (keyWord == "") {
            reder()
        }
        else {
            let listSeach = sinhVienList.filter(function (sv) {
                return sv.maSV == keyWord || sv.tenSV == keyWord || sv.maKhoa == keyWord
            })
            rederSeach(listSeach);

        }

    }


}


// trả về danh sách sau khi tìm kiếm ----------------------------
function rederSeach(listSeach) {
    var elememnt = document.getElementsByClassName("table-contain");
    let text = "";
    listSeach.forEach(function (sv) {

        text += `
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
            <i onclick="editClick(this)" class="icon-edit fa-solid fa-pen-to-square"></i>
            <i onclick="deleteClick(this)" class="icon-delete fa-solid fa-trash"></i>
        </td>
    </tr>
        `;
    }
    )
    elememnt[0].innerHTML = text
}

// Sử lý submit form ------------------------
let formElement2 = document.getElementById("form-2");
formElement2.onsubmit = function (e) {
    e.preventDefault();
    const action = e.submitter.value;
    if (action == "add") {
        themSinhVien(formElement2)
    }
    if (action == "edit") {
        suaSinhVien(formElement2)
    }
}
function getDataForm(formEle) {
    let dataForms = formEle.querySelectorAll("[name]");  // lấy về 1 mảng các element có attribuite name
    // console.log(dataForms);
    let inputData = Array.from(dataForms).reduce(function (value, input) {  // trả về đối tượng với thuộc tính là value của input
        return (value[input.name] = input.value) && value
    }, {})
    // console.log(inputData)
    sinhVien.maSV = inputData.txtMaSV;
    sinhVien.tenSV = inputData.txtTenSV
    sinhVien.ngaySinh = inputData.txtNgaySinh
    // sinhVien.gioiTinh=inputData.rdbGioiTinh
    sinhVien.maKhoa = inputData.drpKhoa;
    let gioiTinh = formEle.querySelectorAll(".gioiTinh");
    gioiTinh.forEach(function (gt) {
        if (gt.checked) {
            // console.log(gt.value)
            sinhVien.gioiTinh = gt.value;
        }
    })
    // console.log(gioiTinh)
    // console.log(sinhVien);
    let checkID = false;
    checkID = sinhVienList.some(function (item) {
        return item.maSV === sinhVien.maSV
    })
    function myFunction(sv) {
        // console.log("ma1:"+ sv.maSV+"và"+ sinhVien.maSV)
        return sv.maSV == sinhVien.maSV;
    }
    if (!checkID) {
        sinhVienList.push(sinhVien);

        reder();
        init(formEle)
        console.log(sinhVienList)


    }
    else {
        alert("Mã Sinh viên đã tồn tại.")
    }


}
// thêm sinh viên-----------------------------
function themSinhVien(formEle) {
    let sinhVien = new SinhVien();
    let dataForms = formEle.querySelectorAll("[name]");  // lấy về 1 mảng các element có attribuite name
    // console.log(dataForms);
    let inputData = Array.from(dataForms).reduce(function (value, input) {  // trả về đối tượng với thuộc tính là value của input
        return (value[input.name] = input.value) && value
    }, {})
    // console.log(inputData)
    sinhVien.maSV = inputData.txtMaSV;
    sinhVien.tenSV = inputData.txtTenSV
    sinhVien.ngaySinh = inputData.txtNgaySinh
    // sinhVien.gioiTinh=inputData.rdbGioiTinh
    sinhVien.maKhoa = inputData.drpKhoa;
    let gioiTinh = formEle.querySelectorAll(".gioiTinh");
    gioiTinh.forEach(function (gt) {
        if (gt.checked) {
            // console.log(gt.value)
            sinhVien.gioiTinh = gt.value;
        }
    })
    // console.log(gioiTinh)
    // console.log(sinhVien);
    let checkID = false;
    checkID = sinhVienList.some(function (item) {
        return item.maSV === sinhVien.maSV
    })
    // function myFunction(sv) {
    //     // console.log("ma1:"+ sv.maSV+"và"+ sinhVien.maSV)
    //     return sv.maSV == sinhVien.maSV;
    // }
    if (!checkID) {
        sinhVienList.push(sinhVien);

        reder();
        init(formEle)
        console.log(sinhVienList)


    }
    else {
        alert("Mã Sinh viên đã tồn tại.")
    }

}

// XÓA SINH VIÊN-----------------------

function deleteClick(e) {
    // console.log(e)
    parentElementIcon = e.parentElement.parentElement;
    maSvElememnt = parentElementIcon.getElementsByClassName("txtMaSV");
    let maSV = maSvElememnt[0].innerHTML;
    let arrMaSv = [];
    arrMaSv.push(maSV)
    // console.log(arrMaSv)
    let choice = confirm("Xác nhận xóa sinh viên!");
    if (choice == true) {
        xoaSinhVien(arrMaSv);
    } else {
        // console.log("hủy")
    }

}

function deleteAllClick() {

    let tableElement = document.getElementsByClassName("table-contain");
    console.log(tableElement)
    let tdTable = tableElement[0].querySelectorAll("tr");
    let arrayMaSv = []
    Array.from(tdTable).forEach(function (td) {
        let checkbox = td.getElementsByTagName("input")[0].checked
        if (checkbox) {
            let maSv = td.getElementsByClassName("txtMaSV");
            arrayMaSv.push(maSv[0].innerHTML);
        }

    })
    let choice = confirm("Xác nhận Xóa!");
    if (choice == true) {
        xoaSinhVien(arrayMaSv);
    } else {

    }
}
function xoaSinhVien(arrayMaSv) {
    let newSinhVienList = sinhVienList.filter(checkMaSv);
    function checkMaSv(sv) {
        return !arrayMaSv.includes(sv.maSV);
    }
    console.log(newSinhVienList)
    sinhVienList = newSinhVienList;
    reder();
}
//-Sửa sinh viên----------------------------------------------
var indexSvEdit = 0;
function editClick(e) {
    parentElementIcon = e.parentElement.parentElement;
    maSvElememnt = parentElementIcon.getElementsByClassName("txtMaSV");
    let maSV = maSvElememnt[0].innerHTML;
    let arrMaSv = [];
    arrMaSv.push(maSV)
    console.log(arrMaSv);

    indexSvEdit = sinhVienList.findIndex(function (value) {
        return value.maSV == maSV;
    })
    console.log(indexSvEdit)

    formElement2.querySelector("#txtMaSV").value = sinhVienList[indexSvEdit].maSV
    formElement2.querySelector("#txtMaSV").setAttribute("disabled", "")
    formElement2.querySelector("#txtTenSV").value = sinhVienList[indexSvEdit].tenSV
    formElement2.querySelector("#txtNgaySinh").value = sinhVienList[indexSvEdit].ngaySinh

    if (sinhVienList[indexSvEdit].gioiTinh == "Nu") {
        formElement2.querySelector("#Nu").value = sinhVienList[indexSvEdit].gioiTinh
        formElement2.querySelector("#Nu").checked = true
    }
    else {
        formElement2.querySelector("#Nam").checked = true

    }
    formElement2.querySelector("#drpKhoa").value = sinhVienList[indexSvEdit].maKhoa



}
function suaSinhVien(formEle) {
    console.log(indexSvEdit);
    let sinhVien = sinhVienList[indexSvEdit]
    let dataForms = formEle.querySelectorAll("[name]");  // lấy về 1 mảng các element có attribuite name
    // console.log(dataForms);
    let inputData = Array.from(dataForms).reduce(function (value, input) {  // trả về đối tượng với thuộc tính là value của input
        return (value[input.name] = input.value) && value
    }, {})
    // console.log(inputData)
    sinhVien.maSV = inputData.txtMaSV;
    sinhVien.tenSV = inputData.txtTenSV
    sinhVien.ngaySinh = inputData.txtNgaySinh
    // sinhVien.gioiTinh=inputData.rdbGioiTinh
    sinhVien.maKhoa = inputData.drpKhoa;
    let gioiTinh = formEle.querySelectorAll(".gioiTinh");
    gioiTinh.forEach(function (gt) {
        if (gt.checked) {
            // console.log(gt.value)
            sinhVien.gioiTinh = gt.value;
        }
    })
    let checkID = false;
    checkID = sinhVienList.some(function (item) {
        return item.maSV === sinhVien.maSV
    })
    // function myFunction(sv) {
    //     return sv.maSV == sinhVien.maSV;
    // }
    reder();
    init(formEle)
    console.log(sinhVienList)


}
// init form
function init(formEle) {
    formElement2.querySelector("#txtMaSV").value = ""
    formElement2.querySelector("#txtMaSV").removeAttribute("disabled", "")
    formElement2.querySelector("#txtTenSV").value = ""
    formElement2.querySelector("#txtNgaySinh").value = ""
    formElement2.querySelector("#drpKhoa").value = ""
}