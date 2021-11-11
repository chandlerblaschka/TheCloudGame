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
let stickMan = newPlayableCharacter(250, 410)
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let activePlayer = 1;
let spaceBarCount = 0;
let audio = new Audio("")
let volume = document.getElementById("volume-control")
let volumeUp = document.getElementById('volumeUp')
let volumeDown = document.getElementById('volumeDown')
audio.volume = .5;

let bottomLimit = 510;
let landed = false

function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    container.append(image)
    return image
}

function movePlayer(element) {
    element.style.position = 'absolute'
    element.style.zIndex = 0

    

    function moveToCoordinates(left, top) {
        element.style.left = left + 'px'
        element.style.top = top + 'px'
    }

    function moveWithArrowKeys(left, top, callback){
        let direction = 'south';
        let x = left;
        let y = top;
        let gravity = .5

        function moveCharacter(){ 
            if(direction === 'west'){
                let leftMoving1 = parseInt(leftPlatform1.style.top) - 89
                let leftMoving2 = parseInt(leftPlatform2.style.top) - 89
                let leftMoving3 = parseInt(leftPlatform3.style.top) - 89
                let centerMoving1 = parseInt(centerPlatform1.style.top) - 89
                let centerMoving2 = parseInt(centerPlatform2.style.top) - 89
                let centerMoving3 = parseInt(centerPlatform3.style.top) - 89
                let rightMoving1 = parseInt(rightPlatform1.style.top) - 89
                let rightMoving2 = parseInt(rightPlatform2.style.top) - 89
                let rightMoving3 = parseInt(rightPlatform3.style.top) - 89
                if ( y === bottomLimit ) {
                    y = bottomLimit
                } else if(x > -23 && x < 124 && y <= leftMoving1 && y >= leftMoving1 -1) {
                    y = y
                    landed = true
                } else if (x > -23 && x < 124 && y <= leftMoving2 && y >= leftMoving2 -1) {
                    y = y
                    landed = true
                } else if (x > -23 && x < 124 && y <= leftMoving3 && y >= leftMoving3 -1) {
                    y = y
                    landed = true
                } else if(x > 187 && x < 324 && y <= centerMoving1 && y >= centerMoving1 -1) {
                    y = y
                    landed = true
                } else if (x > 187 && x < 324 && y <= centerMoving2 && y >= centerMoving2 -1) {
                    y = y
                    landed = true
                } else if (x > 187 && x < 324 && y <= centerMoving3 && y >= centerMoving3 -1) {
                    y = y
                    landed = true
                } else if(x > 387 && x < 524 && y <= rightMoving1 && y >= rightMoving1 -1) {
                    y = y
                    landed = true
                } else if (x > 387 && x < 524 && y <= rightMoving2 && y >= rightMoving2 -1) {
                    y = y
                    landed = true
                } else if (x > 387 && x < 524 && y <= rightMoving3 && y >= rightMoving3 -1) {
                    y = y
                    landed = true
                }else {
                    y += gravity
                    landed = false
                }
                if(x>-30){
                    x-=1
                }else {
                    x=525
                }
            }
            //function north(direction)
            if(direction === 'north'){
                console.log(landed)
                if(landed === true){
                    async function jump(time){
                        y = y - 5
                        await sleep(time)
                        stop()
                    }
                    function sleep(time){
                        return new Promise(resolve => {
                            setTimeout(resolve, time)
                        })  
                    }
                    jump(1000)
                    jump(500)
                } else {
                    y += gravity
                    landed = false
                }
                
                
            }
            if(direction === 'east'){
                let leftMoving1 = parseInt(leftPlatform1.style.top) - 89
                let leftMoving2 = parseInt(leftPlatform2.style.top) - 89
                let leftMoving3 = parseInt(leftPlatform3.style.top) - 89
                let centerMoving1 = parseInt(centerPlatform1.style.top) - 89
                let centerMoving2 = parseInt(centerPlatform2.style.top) - 89
                let centerMoving3 = parseInt(centerPlatform3.style.top) - 89
                let rightMoving1 = parseInt(rightPlatform1.style.top) - 89
                let rightMoving2 = parseInt(rightPlatform2.style.top) - 89
                let rightMoving3 = parseInt(rightPlatform3.style.top) - 89
                if ( y === bottomLimit ) {
                    y = bottomLimit
                } else if(x > -23 && x < 124 && y <= leftMoving1 && y >= leftMoving1 -1) {
                    y = y
                    landed = true
                } else if (x > -23 && x < 124 && y <= leftMoving2 && y >= leftMoving2 -1) {
                    y = y
                    landed = true
                } else if (x > -23 && x < 124 && y <= leftMoving3 && y >= leftMoving3 -1) {
                    y = y
                    landed = true
                } else if(x > 187 && x < 324 && y <= centerMoving1 && y >= centerMoving1 -1) {
                    y = y
                    landed = true
                } else if (x > 187 && x < 324 && y <= centerMoving2 && y >= centerMoving2 -1) {
                    y = y
                    landed = true
                } else if (x > 187 && x < 324 && y <= centerMoving3 && y >= centerMoving3 -1) {
                    y = y
                    landed = true
                } else if(x > 387 && x < 524 && y <= rightMoving1 && y >= rightMoving1 -1) {
                    y = y
                    landed = true
                } else if (x > 387 && x < 524 && y <= rightMoving2 && y >= rightMoving2 -1) {
                    y = y
                    landed = true
                } else if (x > 387 && x < 524 && y <= rightMoving3 && y >= rightMoving3 -1) {
                    y = y
                    landed = true
                }else {
                    y += gravity
                    landed = false
                }
                if(x < 525){
                    x+=1
                } else {
                    x = -30
                }
            }
            if(direction === 'south'){
                let leftMoving1 = parseInt(leftPlatform1.style.top) - 89
                let leftMoving2 = parseInt(leftPlatform2.style.top) - 89
                let leftMoving3 = parseInt(leftPlatform3.style.top) - 89
                let centerMoving1 = parseInt(centerPlatform1.style.top) - 89
                let centerMoving2 = parseInt(centerPlatform2.style.top) - 89
                let centerMoving3 = parseInt(centerPlatform3.style.top) - 89
                let rightMoving1 = parseInt(rightPlatform1.style.top) - 89
                let rightMoving2 = parseInt(rightPlatform2.style.top) - 89
                let rightMoving3 = parseInt(rightPlatform3.style.top) - 89
                if ( y === bottomLimit ) {
                    y = bottomLimit
                } else if(x > -23 && x < 124 && y <= leftMoving1 && y >= leftMoving1 -1 && y < bottomLimit) {
                    y = y
                    landed = true
                } else if (x > -23 && x < 124 && y <= leftMoving2 && y >= leftMoving2 -1 && y < bottomLimit) {
                    y = y
                    landed = true
                } else if (x > -23 && x < 124 && y <= leftMoving3 && y >= leftMoving3 -1 && y < bottomLimit) {
                    y = y
                    landed = true
                } else if(x > 187 && x < 324 && y <= centerMoving1 && y >= centerMoving1 -1 && y < bottomLimit) {
                    y = y
                    landed = true
                } else if (x > 187 && x < 324 && y <= centerMoving2 && y >= centerMoving2 -1 && y < bottomLimit) {
                    y = y
                    landed = true
                } else if (x > 187 && x < 324 && y <= centerMoving3 && y >= centerMoving3 -1 && y < bottomLimit) {
                    y = y
                    landed = true
                } else if(x > 387 && x < 524 && y <= rightMoving1 && y >= rightMoving1 -1 && y < bottomLimit) {
                    y = y
                    landed = true
                } else if (x > 387 && x < 524 && y <= rightMoving2 && y >= rightMoving2 -1 && y < bottomLimit) {
                    y = y
                    landed = true
                } else if (x > 387 && x < 524 && y <= rightMoving3 && y >= rightMoving3 -1 && y < bottomLimit) {
                    y = y
                    landed = true
                }else {
                    y += gravity
                    landed = false
                }
            }
            

            element.style.left = x + 'px'
            element.style.top = y + 'px'

        }
        
        setInterval(moveCharacter, 10)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = 'south'
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

function newPlayableCharacter(x, y) {
    const element = newImage('./Assets/Stick Man.png')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `./Assets/Stick Man.png`
        }
        if (direction === 'west') {
            element.src = `./Assets/Stick Man.png`
        }
        if (direction === 'north') {
            element.src = `./Assets/Stick Man.png`
        }
        if (direction === 'east') {
            element.src = `./Assets/Stick Man.png`
        }
        if (direction === 'south') {
            element.src = `./Assets/Stick Man.png`
        }
    }

    movePlayer(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
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

let move = function movePlatform(element, y){
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

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        //your code
        spaceBarCount++
        if(spaceBarCount === 1){
            let instructions = document.getElementById('instructions')
            instructions.style.zIndex = -1;
            move(leftPlatform1, 400)
            move(leftPlatform2, 200)
            move(leftPlatform3, 0)
            move(rightPlatform1, 400)
            move(rightPlatform2, 200)
            move(rightPlatform3, 0)
            move(centerPlatform1, 500)
            move(centerPlatform2, 300)
            move(centerPlatform3, 100)
            
        }
    }
}




volume.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
    console.log(e.currentTarget.value)
})
// volumeUp.addEventListener("click", function(e) {
//     audio.volume = (e.currentTarget.value + 10) / 100
//     console.log(audio.volume)
// })
// volumeDown.addEventListener("click", function(e) {
//     audio.volume = (e.currentTarget.value - 10) / 100
//     console.log(audio.volume)
// })



// active link from https://stackoverflow.com/questions/25579888/keeping-a-active-until-another-link-is-clicked#comment39966655_25580108
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





