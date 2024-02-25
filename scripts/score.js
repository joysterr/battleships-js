let score = 0
const liveScore = document.getElementById('liveScore')

function updateScore(action, bonus=0) {
    switch (action) {
        case 'miss':
            score--
            break
        case 'hit':
            score++
            break
        case 'radar':
            score -= 2
            break
        case 'bonus':
            score += bonus
    }
}

function saveHighScore() {
    localStorage.setItem('highscore', score)
}

function getHighScore() {
    const highScore = localStorage.getItem('highscore')
    return highScore
}

function renderLiveScore() {
    liveScore.innerText = score
}