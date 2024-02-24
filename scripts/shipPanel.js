const shipPanel = document.getElementById('trackPanel')

function initShipPanel() {
    allShips.forEach(ship => {
        shipPanel.innerHTML += `
        <div class="ship__data">
            <p>${ship.letter}:</p>
            <div id="ship${ship.letter}">${ship.size}</div>
        </div>
        `
    })
}

function updateShipPanel(ship) {
    const shipStatus = document.getElementById(`ship${ship.letter}`)
    shipStatus.innerHTML = (ship.size - ship.shipHitCount)
}

// init
initShipPanel()