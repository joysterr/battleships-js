class Ship {
    constructor(shipName, letter, size, shipHitCount, bonus) {
        this.shipName = shipName
        this.letter = letter
        this.size = size
        this.shipHitCount = shipHitCount
        this.bonus = bonus
    }
    updateShipHitCount() {
        this.shipHitCount++
    }
    destroyed() {
        if (this.shipHitCount === this.size) {
            return true
        }
    }
}

// init all ships
const aircraft = new Ship('Aircraft', 'A', 5, 0, 5)
const battleship = new Ship('Battleship', 'B', 4, 0, 10)
const destroyer = new Ship('Destroyer', 'D', 3, 0, 15)
const submarine = new Ship('Submarine', 'S', 2, 0, 20)
const cruiser = new Ship('Cruiser', 'C', 1, 0, 25)

function validConfig(ship) {
    const gridBounds = 9
    const shipOrientation = Math.round(Math.random()) > 0.5 ? true : false // true = horizontal, false = vertical 
    let [xCo, yCo] = genCoordinates()
    let validConfigArr = []
    let valid = false

    do {
        if (isValidCoordinates(xCo, yCo)) {
            if (shipOrientation) {
                // horizontal placement
                let reverseCo = 0
                for (let i = 0; i < ship.size; i++) {
                    if (xCo + i > gridBounds) {
                        // right to left placement of ship parts
                        reverseCo++
                        if (!logicBoard[yCo][xCo - reverseCo]) {
                            validConfigArr.push([yCo, xCo - reverseCo])
                        } else {
                            validConfigArr = []
                        }
                    } else {
                        // left to right placement of ship parts
                        if (!logicBoard[yCo][xCo + i]) {
                            validConfigArr.push([yCo, xCo + i])
                        } else {
                            validConfigArr = []
                        }
                    }
                }
            } else {
                // vertical placement
                let reverseCo = 0
                for (let i = 0; i < ship.size; i++) {
                    if (yCo + i > gridBounds) {
                        // bottom to top placement of ship parts
                        reverseCo++
                        if (!logicBoard[yCo - reverseCo][xCo]) {
                            validConfigArr.push([yCo - reverseCo, xCo])
                        } else {
                            validConfigArr = []
                        }
                    } else {
                        // top to bottom placement of ship parts
                        if (!logicBoard[yCo + i][xCo]) {
                            validConfigArr.push([yCo + i, xCo])
                        } else {
                            validConfigArr = []
                        }
                    }
                }
            }
            if (validConfigArr.length === ship.size) {
                valid = true

                return validConfigArr
            }
        }     
        [xCo, yCo] = genCoordinates() // regen if fails all checks
    } while (!valid)
}

function genCoordinates() {
    xCo = Math.round(Math.random() * 9)
    yCo = Math.round(Math.random() * 9)
    return [xCo, yCo]
}

function isValidCoordinates(xCo, yCo) {
    if (logicBoard[yCo][xCo] === 0) {
        return true
    }
}

// place ship at valid coordinates
function placeShip(validShip, ship) {
    validShip.forEach(co => {
        logicBoard[co[0]][co[1]] = ship.size
    })
}


// SPAWN SHIPS
const allShips = [aircraft, battleship, destroyer, submarine, cruiser]
allShips.forEach(ship => {
    const validShip = validConfig(ship)
    placeShip(validShip, ship)
})