The Cloud Game 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Description:

The Cloud Game is a vanilla javascript platform game. This version of The Cloud Game allows for Player vs. Player game play where each player takes turns trying to stay alive longer than the other, while also allowing one player to compete against previous times without alternating. The general goal of the game is to stay alive for 1 minute while jumping from cloud to cloud and avoiding falling to the bottom of the window. As the time approaches 1 minute the player's mobility will be limited incrementally so that by the 1 minute mark it is difficult to stay alive. 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![alt text](https://github.com/chandlerblaschka/TheCloudGame/blob/master/OnLoad.jpg?raw=true)

The user interface was designed to avoid using the mouse as much as possible so that the player can start a new game with little to no effort. By pressing the spacebar you can immediately start a game, whether you have just lost or if it is your first time on the page. The volume defaults to 50%, but can be adjusted using the slider, requiring the user to use the mouse. The active player defaults to Player 1, but can be changed with a mouse click on the Player 2 link. With those being the only controls outside of game play, the user isn't distracted by additional settings or buttons that would take them away from the game itself.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![alt text](https://github.com/chandlerblaschka/TheCloudGame/blob/master/GamePlay.jpg?raw=true)

Now that the game has started the user will only be using the arrow keys. The character movement was designed to be as fluid as possible allowing multiple arrow keys to be pressed at once, all with immediate response. The up arrow key will send the character upward, with the hope of landing on a higher cloud. If the character has not landed, they will not be able to jump. The left and right arrow keys allow the player to move the character side to side, and if they hit the right or left limit, they are sent to the other side of the window as if it were wrapped. The down arrow key allows the character to expedite the fall of their character so that they can land sooner and jump again. 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![alt text](https://github.com/chandlerblaschka/TheCloudGame/blob/master/GameOver.jpg?raw=true)

Once the player has fallen to the bottom of the window and missed all the clouds, the game ends. When the game ends the current player and current time spent alive is displayed. If the time is in the top 3 of all logged times, it takes its place on the all time score board for the respective player. Now that the times have been displayed and the user sees how they matchup to past times, or the other player, they can play again by simply pressing the spacebar. 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Future updates to the game may include:
    - Using a function for the up arrow movement so that as the character moves up, their speed decreases and gradually stops
    - Change the color of the volume slider to black to match the theme 
    - Change the playable area as time progresses
        - The bottom of the screen will creep into the playable area limiting the room the user has to stay alive
    - Allow custom user names for storing scores to avoid limiting the user to Player 1 or Player 2
    - Create a character GIF for each arrow key to give the character more life and enhance the UX
    - Disable arrow keys on the Instructions and Game Over page
    - Revisit the code and refactor where possible
        - Evaluate variable declarations
        - Allow the volume icons on left and right side of slider to be clicked and control volume
            - May also include a keyboard shortcut to mute
    - Additional game functionality
        - tokens that are close to the bottom of the screen that reduce the bottom limit creep to create a risk/reward for the user