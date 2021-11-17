//main page for javascript variables and initialization of game play
var startMain = setInterval(main, 10);
let timerStatus = false
let platformGravity = 0

//empty variables used to clear moving platform interval, assigned in moving trigger function
let moveLP1
let moveLP2
let moveLP3
let moveCP1
let moveCP2
let moveCP3
let moveRP1
let moveRP2
let moveRP3

//create platforms with equally spaced starting positions
let leftPlatform1 = newPlatform(37.5, 400, 'platLeft', './Assets/Single Cloud.png')
let leftPlatform2 = newPlatform(37.5, 200, 'platLeft2', './Assets/Single Cloud.png')
let leftPlatform3 = newPlatform(37.5, 0, 'platLeft3', './Assets/Single Cloud.png')
let rightPlatform1 = newPlatform(37.5, 400, 'platRight', './Assets/Single Cloud.png')
let rightPlatform2 = newPlatform(37.5, 200, 'platRight2', './Assets/Single Cloud.png')
let rightPlatform3 = newPlatform(37.5, 0, 'platRight3', './Assets/Single Cloud.png')
let centerPlatform1 = newPlatform(37.5, 500, 'platCenter', './Assets/Single Cloud.png')
let centerPlatform2 = newPlatform(37.5, 300, 'platCenter2', './Assets/Single Cloud.png')
let centerPlatform3 = newPlatform(37.5, 100, 'platCenter3', './Assets/Single Cloud.png')

//define variables for DOM to be used later
let container = document.getElementById('container')
let startNewGame = document.getElementById('startNewGame')

//define default player 1 and player 2 values
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let activePlayer = 1;
let spaceBarCount = 0;

//audio element added for UX on jump action
// “Sound effects obtained from https://www.zapsplat.com“
let audio = document.createElement('audio')
audio.src = 'Assets/zapsplat_cartoon_twang_bounce_boing_spring_53049.mp3'
let volume = document.getElementById("volume-control")
let volumeUp = document.getElementById('volumeUp')
let volumeDown = document.getElementById('volumeDown')
audio.volume = .5;



//function to create a new platform based on absolute position and assign the new platform a cloud image
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

//function to move the platform down the game container
//setinterval assigned so that the platforms can be reset to default value when game ends
let moveP = function movePlatform(element, y){
    return (setInterval(function(){
        if(y < 600) {
            y = y + platformGravity
            element.style.top = y + 'px'
        } else {
            y = 0;
            y = y + platformGravity
            element.style.top = y + 'px'
        }
    }, 10))
}

//function to move all platforms at once so that they are called by a single invocation, each invocation is assigned a variable so that the interval can be cleared for each move platform when the game ends
function movingTrigger(){
    moveLP1 = moveP(leftPlatform1, 400)
    moveLP2 = moveP(leftPlatform2, 200)
    moveLP3 = moveP(leftPlatform3, 0)
    moveRP1 = moveP(rightPlatform1, 400)
    moveRP2 = moveP(rightPlatform2, 200)
    moveRP3 = moveP(rightPlatform3, 0)
    moveCP1 = moveP(centerPlatform1, 500)
    moveCP2 = moveP(centerPlatform2, 300)
    moveCP3 = moveP(centerPlatform3, 100)
}

//spacebar event listener to start game, when game ends value is reset to 0, additional clicks do not impact game play
document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        //your code
        spaceBarCount++
        if(spaceBarCount === 1){
            let instructions = document.getElementById('instructions')
            instructions.style.zIndex = -1;
            startNewGame.style.zIndex = -1;
            platformGravity = .333
            timerStatus = true
            timer()
            movingTrigger()
            startMain = setInterval(main, 10);
        }
    }
}

function timer(){
    if(timerStatus === true){
        startTimer()
    }
}

//key functions originally taken from web game activity but replaced with http://jsfiddle.net/ofnp4vj4/ logic
//this logic allows multiple keys to be pressed at once, creating a diagonal jump or fall motion
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


//active anchor tag listener and assignment of player - determines whether player 1 or player 2 is playing and underlines the active player 
//reference for active anchor tag code https://stackoverflow.com/questions/25579888/keeping-a-active-until-another-link-is-clicked#comment39966655_25580108 
function clickSingleA(p){
    let items = document.querySelectorAll('.single.active');
    if(items.length) 
    {
        items[0].className = 'single';
    }
    p.className = 'single active';
}

//if player 1 link is clicked, active player is defined as 1
player1.addEventListener('click', () => {
    activePlayer = 1
})

//if player 2 link is clicked, active player is defined as 2
player2.addEventListener('click', () => {
    activePlayer = 2
})


//function to invoke a function - carried over from reference
function main() {
    move()
};

//function to create image for character
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    // image.style.top = hero.y
    // image.style.left = hero.x
    container.append(image)
    return image
}

//declare variable for character
let stickman = newImage(`./Assets/Stick Man.png`)

//reference https://stackoverflow.com/questions/21463752/javascript-audio-object-vs-html5-audio-tag
//changes volume when slider is moved
volume.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
})


//works but does not move slider - future change will allow icon clicks to move slider up and down 
// volumeUp.addEventListener("click", function() {
//     audio.volume = audio.volume + .1
// })
