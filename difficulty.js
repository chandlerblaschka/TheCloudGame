function difficulty() {
    if (minutes == 0 && seconds > 9 && seconds < 19) {
        jumpSpeed = 1.25
        console.log(jumpSpeed)
    } else if( minutes == 0 && seconds > 19 && seconds < 29) {
        jumpSpeed = 1
        console.log(jumpSpeed)
    } else if( minutes == 0 && seconds > 29 && seconds < 39) {
        jumpSpeed = .75
        console.log(jumpSpeed)
    } else if( minutes == 0 && seconds > 39 && seconds < 49) {
        jumpSpeed = .625
        console.log(jumpSpeed)
    } else if( minutes == 0 && seconds > 49 && seconds < 54) {
        jumpSpeed = .5
        console.log(jumpSpeed)
    } else if(minutes > 0 || seconds > 54 ) {
        jumpSpeed = .4975
    }
}