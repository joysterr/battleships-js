const grid = 10
const board = document.querySelector('#board')

function createBoard() {
    for (i = 0; i < grid; i++) {
        for (j = 0; j < grid; j++) {
            board.innerHTML += `<button id="btn${i}${j}" class="board__btn" onclick="fire(${i},${j})">~</button>`
        }
    }
}

createBoard()