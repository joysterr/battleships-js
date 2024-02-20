const grid = 10
const board = document.querySelector('#board')

function createBoard() {
    for (i = 0; i < grid; i++) {
        for (j = 0; j < grid; j++) {
            board.innerHTML += `<button id="${i}${j}" class="board-btn" onclick="fire(${i},${j})">~</button>`
        }
        board.innerHTML += "<br>"
    }
}

createBoard()