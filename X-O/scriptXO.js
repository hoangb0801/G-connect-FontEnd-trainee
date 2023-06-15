// lấy tất cả các ô trong bảng
let cellElements = document.querySelectorAll(".cell-btn");


// Khởi tạo biến lưu trữ trạng thái bảng chơi
let board = ['', '', '', '', '', '', '', '', ''];

// Khởi tạo biến lưu trữ lượt chơi hiện tại
let player = 'X';

// Gắn sự kiện click cho mỗi ô
cellElements.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (board[index] === '') {           // kiểm tra xem ô được chơi chưa
            board[index] = player;           // Cập nhật trạng thái 
            cell.innerText = player;         //  cập nhật
            if (checkWin(player)) {          // check win
                setTimeout(function () {
                    alert(`Người chơi ${player} thắng!`);
                    resetGame();

                }, 100)
            }
            else if (board.every(cell => cell !== '')) {    // check hòa
                setTimeout(function () {
                    alert("Trò chơi hòa!");
                    resetGame();

                }, 1000)

            } else {                                      // Đổi lượt chơi
                player = player === 'X' ? 'O' : 'X';
                console.log(player);
                document.querySelector(".player").innerHTML = player  // hiển thị lượt tiếp
            }
        }
    });
});

// check win
function checkWin(player) {
    const winArrays = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // hàng ngang
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // hàng dọc
        [0, 4, 8], [2, 4, 6] // đường chéo
    ];
    return winArrays.some(array => {
        return array.every(index => board[index] === player);
    });

}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', '']
    cellElements.forEach(function (cell) {
        cell.innerText = ""

    })

}