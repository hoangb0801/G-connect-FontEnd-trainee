class TicTacToe {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.board = [];
        this.currentPlayer = 'X';
        this.isGameOver = false;
        this.initializeBoard();
    }

    // Khởi tạo bảng
    initializeBoard() {
        for (let i = 0; i < this.rows; i++) {
            this.board.push(Array(this.columns).fill(''));
        }
    }

    // Kiểm tra xem người chơi đã thắng hay chưa
    checkWin(player) {
        // Kiểm tra hàng
        for (let i = 0; i < this.rows; i++) {
            let rowWin = true;
            for (let j = 0; j < this.columns; j++) {
                if (this.board[i][j] !== player) {
                    rowWin = false;
                    break;
                }
            }
            if (rowWin) {
                return true;
            }
        }

        // Kiểm tra cột
        for (let j = 0; j < this.columns; j++) {
            let colWin = true;
            for (let i = 0; i < this.rows; i++) {
                if (this.board[i][j] !== player) {
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
        for (let i = 0; i < Math.min(this.rows, this.columns); i++) {
            if (this.board[i][i] !== player) {
                mainDiagonalWin = false;
                break;
            }
        }
        if (mainDiagonalWin) {
            return true;
        }

        // Kiểm tra đường chéo phụ
        let antiDiagonalWin = true;
        for (let i = 0; i < Math.min(this.rows, this.columns); i++) {
            if (this.board[i][this.columns - 1 - i] !== player) {
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
    isBoardFull() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                if (this.board[i][j] === '') {
                    return false;
                }
            }
        }
        return true;
    }

    // Thực hiện lượt chơi của người chơi
    playerMove(row, col) {
        if (!this.isGameOver && this.board[row][col] === '') {
            this.board[row][col] = this.currentPlayer;
            if (this.checkWin(this.currentPlayer)) {
                this.isGameOver = true;
                console.log(`Người chơi ${this.currentPlayer} thắng!`);
            } else if (this.isBoardFull()) {
                this.isGameOver = true;
                console.log('Hòa!');
            } else {
                this.currentPlayer = (this.currentPlayer === 'X') ? 'O' : 'X';
            }
        }
    }

    // Hiển thị bảng
    displayBoard() {
        for (let i = 0; i < this.rows; i++) {
            let rowString = '';
            for (let j = 0; j < this.columns; j++) {
                if (this.board[i][j] === '') {
                    rowString += '-';
                } else {
                    rowString += this.board[i][j];
                }
                rowString += ' ';
            }
            console.log(rowString.trim());
        }
    }
}

// Sử dụng:
const game = new TicTacToe(5, 5);
game.displayBoard();  // Hiển thị bảng
game.playerMove(0, 0); // Người chơi X đánh vào ô (0, 0)
game.displayBoard();  // Hiển thị bảng sau lượt chơi