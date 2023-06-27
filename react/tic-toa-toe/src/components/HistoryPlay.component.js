import { useContext, useState } from "react"
import { XOContext } from "../context/X-OContext"

function HistoryPlay() {
    const data = useContext(XOContext);
    const { history } = data
    const [state, setUseState] = useState("")

    return (
        <div className="history" style={{ paddingLeft: "10px" }}>
            <h1>lịch sử chơi</h1>
            <button onClick={() => setUseState(state === "" ? "reverse-list" : "")}>toggle</button>
            <ol className={state} >
                {
                    history.map((item, index) => (
                        <li className="itemHistory" key={index}>{item}</li>
                    ))
                }
            </ol>
        </div>
    )
}
export default HistoryPlay