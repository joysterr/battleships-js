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