//local storage reference https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage 
function storeScore(playerTime){
    var player1ScoreLog = JSON.parse(localStorage.getItem("player1ScoreLog"));
    var player2ScoreLog = JSON.parse(localStorage.getItem("player2ScoreLog"));
    if(player1ScoreLog == null) player1ScoreLog = [];
    if(player2ScoreLog == null) player2ScoreLog = [];
    if(activePlayer === 1) {
        localStorage.setItem("player1ScoreLog", JSON.stringify(playerTime))
        player1ScoreLog.push(playerTime)
        localStorage.setItem("player1ScoreLog", JSON.stringify(player1ScoreLog))
    }
    if(activePlayer === 2) {
        localStorage.setItem("player2ScoreLog", JSON.stringify(playerTime))
        player2ScoreLog.push(playerTime)
        localStorage.setItem("player2ScoreLog", JSON.stringify(player2ScoreLog))
    }

    let player1First = 0
    let player1Second = 0
    let player1Third = 0
    let player2First = 0
    let player2Second = 0
    let player2Third = 0

    //reference for finding top 3 values https://www.geeksforgeeks.org/find-the-largest-three-elements-in-an-array/
    //reference for displaying with colons https://stackoverflow.com/questions/40783491/add-colon-to-string-at-a-certain-position 
    for(let i = 0; i < player1ScoreLog.length; i++){
        let timeStr = player1ScoreLog[i].replace(/[^0-9]/g, '')
        let timeInt = parseInt(timeStr)
        if(timeInt > player1First){
            player1Third = player1Second
            player1Second = player1First
            player1First = timeInt
        } else if(timeInt > player1Second){
            player1Third = player1Second
            player1Second = timeInt
        } else if(timeInt > player1Third){
            player1Third = timeInt
        }
        console.log(timeInt)
    }
    for(let i = 0; i < player2ScoreLog.length; i++){
        let timeStr = player2ScoreLog[i].replace(/[^0-9]/g, '')
        let timeInt = parseInt(timeStr)
        if(timeInt > player2First){
            player2Third = player2Second
            player2Second = player2First
            player2First = timeInt
        } else if(timeInt > player2Second){
            player2Third = player2Second
            player2Second = timeInt
        } else if(timeInt > player2Third){
            player2Third = timeInt
        }
    }
    player1First = player1First.toString().replace(/(.{2})$/,':$1')
    player1Second = player1Second.toString().replace(/(.{2})$/,':$1')
    player1Third = player1Third.toString().replace(/(.{2})$/,':$1')
    player2First = player2First.toString().replace(/(.{2})$/,':$1')
    player2Second = player2Second.toString().replace(/(.{2})$/,':$1')
    player2Third = player2Third.toString().replace(/(.{2})$/,':$1')
    let logPlayer1First = document.getElementById('player1First')
    let logPlayer1Second = document.getElementById('player1Second')
    let logPlayer1Third = document.getElementById('player1Third')
    logPlayer1First.innerHTML = `<span>1.</span>${player1First}`
    logPlayer1Second.innerHTML = `<span>2.</span>${player1Second}`
    logPlayer1Third.innerHTML = `<span>3.</span>${player1Third}`
    let logPlayer2First = document.getElementById('player2First')
    let logPlayer2Second = document.getElementById('player2Second')
    let logPlayer2Third = document.getElementById('player2Third')
    logPlayer2First.innerHTML = `<span>1.</span>${player2First}`
    logPlayer2Second.innerHTML = `<span>2.</span>${player2Second}`
    logPlayer2Third.innerHTML = `<span>3.</span>${player2Third}`
}