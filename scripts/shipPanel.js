const shipPanel = document.getElementById('trackPanel')

function initShipPanel() {
    allShips.forEach(ship => {
        const shipParts = renderShipParts(ship.size)
        shipPanel.innerHTML += `
        <div class="ship__row">
            <div class="ship__letter">${ship.letter}:</div>
            <div class="ship__data" id="ship${ship.letter}">${shipParts}</div>
        </div>
        `
    })
}

function updateShipPanel(ship) {
    const shipStatus = document.getElementById(`ship${ship.letter}`)
    shipStatus.innerHTML = renderShipParts(ship.size, ship.shipHitCount)
}

function renderShipParts(size, hitCount) {
    let leftCount = size - hitCount
    let shipParts = ''
    const shipLeftPart = '<div class="ship__part"></div>'
    const shipHitPart = '<div class="ship__part ship__part--hit"></div>'

    if (!hitCount) {
        for (let i = 0; i < size; i++) {
            shipParts += shipLeftPart
        }
    } else {
        for (let i = 0; i < leftCount; i++) {
            shipParts += shipLeftPart
        }
        for (let i = 0; i < hitCount; i++) {
            shipParts += shipHitPart
        }
    }

    return shipParts
}


// init
initShipPanel()