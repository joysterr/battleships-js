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
    }
}

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

function fireOutcome(xCo, yCo) {
    const btnClicked = document.getElementById(`btn${xCo}${yCo}`)
    btnClicked.innerHTML = '&times;'
    btnClicked.classList.add('board__btn--miss')
}

function activateRadar() {
    radarLeft--
    if (radarLeft < 0) {
        radarBtnStatus('disabled')
    } else {
        isRadarActive = true
        radarBtnStatus('active')
        console.log(`radar left: ${radarLeft}`)
    }
}

function radarBtnStatus(status) {
    const radarBtn = document.getElementById('radarBtn')
    switch (status) {
        case 'base':
            radarBtn.innerText = 'Activate Radar'
            break
        case 'active':
            radarBtn.innerText = 'Radar: ON'
            break
        case 'disabled':
            radarBtn.innerText = 'Radar: OFF'
            radarBtn.disabled = true
            break
    }
}