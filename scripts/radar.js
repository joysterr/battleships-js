// RADAR FEATURE 
let radarLeft = 3

function placeRadar(xCo, yCo) {
    const radarSize = 1
    const radarMapX = [xCo, (xCo+radarSize), (xCo-radarSize)]
    const radarMapY = [yCo, (yCo+radarSize), (yCo-radarSize)]
    const isRadarActive = true

    radarLeft--

    for (let i = 0; i < radarMapX.length; i++) {
        for (let j = 0; j < radarMapY.length; j++) {
            try {
                fireOutcome(radarMapX[i], radarMapY[j], isRadarActive)
            }
            catch {
                continue
            }
        }
    }

    renderRadarCount()
    updateScore('radar')

    // test
    console.log(radarMapX)
    console.log(radarMapY)
}

function activateRadar() {
    if (radarLeft <= 0) {
        // disable radar btn
        radarBtnStatus('disabled')
        return
    } 
    if (!isRadarActive) {
        isRadarActive = true
        radarBtnStatus('active')
        console.log(`radar left: ${radarLeft}`)
    } else {
        isRadarActive = false
        radarBtnStatus('base')
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
            radarBtn.classList.add('radar__btn--disabled')
            radarBtn.innerText = 'Radar: OFF'
            radarBtn.disabled = true
            break
    }
}

function renderRadarCount() {
    const radarCount = document.getElementById('radarCount')
    radarCount.innerHTML = `Radar left: ${radarLeft}`
}
