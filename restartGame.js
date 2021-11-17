//clearAll resets all values to their original position, while also logging, displaying, and evaluating (see localstorage.js for for evaluation) the player's score

function clearAll() {
    displayScore.textContent = `Player ${activePlayer} Time: ${minutes}:${seconds}:${tens}`
    //already defined in timer, but requires new declaration to be stored locally 
    let playerTime = `${minutes}:${seconds}:${tens}`
    storeScore(playerTime)

    //resets platform positions to original location
    leftPlatform1.style.top = '400px'
    leftPlatform2.style.top = '200px'
    leftPlatform3.style.top = '0px'
    rightPlatform1.style.top = '400px' 
    rightPlatform2.style.top = '200px'
    rightPlatform3.style.top = '0px'
    centerPlatform1.style.top = '500px'
    centerPlatform2.style.top = '300px'
    centerPlatform3.style.top = '100px'

    //clears the interval for all moving components - platform and player
    clearInterval(interval)
    clearInterval(startMain)
    clearInterval(moveLP1)
    clearInterval(moveLP2)
    clearInterval(moveLP3)
    clearInterval(moveRP1)
    clearInterval(moveRP2)
    clearInterval(moveRP3)
    clearInterval(moveCP1)
    clearInterval(moveCP2)
    clearInterval(moveCP3)

    //resets the timer function as well as timer display in top right corner
    tens = "00"
    seconds = "00"
    minutes = "00"
    addTens.innerHTML = tens
    addSecs.innerHTML = seconds
    addMins.innerHTML = minutes
    timerStatus = false

    //resets character position to correct starting point
    hero.x = 250
    hero.y = 410

    //resets starting values for gravity related variables
    platformGravity = 0
    gravity = 0
    landed = true
    jumpSpeed = 1.5

    //resets the spacebar counter for the instructions and game over pages
    spaceBarCount = 0
    startNewGame.style.zIndex = 3
}