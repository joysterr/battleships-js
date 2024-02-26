const instructionScreen = document.querySelector('.overlay-screen[id="instructions"]')
const endgameScreen = document.querySelector('.overlay-screen[id="endgame"]')

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
        instructionScreen.style.top = '-150%'
    } else {
        endgameScreen.style.top = '-150%'
    }
}

function showScreen(num) {
    if (num === 0) {
        instructionScreen.style.top = '0'
    } else {
        endgameScreen.style.top = '0'
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