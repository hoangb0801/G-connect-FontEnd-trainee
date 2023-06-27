import { createContext, useState } from "react";

const XOContext = createContext();

function ProsiderXO({ children }) {

    const [history, setHistory] = useState([])
    const [sizeBoard, setSizeBoard] = useState({
        rows: 5,
        colums: 5,
    });
    const data = {
        history,
        setHistory,
        sizeBoard,
        setSizeBoard,
    }
    return (
        <XOContext.Provider value={data}>
            {children}
        </XOContext.Provider>
    )
}
export { XOContext, ProsiderXO };