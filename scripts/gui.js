const instructionsMenu = document.querySelector('.overlay-screen')

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
        instructionsMenu.style.top = '-100%'
    }
}

function showScreen(num) {
    if (num === 0) {
        instructionsMenu.style.top = '0'
    }
}

// load instrcution menu only on first load
function initInstructionMenu() {
    if (!localStorage.getItem('first-load')) {
        showScreen(0)
        localStorage.setItem('first-load', true)
    }
}

loadInstructionTable()
initInstructionMenu()