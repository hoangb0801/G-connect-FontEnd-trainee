import { createContext, useState } from "react";

const SvContext = createContext();

function SvProvider({ children }) {
    const initialState = {
        maSV: '',
        tenSV: '',
        ngaySinh: '',
        gioiTinh: "Nam",
        maKhoa: '',
        checkIdToUpdate: false,
    }
    const [search, setSearch] = useState("");
    const [sinhVien, setSinhVien] = useState(initialState)
    const [checkbox, setCheckBox] = useState([]);
    const data = {
        search,
        setSearch,
        setCheckBox,
        checkbox,
        sinhVien,
        setSinhVien
    }
    return (
        <SvContext.Provider value={data}>
            {children}
        </SvContext.Provider>

    )

}
export { SvContext, SvProvider }