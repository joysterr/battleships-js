const grid = 10
const board = document.querySelector('#board')

function createBoard() {
    for (i = 0; i < grid; i++) {
        for (j = 0; j < grid; j++) {
            board.innerHTML += `<button id="btn${j}${i}" class="board__btn" onclick="fire(${j},${i})">~</button>`
        }
    }
}

createBoard()