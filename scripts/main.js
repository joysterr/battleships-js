let isRadarActive = false
let clickCount = 0

function fire(xCo, yCo) {
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

    // display updated live score
    renderLiveScore()

    // test
    console.log('shot fired: ', 'xCo: ' + xCo, 'yCo: '+ yCo)
    console.log('score: ', score)
}

function fireOutcome(xCo, yCo) {
    const btnClicked = document.getElementById(`btn${xCo}${yCo}`)
    // target missed
    if (logicBoard[yCo][xCo] === 0) {
        btnClicked.innerHTML = '&times;'
        btnClicked.classList.add('board__btn--miss')
        logicBoard[yCo][xCo] = -1
        updateScore('miss')
    } else {
        // target hit
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

            updateScore('hit')
            ship.updateShipHitCount()
            ship.destroyed() && updateScore('bonus', ship.bonus)
        }
    })
}


function checkWin() {
    let xCount = 0
    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            if (logicBoard[i][j] === 'x') {
                xCount++
            }
        }
    }
    if (xCount === 15) {
        let currentHighScore = getHighScore()
        const endgameScore = document.getElementById('endgameScore')
        const endgameHighScore = document.getElementById('endgameHighScore')
        if (score > currentHighScore) {
            saveHighScore()
            currentHighScore = score
        }
        endgameScore.innerText = score
        endgameHighScore.innerText = currentHighScore
        showScreen(1)
    }
}

function restartGame() {
    hideScreen(1)
    setTimeout(() => {
        location.reload()
    }, 300)
}
