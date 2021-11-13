//timer based on StopWatch from my github - used https://codepen.io/cathydutton/pen/GBcvo for reference

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