//get elements from document
const startGame = document.getElementById("startGame")
const quitGame = document.getElementById("quitGame")
const restartGame = document.getElementById("restartGame")


//add event listener to document and output clicked element
let boxEl = document.addEventListener('click', e=> {
    var clickedElement = e.target
    console.log(clickedElement)
})

//activate start game button
startGame.addEventListener('click', e => {
    console.log("Begin!")
})


//activate quit game button
quitGame.addEventListener('click', e => {
    console.log("Quit!")
})

//activate restart game button

restartGame.addEventListener('click', e => {
    console.log("Restart!")
})


