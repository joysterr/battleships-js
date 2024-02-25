const grid = 10
const board = document.querySelector('#board')
const logicBoard = []

function initLogicBoard() {
    for (let i = 0; i < grid; i++) {
        let arr = []
        for (let j = 0; j < grid; j++) {
            arr.push(0)
        }
        logicBoard.push(arr)
    }
    // test
    console.log(logicBoard)
}

function renderBoard() {
    for (i = 0; i < grid; i++) {
        for (j = 0; j < grid; j++) {
            board.innerHTML += `<button id="btn${j}${i}" class="board__btn" onclick="fire(${j},${i})">~</button>`
        }
    }
}

initLogicBoard()
renderBoard()