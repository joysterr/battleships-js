let score = 0

function updateScore(action, bonus=0) {
    switch (action) {
        case 'miss':
            score--
            break
        case 'hit':
            score++
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