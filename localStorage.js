//local storage provides 2 functions for evaluating, storing, and displaying the players most recent time as well as the top 3 historical values for the that player

//local storage reference https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage
//storeScore passes the current players score
function storeScore(playerTime){
    //first the function checks local storage for any data that may already exist
    var player1ScoreLog = JSON.parse(localStorage.getItem("player1ScoreLog"));
    var player2ScoreLog = JSON.parse(localStorage.getItem("player2ScoreLog"));

    //if no previous score log is found, then the log is set to an empty array
    if(player1ScoreLog == null) player1ScoreLog = [];
    if(player2ScoreLog == null) player2ScoreLog = [];

    //based on which player is active, the score is sent to that players local storage array
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

    //before assigning a first, second, and third place, a baseline needs to be established to compare the scores to, so each value is set to 0 for the default minimum
    let player1First = 0
    let player1Second = 0
    let player1Third = 0
    let player2First = 0
    let player2Second = 0
    let player2Third = 0

    //reference for finding top 3 values https://www.geeksforgeeks.org/find-the-largest-three-elements-in-an-array/
    //reference for displaying with colons https://stackoverflow.com/questions/40783491/add-colon-to-string-at-a-certain-position
    // a for loop is used to evaluate each instance of the localstorage array and determine the highest 3 scores 
    for(let i = 0; i < player1ScoreLog.length; i++){
        //since the data is stored as a string with 2 colons ("01:23:45"), regex takes each entry and reduces it to a string without colons or leading zeros ("12345") 
        let timeStr = player1ScoreLog[i].replace(/[^0-9]/g, '')
        //once the string is reduced to only numbers, it is converted into an integer so that it can be compared to the current first, second and third values
        let timeInt = parseInt(timeStr)
        //the first if checks if the current score is larger than the current first place score
        if(timeInt > player1First){
            //if the current score is larger thant the current first place score it reorders the second and third scores to reflect a new high score, and sets the first place score equal to the current score
            player1Third = player1Second
            player1Second = player1First
            player1First = timeInt
        } else if(timeInt > player1Second){
            //if the current score is less than the first place, but larger than the second place score it sends the current second place score to third, and sets the second place score equal to the current score
            player1Third = player1Second
            player1Second = timeInt
        } else if(timeInt > player1Third){
            //if the current score is only larger than the third place score it sets the third place score equal to the current score
            player1Third = timeInt
        }
    }
    //the process outlined above is repeated for player 2
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

    //now that the first, second, and third values have been established, they have been reduced from a string ("01:23:45") to an integer ("12345")
    //to start the integer is ran through a function to make sure that it is 6 digits in length and has leading 0's where necessary
    player1First = convertToSixDigits(player1First)
    player1Second = convertToSixDigits(player1Second)
    player1Third = convertToSixDigits(player1Third)
    player2First = convertToSixDigits(player2First)
    player2Second = convertToSixDigits(player2Second)
    player2Third = convertToSixDigits(player2Third)
    //with the leadings 0's in place the colons can be added before the 2nd to last digit creating ("0123:45")
    player1First = player1First.toString().replace(/(.{2})$/,':$1')
    //since the string has now grown by 1 character, a colon is placed in front of the 5th digit/character creating the correct string ("01:23:45")
    player1First = player1First.toString().replace(/(.{5})$/,':$1')
    //above process is done for the other 5 values that make up the top scores
    player1Second = player1Second.toString().replace(/(.{2})$/,':$1')
    player1Second = player1Second.toString().replace(/(.{5})$/,':$1')
    player1Third = player1Third.toString().replace(/(.{2})$/,':$1')
    player1Third = player1Third.toString().replace(/(.{5})$/,':$1')
    player2First = player2First.toString().replace(/(.{2})$/,':$1')
    player2First = player2First.toString().replace(/(.{5})$/,':$1')
    player2Second = player2Second.toString().replace(/(.{2})$/,':$1')
    player2Second = player2Second.toString().replace(/(.{5})$/,':$1')
    player2Third = player2Third.toString().replace(/(.{2})$/,':$1')
    player2Third = player2Third.toString().replace(/(.{5})$/,':$1')
    //with the string properly defined, all items are displayed on the landing page by changing the innerHTML of each premade player and place div
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


//to convert to six digits, the player score from the local storage is passed and leading 0's are added based on the scores total length count, score is returned so that we can access it within the other function for further manipulation
function convertToSixDigits(score){
    score = score.toString()
    if( score.length == 2){
        score = "0000" + score
    } else if (score.length == 3){
        score = "000" + score
    } else if(score.length == 4){
        score = "00" + score
    } else if(score.length == 5){
        score = "0" + score
    }
    return score
}