import { useContext } from "react"
import FormatDate from "./formatDate/formatDate"
import { SvContext } from "./share/Context"

function Row({ listSV, setListSV }) {
    const data = useContext(SvContext);
    const { setCheckBox, checkbox, search, setSearch } = data;
    function handlDelete(maSV) {
        const newList = listSV.filter(function (sv) {
            return sv.maSV !== maSV
        })
        setListSV(newList)
    }
    function handlEdit(sv) {
        const { sinhVien, setSinhVien } = data
        setSinhVien({ ...sv, checkIdToUpdate: true })
        console.log(sv)
    }
    function handlCheckBox(maSV) {
        console.log(maSV)

        setCheckBox([...checkbox, maSV])
        console.log(checkbox)
    }
    return (
        <>
            {listSV.filter((sv) => {
                return search === "" ? sv : (
                    sv.maSV.toLowerCase().includes(search.toLowerCase()) ||
                    sv.tenSV.toLowerCase().includes(search.toLowerCase()) ||
                    sv.ngaySinh.toLowerCase().includes(search.toLowerCase()) ||
                    sv.gioiTinh.toLowerCase().includes(search.toLowerCase()) ||
                    sv.maKhoa.toLowerCase().includes(search.toLowerCase())
                )
            }).map((sv) =>
                <tr key={sv.maSV}>
                    <td>
                        <input type="checkbox" onChange={() => handlCheckBox(sv.maSV)}></input>
                    </td>
                    <td>{sv.maSV}</td>
                    <td>{sv.tenSV}</td>
                    <td>
                        <FormatDate date={sv.ngaySinh} />
                    </td>
                    <td>{sv.gioiTinh}</td>
                    <td>{sv.maKhoa}</td>
                    <td>
                        <i onClick={() => handlEdit(sv)} className="icon-edit fa-solid fa-pen-to-square"></i>
                        <i onClick={() => handlDelete(sv.maSV)} className="icon-delete fa-solid fa-trash"></i>
                    </td>

                </tr>

            )}
        </>
    )
}

function Render({ listSV, setListSV }) {
    return (
        <div className="listUser">
            <fieldset className="boder-layout">
                <legend>Danh sách sinh viên</legend>
                <table className="boder-layout">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th> Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>Khoa</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="table-contain">
                        <Row listSV={listSV} setListSV={setListSV} type="checkbox" />
                    </tbody>
                </table>
            </fieldset>
        </div>
    )
}

export default Render






