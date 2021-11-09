let leftPlatform1 = newPlatform(37.5, 400, 'platLeft', './Assets/Single Cloud.png')
let leftPlatform2 = newPlatform(37.5, 200, 'platLeft2', './Assets/Single Cloud.png')
let leftPlatform3 = newPlatform(37.5, 0, 'platLeft3', './Assets/Single Cloud.png')
let rightPlatform1 = newPlatform(37.5, 400, 'platRight', './Assets/Single Cloud.png')
let rightPlatform2 = newPlatform(37.5, 200, 'platRight2', './Assets/Single Cloud.png')
let rightPlatform3 = newPlatform(37.5, 0, 'platRight3', './Assets/Single Cloud.png')
let centerPlatform1 = newPlatform(37.5, 500, 'platCenter', './Assets/Single Cloud.png')
let centerPlatform2 = newPlatform(37.5, 300, 'platCenter2', './Assets/Single Cloud.png')
let centerPlatform3 = newPlatform(37.5, 100, 'platCenter3', './Assets/Single Cloud.png')
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
        let direction = null;
        let x = left;
        let y = top;
        
        function moveCharacter(){ 
            // y + .1
            // if(y < 512){
            //     y += 1
            // } else {
            //     window.alert('game over')
            // }
            if(direction === 'west'){
                if(x>-30){
                    x-=1
                }else {
                    x=525
                }
                // if(x>0){
                //     if(y > 245 && y < 281 && x > 405 && x <= 415){ //pillar
                //         if(x > 405 && x <= 415){x = x} else {x -= 1}
                //     } else if(y > 350 && y < 360 &&  x > 165 && x <= 175){ //crate
                //         if(x > 165 && x <= 175){x = x} else {x -= 1}
                //     } else if(y > 445 && y < 475 && x > 275 && x <= 285){ //tree
                //         if( x > 275 && x <= 285){x = x} else {x -= 1}
                //     } else if(y > 345 && y < 375 && x > 545 && x <= 555){ //pine tree
                //         if(x > 545 && x <= 555){x = x} else {x -= 1}
                //     } else if(y > 605 && y < 625 && x > 560 && x <= 570){ //well
                //         if( x > 560 && x <= 570){x = x} else {x -= 1}
                //     } else {
                //         x-=1
                //     } 
                // } else{x=0}
            }
            if(direction === 'north'){
                y -= 1
                // async function jump(y){
                //     await 
                // }
                // if (x > 315 && x < 415 && y < 245 && y > 230) { // pillar
                //     if(y < 245 && y > 230){y = y} else {y += 1}
                // } else if(x > 100 && x < 175 && y < 350 && y > 340){ //crate
                //     if(y < 350 && y > 340){y = y} else {y += 1}
                // } else if(x > 180 && x < 285 && y < 445 && y > 435){ //tree
                //     if(y < 445 && y > 435){y = y} else {y += 1}
                // } else if(x > 450 && x < 555 && y < 345 && y > 335){ //pine tree
                //     if(y < 345 && y > 335){y = y} else {y += 1}
                // } else if(x > 480 && x < 570 && y < 605 && y > 590){ //well
                //     if(y < 605 && y > 590){y = y} else {y += 1} 
                // } else if (y < Number(screen.height)-140) {
                //     y += 1
                // } else {y=y}
            }
            if(direction === 'east'){
                if(x < 525){
                    x+=1
                } else {
                    x = -30
                }
                // if(y > 245 && y < 281 && x < 325 && x >= 315){ //pillar
                //     if(x < 325 && x >= 315){x = x} else {x += 1}
                // } else if(y > 350 && y < 360 &&  x < 110 && x >= 100){ //crate
                //     if(x < 110 && x >= 100){x = x} else {x += 1}
                // } else if(y > 445 && y < 475 && x < 190 && x >= 180){ //tree
                //     if(x < 190 && x >= 180){x = x} else {x += 1}
                // } else if(y > 345 && y < 375 && x < 460 && x >= 450){ //pine tree
                //     if(x < 460 && x >= 450){x = x} else {x += 1}
                // } else if(y > 605 && y < 625 && x < 490 && x >= 480){ //well
                //     if(x < 490 && x >= 480){x = x} else {x += 1}
                // } else if(x < Number(screen.width)-50){
                //     x+=1
                // } else {x = x}
            }
            if(direction === 'south'){
                if(y < 512){
                    y += 1
                } else {
                    
                }
        
                console.log(leftPlatform1.style.top)
                if(x > 37.5 && x < 162.5 && y >= leftPlatform1.style.top) {
                    y = leftPlatform1.style.top
                }
                // if (x > 315 && x < 415 && y > 272 && y <= 282) { // pillar
                //     if(y > 272 && y <= 282){y = y} else {y -= 1}
                // } else if(x > 100 && x < 175 && y > 350 && y <= 360){ //crate
                //     if(y > 350 && y <= 360){y = y} else {y -= 1}
                // } else if(x > 180 && x < 285 && y > 465 && y <= 475){ //tree
                //     if(y > 465 && y <= 475){y = y} else {y -= 1}
                // } else if(x > 450 && x < 555 && y > 365 && y <= 375){ //pine tree
                //     if(y > 365 && y <= 375){y = y} else {y -= 1}
                // } else if(x > 480 && x < 570 && y > 615 && y <= 625){ //well
                //     if(y > 615 && y <= 625){y = y} else {y -= 1} 
                // } else if (y > 105) {
                //     y -= 1
                // } else {y=y}
            }

            element.style.left = x + 'px'
            element.style.top = y + 'px'
            
            // if(x > 100 && x < 205 && y > 351 && y < 389){ //crate
            //     element.style.zIndex = -1
            // } else if (x > 149 && x < 325 && y > 473 && y < 617) { //tree
            //     element.style.zIndex = -1
            // } else if (x > 315 && x < 415 && y > 281 && y < 454) { //pillar
            //     element.style.zIndex = -1
            // } else if (x > 415 && x < 601 && y > 360 && y < 555) { //pine tree
            //     element.style.zIndex = -1
            // } else if (x > 472 && x < 572 && y > 617 && y < 675) { //well
            //     element.style.zIndex = -1
            // } else {element.style.zIndex = 1}
        }
        
        setInterval(moveCharacter, 1)
        
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
            direction = null
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





