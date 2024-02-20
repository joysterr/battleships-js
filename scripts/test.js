function fire(xCo, yCo) {
    console.log(xCo, yCo)
    const btnClicked = document.getElementById(`btn${xCo}${yCo}`)
    console.log(btnClicked.id)
    btnClicked.innerHTML = '&times;'
    btnClicked.classList.add('board__btn--miss')
}