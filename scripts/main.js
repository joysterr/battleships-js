let isRadarActive = false
let clickCount = 0

function fire(xCo, yCo) {
    if (isRadarActive) {
        placeRadar(xCo, yCo)
        isRadarActive = false
        radarBtnStatus('base')
    } else {
        // register click/fire if not already clicked (i.e. not x )
        if (logicBoard[yCo][xCo] >= 0) {
            fireOutcome(xCo, yCo)
        }
    }

    checkWin()

    clickCount++

    renderLiveScore()
}

function fireOutcome(xCo, yCo, isRadarActive=false) {
    const btnClicked = document.getElementById(`btn${xCo}${yCo}`)
    // target missed
    if (logicBoard[yCo][xCo] === 0) {
        btnClicked.innerHTML = '&times;'
        btnClicked.classList.add('board__btn--miss')
        logicBoard[yCo][xCo] = -1
        !isRadarActive && updateScore('miss')
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

            // render ship/track panel details
            updateShipPanel(ship)
        }
    })
}

// counts ship hits, game ends when 15 'x' marks are found in logic board matrix
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
        if (score > currentHighScore) {
            saveHighScore()
            currentHighScore = score
        }
        renderEndgameScores(score, currentHighScore)
        showScreen(1) // display endgame overlay screen
    }
}

function renderEndgameScores(score, highScore) {
    const endgameScore = document.getElementById('endgameScore')
    const endgameHighScore = document.getElementById('endgameHighScore')

    endgameScore.innerText = score
    endgameHighScore.innerText = highScore
}

function restartGame() {
    hideScreen(1) // hide endgame overlay screen
    setTimeout(() => {
        location.reload() // reload battleships
    }, 300)
}
