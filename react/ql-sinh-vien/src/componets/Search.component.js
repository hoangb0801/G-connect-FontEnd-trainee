
import Button from "./share/Button.componet";
import { useContext, useState } from "react";
import { SvContext } from "./share/Context";
function Seach() {
    const data = useContext(SvContext)
    const { search, setSearch } = data;
    const handler = function (e) {
        e.preventDefault();
        console.log(search);
    }
    const handlInput = function (e) {
        setSearch(e.target.value)
    }
    return (
        <form id="form-1" action="" onSubmit={handler}>
            <fieldset className="boder-layout">
                <legend>Tìm kiếm</legend>
                <label className="label_form-group" htmlFor="txtTuKhoa">Tìm kiếm sinh viên: </label>
                <input
                    id="txtTuKhoa"
                    placeholder="Từ khóa cần tìm"
                    value={search}
                    className="seach-input"
                    onChange={handlInput}
                />
                <Button
                    type="submit"
                    className='seach btn'
                    text="Tìm kiếm"
                />
            </fieldset>
        </form>
    )
}


export default Seach