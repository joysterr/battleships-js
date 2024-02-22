let isRadarActive = false
let radarLeft = 3
let clickCount = 0

function fire(xCo, yCo) {
    console.log('xCo: ' + xCo, 'yCo: '+ yCo)
    
    if (isRadarActive) {
        placeRadar(xCo, yCo)
        isRadarActive = false
        radarBtnStatus('base')
    } else {
        if (logicBoard[yCo][xCo] >= 0) {
            fireOutcome(xCo, yCo)
            checkWin()
            clickCount++
        }
    }
}

function fireOutcome(xCo, yCo) {
    const btnClicked = document.getElementById(`btn${xCo}${yCo}`)
    if (logicBoard[yCo][xCo] === 0) {
        btnClicked.innerHTML = '&times;'
        btnClicked.classList.add('board__btn--miss')
        logicBoard[yCo][xCo] = -1
    } else {
        shipHit(xCo, yCo)
    }
}

function shipHit(xCo, yCo) {
    const btnClicked = document.getElementById(`btn${xCo}${yCo}`)
    allShips.forEach(ship => {
        if (logicBoard[yCo][xCo] === ship.size) {
            btnClicked.innerHTML = ship.letter
            btnClicked.classList.add('board__btn--hit')
            logicBoard[yCo][xCo] = 'x'
        }
    })
}


function checkWin() {
    let xCount = 0
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            if (logicBoard[i][j] === 'x') {
                xCount++
            }
        }
    }
    if (xCount === 15) {
        alert('GAMEOVEr')
        console.log(xCount)
    }
}


