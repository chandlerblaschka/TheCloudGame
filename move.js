let bottomLimit = 510;
let landed = true
let gravityToggle = false
var gravity = .5
var jumpSpeed = 1.5
var jumpBuffer = 5
let displayScore = document.getElementById('currentScore')

function move() {
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
            //landed = false
        } else {
            gravity = .5
            hero.y += gravity
            landed = false
        }
    }

    if (Keys.up) {
        if (landed == true) {
            gravityToggle = true
            gravity = jumpSpeed
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
                //landed = false
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
                //landed = false
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
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving1 && hero.y >= leftMoving1 - jumpBuffer && hero.y < bottomLimit) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving2 && hero.y >= leftMoving2 - jumpBuffer && hero.y < bottomLimit) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > -23 && hero.x < 124 && hero.y <= leftMoving3 && hero.y >= leftMoving3 - jumpBuffer && hero.y < bottomLimit) {
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
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving1 && hero.y >= rightMoving1 - jumpBuffer && hero.y < bottomLimit) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving2 && hero.y >= rightMoving2 - jumpBuffer && hero.y < bottomLimit) {
            hero.y = hero.y
            landed = true
        } else if (hero.x > 387 && hero.x < 524 && hero.y <= rightMoving3 && hero.y >= rightMoving3 - jumpBuffer && hero.y < bottomLimit) {
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
    stickman.style.left = hero.x + 'px'
    stickman.style.top = hero.y + 'px'
    difficulty()
}