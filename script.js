//new stuff
var startMain = setInterval(main, 10);

let timerStatus = false
let leftPlatform1 = newPlatform(37.5, 400, 'platLeft', './Assets/Single Cloud.png')
let leftPlatform2 = newPlatform(37.5, 200, 'platLeft2', './Assets/Single Cloud.png')
let leftPlatform3 = newPlatform(37.5, 0, 'platLeft3', './Assets/Single Cloud.png')
let rightPlatform1 = newPlatform(37.5, 400, 'platRight', './Assets/Single Cloud.png')
let rightPlatform2 = newPlatform(37.5, 200, 'platRight2', './Assets/Single Cloud.png')
let rightPlatform3 = newPlatform(37.5, 0, 'platRight3', './Assets/Single Cloud.png')
let centerPlatform1 = newPlatform(37.5, 500, 'platCenter', './Assets/Single Cloud.png')
let centerPlatform2 = newPlatform(37.5, 300, 'platCenter2', './Assets/Single Cloud.png')
let centerPlatform3 = newPlatform(37.5, 100, 'platCenter3', './Assets/Single Cloud.png')
let leftMoving1 = parseInt(leftPlatform1.style.top) - 89
let leftMoving2 = parseInt(leftPlatform2.style.top) - 89
let leftMoving3 = parseInt(leftPlatform3.style.top) - 89
let centerMoving1 = parseInt(centerPlatform1.style.top) - 89
let centerMoving2 = parseInt(centerPlatform2.style.top) - 89
let centerMoving3 = parseInt(centerPlatform3.style.top) - 89
let rightMoving1 = parseInt(rightPlatform1.style.top) - 89
let rightMoving2 = parseInt(rightPlatform2.style.top) - 89
let rightMoving3 = parseInt(rightPlatform3.style.top) - 89
let container = document.getElementById('container')

let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let activePlayer = 1;
let spaceBarCount = 0;
let audio = new Audio("")
let volume = document.getElementById("volume-control")
let volumeUp = document.getElementById('volumeUp')
let volumeDown = document.getElementById('volumeDown')
audio.volume = .5;

let player1ScoreLog = []
let player2ScoreLog = []

let startNewGame = document.getElementById('startNewGame')

function clearAll() {
    stopTimer()
    clearInterval(startMain)
    //clearInterval(moveP)
    spaceBarCount = 0
    timerStatus = false
    startNewGame.style.zIndex = 3;
}


function newPlatform(x, y, id, url){
    let platform = document.getElementById(id)
    platform.style.position = 'absolute'
    platform.style.top = y + 'px'
    platform.style.left = x + 'px'
    platform.style.height = '10px'
    platform.style.width = '125px'
    platform.style.backgroundColor = 'black'
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    image.style.top = '-35px'
    image.style.left = '-25px'
    platform.append(image)
    return platform
}

let moveP = function movePlatform(element, y){
    setInterval(function(){
        if(y < 600) {
            y++
            element.style.top = y + 'px'
        } else {
            y = 0;
            y++
            element.style.top = y + 'px'
        }
    }, 100)
}

document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        //your code
        
        spaceBarCount++
        if(spaceBarCount === 1){
            let instructions = document.getElementById('instructions')
            instructions.style.zIndex = -1;
            moveP(leftPlatform1, 400)
            moveP(leftPlatform2, 200)
            moveP(leftPlatform3, 0)
            moveP(rightPlatform1, 400)
            moveP(rightPlatform2, 200)
            moveP(rightPlatform3, 0)
            moveP(centerPlatform1, 500)
            moveP(centerPlatform2, 300)
            moveP(centerPlatform3, 100)
            timerStatus = true
            timer()
        }
    }
}

function timer(){
    if(timerStatus === true){
        startTimer()
    }
}





var Keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

var hero = {
	x: 250,
    y: 410
};


//var log = document.getElementById("log");

window.onkeydown = function(e){
     var kc = e.keyCode;
     e.preventDefault();

     if(kc === 37) Keys.left = true;
     if(kc === 38) Keys.up = true;
     if(kc === 39) Keys.right = true;
     if(kc === 40) Keys.down = true;
 };

window.onkeyup = function(e){
     var kc = e.keyCode;
     e.preventDefault();

     if(kc === 37) Keys.left = false;
     if(kc === 38) Keys.up = false;
     if(kc === 39) Keys.right = false;
     if(kc === 40) Keys.down = false;
};

function clickSingleA(p)
{
    let items = document.querySelectorAll('.single.active');
    if(items.length) 
    {
        items[0].className = 'single';
    }

    p.className = 'single active';
}

player1.addEventListener('click', () => {
    activePlayer = 1
})

player2.addEventListener('click', () => {
    activePlayer = 2
})



function main() {
	move();    
};



//additions
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    container.append(image)
    return image
}

let stickman = newImage(`./Assets/Stick Man.png`)




