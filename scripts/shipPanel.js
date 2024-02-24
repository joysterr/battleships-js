const shipPanel = document.getElementById('trackPanel')

function initShipPanel() {
    allShips.forEach(ship => {
        const shipParts = renderShipParts(ship.size, ship.shipHitCount)
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
    let shipParts = ''
    const shipLeftPart = '<div class="ship__part"></div>'
    const shipHitPart = '<div class="ship__part ship__part--hit"></div>'

    for (let i = 0; i < size; i++) {
        if (i < size - hitCount) {
            shipParts += shipLeftPart
        } else {
            shipParts += shipHitPart
        }
    }

    return shipParts
}


// init
initShipPanel()