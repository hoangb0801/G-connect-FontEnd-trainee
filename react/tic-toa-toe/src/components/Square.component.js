function Square({ rowsIndex, colIndex, board, onSquareClick, isLight, crurrentLight }) {

    return (
        <>
            <button
                // key={key}
                // value={key}
                className={`square ${isLight && "win"} ${crurrentLight && "win"}`}
                onClick={onSquareClick}      // truyền prop từ con sang cha
            >
                {board[rowsIndex][colIndex]}
            </button>
        </>
    )
}
export default Square;