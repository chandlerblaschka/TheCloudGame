// move function controls the player movement within the game container

//variables assigned for initial state when game starts
//some use var instead of let, in these cases it helped fix issues i was running into while processing the request (will be looked into further)
let bottomLimit = 510;
let landed = true
let gravityToggle = false
var gravity = .5
var jumpSpeed = 1.5
var jumpBuffer = 5
let displayScore = document.getElementById('currentScore')

//move function details the collision detection of the character while each of the arrow keys is pressed, and while the keys are not being pressed
function move() {

    //define limits and collisions of the container while no key is being pressed (captures free fall limits)

    //since the value of the moving platform is passed as a string, it is converted to an integer and reduced by 89 because of the differences in player and platform sizes
    let leftMoving1 = parseInt(leftPlatform1.style.top) - 89
    let leftMoving2 = parseInt(leftPlatform2.style.top) - 89
    let leftMoving3 = parseInt(leftPlatform3.style.top) - 89
    let centerMoving1 = parseInt(centerPlatform1.style.top) - 89
    let centerMoving2 = parseInt(centerPlatform2.style.top) - 89
    let centerMoving3 = parseInt(centerPlatform3.style.top) - 89
    let rightMoving1 = parseInt(rightPlatform1.style.top) - 89
    let rightMoving2 = parseInt(rightPlatform2.style.top) - 89
    let rightMoving3 = parseInt(rightPlatform3.style.top) - 89

    //large if statement used to limit the characters position and determine if it is landed, falling, staying in place on a platform, or has fallen to the bottom of the container
    //gravity toggle flips the direction of gravity so that jump and fall use the same interval
    //the initial statement creates the upper limit so that the character can not jump out of the game container
    //the following statements outline the position of each moving platform and their individual limits and landing space
    if (gravityToggle == true && hero.y < 0 && hero.y <= -10) {
        hero.y = hero.y
    } else if (hero.y >= bottomLimit) {
        clearAll()
    } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving1 && hero.y >= leftMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
        hero.y = hero.y
        landed = true
    } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving2 && hero.y >= leftMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
        hero.y = hero.y
        landed = true
    } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving3 && hero.y >= leftMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
        hero.y = hero.y
        landed = true
    } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving1 && hero.y >= centerMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
        hero.y = centerMoving1
        landed = true
    } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving2 && hero.y >= centerMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
        hero.y = centerMoving2
        landed = true
    } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving3 && hero.y >= centerMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
        hero.y = centerMoving3
        landed = true
    } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving1 && hero.y >= rightMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
        hero.y = hero.y
        landed = true
    } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving2 && hero.y >= rightMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
        hero.y = hero.y
        landed = true
    } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving3 && hero.y >= rightMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
        hero.y = hero.y
        landed = true
    } else {
        if (gravityToggle == true) {
            hero.y -= jumpSpeed
        } else {
            gravity = .5
            hero.y += gravity
            landed = false
        }
    }

    //gravity toggle can only occur if the character is landed, and the player has pressed jump
    //in all other cases gravity pulls the player down unless it is caught by a platform
    if (Keys.up) {
        if (landed == true) {
            gravityToggle = true
            gravity = jumpSpeed
            audio.play()
            setTimeout(() => {
                gravityToggle = false
                gravity = .5
                hero.y = hero.y
            }, 750)
        } else if (landed == false) {
            gravityToggle = false
            gravity = .5
        }

    }

    //the same logic outline above is used within each arrow direction
    //the only difference is the limit of that arrow direction

    //left arrow lets the character pass through the left side of the game container and appear back on the right side, while maintaining all other limits
    if (Keys.left) {
        let leftMoving1 = parseInt(leftPlatform1.style.top) - 89
        let leftMoving2 = parseInt(leftPlatform2.style.top) - 89
        let leftMoving3 = parseInt(leftPlatform3.style.top) - 89
        let centerMoving1 = parseInt(centerPlatform1.style.top) - 89
        let centerMoving2 = parseInt(centerPlatform2.style.top) - 89
        let centerMoving3 = parseInt(centerPlatform3.style.top) - 89
        let rightMoving1 = parseInt(rightPlatform1.style.top) - 89
        let rightMoving2 = parseInt(rightPlatform2.style.top) - 89
        let rightMoving3 = parseInt(rightPlatform3.style.top) - 89

        if (gravityToggle == true && hero.y < 0 && hero.y <= -10) {
            hero.y = hero.y
        } else if (hero.y >= bottomLimit) {
            hero.y = bottomLimit
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving1 && hero.y >= leftMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving2 && hero.y >= leftMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving3 && hero.y >= leftMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving1 && hero.y >= centerMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = centerMoving1
            landed = true
        } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving2 && hero.y >= centerMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = centerMoving2
            landed = true
        } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving3 && hero.y >= centerMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = centerMoving3
            landed = true
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving1 && hero.y >= rightMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving2 && hero.y >= rightMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving3 && hero.y >= rightMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else {
            if (gravityToggle == true) {
                gravity = jumpSpeed
            } else {
                gravity = .5
                hero.y += gravity
                landed = false
            }
        }
        if (hero.x > -30) {
            hero.x -= 1
        } else {
            hero.x = 525
        }
    }
    //right arrow lets the character pass through the right side of the game container and appear back on the left side, while maintaining all other limits
    if (Keys.right) {
        let leftMoving1 = parseInt(leftPlatform1.style.top) - 89
        let leftMoving2 = parseInt(leftPlatform2.style.top) - 89
        let leftMoving3 = parseInt(leftPlatform3.style.top) - 89
        let centerMoving1 = parseInt(centerPlatform1.style.top) - 89
        let centerMoving2 = parseInt(centerPlatform2.style.top) - 89
        let centerMoving3 = parseInt(centerPlatform3.style.top) - 89
        let rightMoving1 = parseInt(rightPlatform1.style.top) - 89
        let rightMoving2 = parseInt(rightPlatform2.style.top) - 89
        let rightMoving3 = parseInt(rightPlatform3.style.top) - 89

        if (gravityToggle == true && hero.y < 0 && hero.y <= -10) {
            hero.y = hero.y
        } else if (hero.y >= bottomLimit) {
            hero.y = bottomLimit
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving1 && hero.y >= leftMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving2 && hero.y >= leftMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving3 && hero.y >= leftMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving1 && hero.y >= centerMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = centerMoving1
            landed = true
        } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving2 && hero.y >= centerMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = centerMoving2
            landed = true
        } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving3 && hero.y >= centerMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = centerMoving3
            landed = true
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving1 && hero.y >= rightMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving2 && hero.y >= rightMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving3 && hero.y >= rightMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else {
            if (gravityToggle == true) {
                gravity = jumpSpeed
            } else {
                gravity = .5
                hero.y += gravity
                landed = false
            }
        }

        if (hero.x < 525) {
            hero.x += 1
        } else {
            hero.x = -30
        }

    }

    //the down arrow maintains all previously defined limits, while also allowing the player to increase the decent speed of the character
    if (Keys.down) {
        let leftMoving1 = parseInt(leftPlatform1.style.top) - 89
        let leftMoving2 = parseInt(leftPlatform2.style.top) - 89
        let leftMoving3 = parseInt(leftPlatform3.style.top) - 89
        let centerMoving1 = parseInt(centerPlatform1.style.top) - 89
        let centerMoving2 = parseInt(centerPlatform2.style.top) - 89
        let centerMoving3 = parseInt(centerPlatform3.style.top) - 89
        let rightMoving1 = parseInt(rightPlatform1.style.top) - 89
        let rightMoving2 = parseInt(rightPlatform2.style.top) - 89
        let rightMoving3 = parseInt(rightPlatform3.style.top) - 89

        if (gravityToggle == true && hero.y < 0 && hero.y <= -10) {
            hero.y = hero.y
        } else if (hero.y >= bottomLimit) {
            hero.y = bottomLimit
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving1 && hero.y >= leftMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving2 && hero.y >= leftMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving3 && hero.y >= leftMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving1 && hero.y >= centerMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = centerMoving1
            landed = true
        } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving2 && hero.y >= centerMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = centerMoving2
            landed = true
        } else if (hero.x > 187 && hero.x < 324 && hero.y <= centerMoving3 && hero.y >= centerMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = centerMoving3
            landed = true
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving1 && hero.y >= rightMoving1 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving2 && hero.y >= rightMoving2 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving3 && hero.y >= rightMoving3 - jumpBuffer && hero.y < bottomLimit && gravityToggle == false) {
            hero.y = hero.y
            landed = true
        } else {
            hero.y += gravity
            landed = false
            if (gravityToggle == true) {
                gravity = jumpSpeed
                landed = false
            } else {
                gravity = .5
                hero.y += gravity
                landed = false
            }
        }
    }

    //display new position of character based on the movement defined by arrow keys
    stickman.style.left = hero.x + 'px'
    stickman.style.top = hero.y + 'px'
    
    //invoke the difficulty function as part of the main interval so that it starts with the start of a new game
    difficulty()
}