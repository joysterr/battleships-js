let isRadarActive = false
let radarLeft = 3

function fire(xCo, yCo) {
    console.log('xCo: ' + xCo, 'yCo: '+ yCo)
    
    if (isRadarActive) {
        placeRadar(xCo, yCo)
        isRadarActive = false
        radarBtnStatus('base')
    } else {
        fireOutcome(xCo, yCo)
        checkWin()
    }
}

function fireOutcome(xCo, yCo) {
    const btnClicked = document.getElementById(`btn${xCo}${yCo}`)
    if (logicBoard[yCo][xCo] === 0) {
        btnClicked.innerHTML = '&times;'
        btnClicked.classList.add('board__btn--miss')
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
            logicBoard[yCo][xCo] = -1
        }
    })
}


function checkWin() {
    let sum = 0
    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            sum += logicBoard[i][j]
        }
    }
    if (sum === -15) { // all ship sizes, negated total
        alert('WINNER. GAME OVER!')
    }
}


// RADAR FEATURE 
function placeRadar(xCo, yCo) {
    const radarSize = 1
    const radarMapX = [xCo, (xCo+radarSize), (xCo-radarSize)]
    const radarMapY = [yCo, (yCo+radarSize), (yCo-radarSize)]
    console.log(radarMapX)
    console.log(radarMapY)
    for (let i = 0; i < radarMapX.length; i++) {
        for (let j = 0; j < radarMapY.length; j++) {
            try {
                fireOutcome(radarMapX[i], radarMapY[j])
            }
            catch {
                continue
            }
        }
    }
}

function activateRadar() {
    radarLeft--
    if (radarLeft < 0) {
        radarBtnStatus('disabled')
    } else {
        isRadarActive = true
        radarBtnStatus('active')
        console.log(`radar left: ${radarLeft}`)
        updateRadarCount()
    }
}

function radarBtnStatus(status) {
    const radarBtn = document.getElementById('radarBtn')
    switch (status) {
        case 'base':
            radarBtn.innerText = 'Activate Radar'
            radarBtn.classList.remove('radar__btn--active')
            break
        case 'active':
            radarBtn.innerText = 'Radar: ON'
            radarBtn.classList.add('radar__btn--active')
            break
        case 'disabled':
            radarBtn.innerText = 'Radar: OFF'
            radarBtn.disabled = true
            break
    }
}

function updateRadarCount() {
    const radarCount = document.getElementById('radarCount')
    radarCount.innerHTML = `Radar left: ${radarLeft}`
}