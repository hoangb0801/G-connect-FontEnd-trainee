import Button from "./share/Button.componet";
import { useContext, useState } from 'react';
import { SvContext } from "./share/Context";
const khoaList = [
    {
        value: "",
        label: "-- Chọn Khoa--"
    },
    {
        value: "ATTT",
        label: "An Toàn Thông Tin"
    },
    {
        value: "CNTT",
        label: "Công nghệ thông tin"
    },
    {
        value: "KT",
        label: "Kế toán"
    },
    {
        value: "QTKD",
        label: "Quản trị kinh doanh"
    }
]
function Edit({ listSV, setListSV }) {
    const initialState = {
        maSV: '',
        tenSV: '',
        ngaySinh: '',
        gioiTinh: "Nam",
        maKhoa: '',
    }
    // const [formData, setFormData] = useState(initialState)
    const data = useContext(SvContext);
    const { setCheckBox, checkbox } = data
    const formData = data.sinhVien;
    const setFormData = data.setSinhVien;
    console.log(data)
    const [btnSubmit, setBtnSubmit] = useState(initialState);
    // console.log(formData)
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handlDeleteAll = function (e) {
        const newList = listSV.filter(function (sv) {
            return !checkbox.includes(sv.maSV)
        })
        let choice = window.confirm("Xác nhận Xóa!");

        if (choice == true) {
            setListSV(newList);

        }

    }
    function handlSubmit(e) {
        e.preventDefault();
        const { checkIdToUpdate, ...NewFormData } = formData
        if (btnSubmit === "btnAdd") {
            let check = false;
            check = listSV.some((sv) => sv.maSV === formData.maSV)
            if (check) {
                alert("Sinh Viên đã tồn tại")
            }
            else {
                setListSV([...listSV, NewFormData])
                setFormData({ ...initialState })
            }
            // console.log(listSV);
        }
        else {  // submit update
            const index = listSV.findIndex(sv => sv.maSV === NewFormData.maSV)
            console.log(index)
            const newListSV = listSV;
            newListSV[index] = NewFormData;
            setListSV(newListSV)
            setFormData({ ...initialState })
        }
    }
    return (
        <form onSubmit={handlSubmit} >
            <fieldset className="boder-layout">
                <legend>Chỉnh sửa</legend>
                <div className="sub">
                    <Button
                        type="submit"
                        className='btn'
                        text="Thêm mới"
                        value="add"
                        onClick={() => setBtnSubmit("btnAdd")}

                    />
                    <Button
                        type="submit"
                        className='btn'
                        text="Cập nhật"
                        value="edit"
                        onClick={() => setBtnSubmit("btnEdit")}
                    />
                    <Button
                        type="button"
                        className='btn'
                        text="Xóa"
                        value="Xoa"
                        click={handlDeleteAll}
                    />
                </div>
                <div className="edit">
                    <div className='form-group'>
                        <label className="label_form-group" htmlFor="txtMaSV">Mã sinh viên :</label>
                        <input name="maSV" value={formData.maSV} id="txtMaSV" onChange={handleChange} required disabled={formData.checkIdToUpdate ? true : false} />
                    </div>
                    <div className='form-group'>
                        <label className="label_form-group" htmlFor="txtTenSV">Tên sinh viên :</label>
                        <input name="tenSV" id="txtTenSV" value={formData.tenSV} onChange={handleChange} required />
                    </div>
                    <div className='form-group'>
                        <label className="label_form-group" htmlFor="txtNgaySinh">Ngày sinh :</label>
                        <input name="ngaySinh" id="txtNgaySinh" type="date" value={formData.ngaySinh} onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label className="label_form-group"> Giới tính :
                        </label>
                        <input type="radio" id="rdbGioiTinh" name="gioiTinh" value="Nam" checked={formData.gioiTinh === 'Nam'} onChange={handleChange} />
                        <label htmlFor="rdbGioiTinh">Nam</label>
                        <input type="radio" id="rdbGioiTinh" name="gioiTinh" value="Nu" checked={formData.gioiTinh === 'Nu'} onChange={handleChange} />
                        <label htmlFor="rdbGioiTinh">Nữ</label>
                    </div>
                    <div className="form-group">
                        <label className="label_form-group" htmlFor='dropKhoa'>Khoa:</label>
                        <select
                            name='maKhoa'
                            onChange={handleChange}
                            id='dropKhoa'
                            value={formData.maKhoa}
                            required
                        >
                            {khoaList.map((khoa) => (
                                <option key={khoa.label} value={khoa.value}>
                                    {' '}
                                    {khoa.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </fieldset>
        </form>
    )

}
export default Edit;