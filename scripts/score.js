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