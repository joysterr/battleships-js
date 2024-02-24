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
    shipStatus.innerHTML = renderShipParts(ship.size - ship.shipHitCount)
}

function renderShipParts(partCount) {
    let shipParts = ''
    for (let i = 0; i < partCount; i++) {
        shipParts += `
            <div class="ship__part"></div>
        `
    }
    return shipParts
}


// init
initShipPanel()