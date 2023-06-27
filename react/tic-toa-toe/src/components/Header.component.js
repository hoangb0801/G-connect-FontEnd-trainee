import { useContext, useState } from "react"
import { XOContext } from "../context/X-OContext"

function Headers() {
    const [state, setState] = useState({})
    const data = useContext(XOContext)
    const { sizeBoard, setSizeBoard } = data
    function handlChange(e) {
        const { name, value } = e.target
        setState(pre => ({ ...pre, [name]: Number(value) }))
    }
    function handlClick() {
        if (!state.rows) {
            window.confirm("Vui lòng nhập Number!")
        }
        else {
            setSizeBoard({ ...state })
            // console.log("Headers" + sizeBoard.rows + "x" + sizeBoard.colums)
        }

    }
    return (
        <div className="header" >
            <h1>Game Cờ X-O</h1>
            <h3>Nhập kích cỡ bảng:</h3>
            <div>
                <label>hàng x cột :</label>
                <input value={state.value} name="rows" className="header_input" onChange={handlChange} />
                x
                <input value={state.value} name="colums" className="header_input" onChange={handlChange} />
                <button onClick={handlClick}>Chơi</button>
            </div>


        </div>
    )
}
export default Headers