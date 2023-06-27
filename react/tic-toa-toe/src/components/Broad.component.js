import { useContext, useEffect, useState } from "react"
import Square from "./Square.component";
import { XOContext } from "../context/X-OContext";
function Board() {
    const [key, setKey] = useState("")
    const [theme, setTheme] = useState("square");
    const [arrayWin, setArrayWin] = useState()
    const a = ["a", "b"]
    const data = useContext(XOContext);
    const { history, setHistory, sizeBoard, setSizeBoard } = data
    const rows = sizeBoard.rows;
    const columns = sizeBoard.colums;
    const array = []
    for (let i = 0; i < rows; i++) {
        array.push([]);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            array[i].push('')
        }
    }
    const intitArray = [...array]
    useEffect(() => setBoard(intitArray), [rows, columns])
    const initialBoard = [...intitArray]
    const [board, setBoard] = useState(initialBoard)
    const [currentPlayer, setCurrentPlayer] = useState('X'); // lượt chơi hiện tại
    function checkWin(currentPlayer, rowIndex, colIndex) {

        // console.log(rowIndex + "x" + colIndex)
        let result = false;
        let count = 1;
        // check hang dọc
        let arrayStore = ["" + rowIndex + colIndex]
        let arrayResult = [];
        // console.log(rowIndex)
        for (let i = rowIndex - 1; i >= 0; i--) {
            if (board[i][colIndex] === currentPlayer) {
                count++;
                arrayStore.push(i.toString() + colIndex.toString())
            }
            else {
                break
            }
        }
        for (let i = rowIndex + 1; i < rows; i++) {
            if (board[i][colIndex] === currentPlayer) {
                count++;
                arrayStore.push(i.toString() + colIndex.toString())
            }
            else {
                break
            }
        }
        if (count === 5) {
            result = true
            arrayResult = [...arrayStore]
        }
        // console.log("count doc:" + count)
        // check hang ngang
        arrayStore = ["" + rowIndex + colIndex]
        count = 1;
        for (let i = colIndex - 1; i >= 0; i--) {
            if (board[rowIndex][i] === currentPlayer) {
                count++;
                arrayStore.push(rowIndex.toString() + i.toString())
            }
            else {
                break
            }
        }
        for (let i = colIndex + 1; i < columns; i++) {
            if (board[rowIndex][i] === currentPlayer) {
                count++;
                arrayStore.push(rowIndex.toString() + i.toString())
            }
            else {
                break
            }
        }
        // console.log("count ngang: " + count)

        if (count === 5) {
            result = true
            arrayResult = [...arrayStore]
        }
        // check hangc cheo
        count = 1;
        arrayStore = ["" + rowIndex + colIndex]
        //  chéo trên trá
        for (let i = colIndex - 1; i >= 0; i--) {
            let row = rowIndex - (colIndex - i)
            if (row < 0) {
                break
            }
            else if (board[row][i] === currentPlayer) {
                count++;
                arrayStore.push(row.toString() + i.toString())
            }
            else {
                break
            }
        }
        if (count === 5) {
            result = true
            arrayResult = [...arrayStore]
        }
        for (let i = colIndex + 1; i < columns; i++) {
            // console.log(i)
            let row = rowIndex + (i - colIndex)
            if (row > rows - 1) {
                break
            }
            if (board[row][i] === currentPlayer) {
                count++;
                arrayStore.push(row.toString() + i.toString())
            }
            else {
                break
            }
        }
        // console.log("cheo: " + count)
        if (count === 5) {
            result = true
            arrayResult = [...arrayStore]
        }
        //     // cheo 2
        arrayStore = ["" + rowIndex + colIndex]
        count = 1;
        // trên phải
        for (let i = colIndex + 1; i < columns; i++) {
            let row = rowIndex - (i - colIndex)
            if (row < 0) {
                break;
            }
            if (board[rowIndex - (i - colIndex)][i] === currentPlayer) {
                count++;
                arrayStore.push(row.toString() + i.toString())
            }
            else {
                break
            }
        }
        if (count === 5) {
            result = true
            arrayResult = [...arrayStore]
        }
        // coo giam hang tang
        for (let i = colIndex - 1; i >= 0; i--) {
            let row = rowIndex + (colIndex - i)
            if (row > rows - 1) {
                break
            }
            else if (board[rowIndex + (colIndex - i)][i] === currentPlayer) {
                count++;
                arrayStore.push(row.toString() + i.toString())
            }
            else {
                break
            }
        }
        if (count === 5) {
            result = true
            arrayResult = [...arrayStore]
        }
        // setArrayWin(arrayResult)
        // console.log(arrayResult)
        return { result, arrayResult }
    }

    function checkHoa() {
        // console.log(rows + "x" + columns)
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (board[i][j] === "") {
                    return false
                }
            }
        }
        return true;
    }
    function handlClick(rowIndex, colIndex) {
        setKey(rowIndex.toString() + colIndex.toString())
        let a;
        let index = "player " + currentPlayer + " : " + (rowIndex + 1) + " x " + (colIndex + 1)
        if (board[rowIndex][colIndex] === "") {
            setHistory(pre => [...pre, index])
            const newBoard = [...board];
            newBoard[rowIndex][colIndex] = currentPlayer;
            setBoard(newBoard);
            if (checkWin(currentPlayer, rowIndex, colIndex).result) {
                a = checkWin(currentPlayer, rowIndex, colIndex).arrayResult
                setTimeout(
                    () => setArrayWin(a),
                    10
                )
                setTimeout(function () {
                    let check = window.confirm("Player thắng: " + currentPlayer);
                    if (check) {
                        setBoard(array)
                        setCurrentPlayer("X")
                        setHistory([])
                        setArrayWin([])
                        setKey('');
                    }
                }, 200)
            }
            else if (checkHoa()) {
                let check = window.confirm("Hòa");
                if (check) {
                    setBoard(array)
                    setCurrentPlayer("X")
                    setHistory([])
                    setArrayWin([])
                    setKey('');
                }
            }
            else {
                setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
            }
        }
        else {
            return;
        }
    }
    return (   // render bảng
        <>
            <div className="board">
                {board.map((rows, rowsIndex) => (
                    <div key={rowsIndex} className="board-row">
                        {rows.map((col, colIndex) =>
                            <Square
                                value={key}
                                key={rowsIndex.toString() + colIndex.toString()}
                                isLight={arrayWin && arrayWin.includes(rowsIndex.toString() + colIndex.toString())}
                                rowsIndex={rowsIndex}
                                colIndex={colIndex}
                                board={board}
                                arrayWin={arrayWin}
                                onSquareClick={() => handlClick(rowsIndex, colIndex)}
                                classStyle={theme}
                                crurrentLight={key === (rowsIndex.toString() + colIndex.toString()) ? true : false}
                            />)
                        }
                    </div>
                ))}
            </div>
        </>
    )
}
export default Board