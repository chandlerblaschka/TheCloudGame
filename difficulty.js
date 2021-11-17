// the difficulty function is used to change the jump height of the character over time, so that by the time the player reaches 60 seconds landing on the next platform is barely achievable 


// future version will adjust bottom limit and ideally be related to time directly, and not intervals of time for a smoother transition and less choppy flow

function difficulty() {
    if (minutes == 0 && seconds > 9 && seconds < 19) {
        jumpSpeed = 1.25
    } else if( minutes == 0 && seconds > 19 && seconds < 29) {
        jumpSpeed = 1
    } else if( minutes == 0 && seconds > 29 && seconds < 39) {
        jumpSpeed = .75
    } else if( minutes == 0 && seconds > 39 && seconds < 49) {
        jumpSpeed = .625
    } else if( minutes == 0 && seconds > 49 && seconds < 54) {
        jumpSpeed = .5
    } else if(minutes > 0 || seconds > 54 ) {
        jumpSpeed = .4975
    }
}