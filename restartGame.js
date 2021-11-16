function clearAll() {
    gravity = 0
    let playerTime = `${minutes}:${seconds}:${tens}`
    displayScore.textContent = `Player ${activePlayer} Time: ${minutes}:${seconds}:${tens}`
    console.log(playerTime)
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
    hero.x = 250
    hero.y = 350
    timerStatus = false
    startNewGame.style.zIndex = 3
    spaceBarCount = 0
    if (activePlayer === 1) {
        player1ScoreLog.push(playerTime)
    }
    if (activePlayer === 2) {
        player2ScoreLog.push(playerTime)
    }
}