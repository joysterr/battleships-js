const logicBoard = []

function initLogicBoard() {
    for (let i = 0; i < grid; i++) {
        let arr = []
        for (let j = 0; j < grid; j++) {
            arr.push(0)
        }
        logicBoard.push(arr)
    }

    console.log(logicBoard)
}

initLogicBoard()