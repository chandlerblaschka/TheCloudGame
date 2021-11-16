//timer based on StopWatch from my github - used https://codepen.io/cathydutton/pen/GBcvo for reference
let playerTime = `${minutes}:${seconds}:${tens}`
var seconds = "00";
var tens = "00";
var minutes = "00";
var lapSeconds = "00";
var lapTens = "00";
var lapMinutes = "00";
var addTens = document.getElementById("tens");
var addSecs = document.getElementById("sec");
var addMins = document.getElementById("mins");

var interval

function startTimer() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);

    tens++;
    
    if(tens <= 9){
        tens = "0" + tens;
        addTens.innerHTML = tens;
    }

    if(tens > 9){
        addTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        if(seconds < 10){
            seconds = "0" + seconds;
            addSecs.innerHTML = seconds;
        } else {
            addSecs.innerHTML = seconds;
        }
        tens = "0" + 0;
        addTens.innerHTML = tens;
    }


    if (seconds > 9){
        addSecs.innerHTML = seconds;
    }

    if(seconds > 59){
        minutes++;
        if(minutes < 10){
            minutes = "0" + minutes;
            addMins.innerHTML = minutes;
        } else {
            addMins.innerHTML = minutes;
        }
        seconds = "0" + 0;
        addSecs.innerHTML = seconds;
    }
    if(minutes > 9){
        addMins.innerHTML = minutes;
    }
}

function stopTimer(){
    clearInterval(interval)
}

function difficulty() {
    if (seconds > 9 && seconds < 19) {
        jumpSpeed = 1.25
        console.log(jumpSpeed)
    } else if( minutes = 0 && seconds > 19 && seconds < 29) {
        jumpSpeed = 1
        console.log(jumpSpeed)
    } else if( minutes = 0 && seconds > 29 && seconds < 39) {
        jumpSpeed = .75
        console.log(jumpSpeed)
    } else if( minutes = 0 && seconds > 39 && seconds < 49) {
        jumpSpeed = .625
        console.log(jumpSpeed)
    } else if( minutes = 0 && seconds > 49 && seconds < 54) {
        jumpSpeed = .5
        console.log(jumpSpeed)
    } else if(minutes > 0 || seconds > 54 ) {
        jumpSpeed = .4975
    }
}