function loadInstructionTable() {
    const shipTable = document.getElementById('shipTableData')

    allShips.forEach(ship => {
        shipTable.innerHTML += 
            `
                <td>${ship.shipName}</td>
                <td>'${ship.letter}'</td>
                <td>${ship.size}</td>
                <td>${ship.bonus}</td>
            `
    })
}

function hideScreen(num) {
    if (num === 0) {
        const instructionsMenu = document.querySelector('.overlay-screen')
        instructionsMenu.style.top = '-100%'
    }
}

loadInstructionTable()