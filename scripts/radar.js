// RADAR FEATURE 
let radarLeft = 3

function placeRadar(xCo, yCo) {
    const radarSize = 1
    const radarMapX = [xCo, (xCo+radarSize), (xCo-radarSize)]
    const radarMapY = [yCo, (yCo+radarSize), (yCo-radarSize)]

    radarLeft--

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

    updateRadarCount()

    // test
    console.log(radarMapX)
    console.log(radarMapY)
}

function activateRadar() {
    if (radarLeft <= 0) {
        disableRadar()
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

function disableRadar() {
    radarBtnStatus('disabled')
}