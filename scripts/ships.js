class Ship {
    constructor(shipName, letter, size) {
        this.shipName = shipName
        this.letter = letter
        this.size = size
    }
}

const aircraft = new Ship('Aircraft', 'A', 5)
const battleship = new Ship('Battleship', 'B', 4)
const destroyer = new Ship('Destroyer', 'D', 3)
const submarine = new Ship('Submarine', 'S', 2)
const cruiser = new Ship('Cruiser', 'C', 1)

function placeShip(ship) {
    const gridBounds = 9
    let [xCo, yCo] = genCoordinates()
    let isNotEmpty = true
    let shipOrientation = Math.random() > 0.5 ? true : false

    console.log(shipOrientation ? 'horizotal' : 'vertical')

    do {
        [xCo, yCo] = genCoordinates()
        if (logicBoard[yCo][xCo] === 0) {
            isNotEmpty = false
        }
    } while (isNotEmpty)

    console.log(xCo, yCo);

    if (shipOrientation) {
        // horizontal placement
        let reverseCo = 0
        for (let i = 0; i < ship.size; i++) {
            if (xCo + i > gridBounds) {
                reverseCo++
                logicBoard[yCo][xCo - reverseCo] = ship.size
            } else {
                logicBoard[yCo][xCo + i] = ship.size
            }
        }
    } else {
        // vertical placement
        let reverseCo = 0
        for (let i = 0; i < ship.size; i++) {
            if (yCo + i > gridBounds) {
                reverseCo++
                logicBoard[yCo - reverseCo][xCo] = ship.size
            } else {
                logicBoard[yCo + i][xCo] = ship.size
            }
        }
    }
}

function genCoordinates() {
    xCo = Math.round(Math.random() * 9)
    yCo = Math.round(Math.random() * 9)
    return [xCo, yCo]
}


const allShips = [aircraft, battleship, destroyer, submarine, cruiser]
allShips.forEach(ship => {
    placeShip(ship)
})