import React, { useState } from 'react';

function TicTacToe() {
    const rows = 5; // Số hàng
    const columns = 5; // Số cột

    const [board, setBoard] = useState(() => {
        const initialBoard = [];
        for (let i = 0; i < rows; i++) {
            initialBoard.push(Array(columns).fill(''));
        }
        return initialBoard;
    });

    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [isGameOver, setIsGameOver] = useState(false);

    // Kiểm tra xem người chơi đã thắng hay chưa
    function checkWin(player) {
        // Kiểm tra hàng
        for (let i = 0; i < rows; i++) {
            let rowWin = true;
            for (let j = 0; j < 5; j++) {
                if (board[i][j] !== player) {
                    rowWin = false;
                    break;
                }
            }
            if (rowWin) {
                return true;
            }
        }

        // Kiểm tra cột
        for (let j = 0; j < columns; j++) {
            let colWin = true;
            for (let i = 0; i < 5; i++) {
                if (board[i][j] !== player) {
                    colWin = false;
                    break;
                }
            }
            if (colWin) {
                return true;
            }
        }

        // Kiểm tra đường chéo chính
        let mainDiagonalWin = true;
        for (let i = 0; i < Math.min(rows, columns); i++) {
            if (board[i][i] !== player) {
                mainDiagonalWin = false;
                break;
            }
        }
        if (mainDiagonalWin) {
            return true;
        }

        // Kiểm tra đường chéo phụ
        let antiDiagonalWin = true;
        for (let i = 0; i < Math.min(rows, columns); i++) {
            if (board[i][columns - 1 - i] !== player) {
                antiDiagonalWin = false;
                break;
            }
        }
        if (antiDiagonalWin) {
            return true;
        }

        return false;
    }

    // Kiểm tra xem bảng đã đầy chưa
    function isBoardFull() {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (board[i][j] === '') {
                    return false;
                }
            }
        }
        return true;
    }

    // Thực hiện lượt chơi
    function makeMove(row, col) {
        if (!isGameOver && board[row][col] === '') {
            const newBoard = [...board];
            newBoard[row][col] = currentPlayer;
            setBoard(newBoard);
            if (checkWin(currentPlayer)) {
                setIsGameOver(true);
                alert(`Người chơi ${currentPlayer} thắng!`);
            } else if (isBoardFull()) {
                setIsGameOver(true);
                alert('Hòa!');
            } else {
                setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
            }
        }
    }

    // Render ô vuông
    function renderSquare(row, col) {
        return (
            <button style={{ display: "inline-flex", width: "50px", height: "50px", backgroundColor: "gray" }}
                className="square"
                onClick={() => makeMove(row, col)}
                disabled={isGameOver || board[row][col] !== ''}
            >
                {board[row][col]}
            </button>
        );
    }

    // Render bảng
    function renderBoard() {
        return (
            <div className="board" style={{ width: 500, height: 200 }}>
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="board-row">
                        {row.map((_, colIndex) => renderSquare(rowIndex, colIndex))}
                    </div>
                ))}
            </div>
        );
    }

    // Render trạng thái và bảng
    return (
        <div className="game">
            <div className="game-status">
                {isGameOver ? 'Trò chơi kết thúc' : `Lượt chơi: ${currentPlayer}`}
            </div>
            {renderBoard()}
        </div>
    );
}

export default TicTacToe;