function clearAll() {
    displayScore.textContent = `Player ${activePlayer} Time: ${minutes}:${seconds}:${tens}`
    let playerTime = `${minutes}:${seconds}:${tens}`
    if (activePlayer === 1) {
        player1ScoreLog.push(playerTime)
        localStorage.setItem("player1ScoreLog", JSON.stringify(player1ScoreLog))
    }
    if (activePlayer === 2) {
        player2ScoreLog.push(playerTime)
        localStorage.setItem("player2ScoreLog", JSON.stringify(player2ScoreLog))
    }
    leftPlatform1.style.top = '400px'
    leftPlatform2.style.top = '200px'
    leftPlatform3.style.top = '0px'
    rightPlatform1.style.top = '400px'
    rightPlatform2.style.top = '200px'
    rightPlatform3.style.top = '0px'
    centerPlatform1.style.top = '500px'
    centerPlatform2.style.top = '300px'
    centerPlatform3.style.top = '100px'
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
    tens = "00"
    seconds = "00"
    minutes = "00"
    addTens.innerHTML = tens
    addSecs.innerHTML = seconds
    addMins.innerHTML = minutes
    platformGravity = 0
    gravity = 0
    hero.x = 250
    hero.y = 410
    landed = true
    timerStatus = false
    startNewGame.style.zIndex = 3
    spaceBarCount = 0
}