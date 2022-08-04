/****************************************************************************
 *                                                                          *
 *                                 BE AWARE                                 *
 *                     MANUALLY CHANGING THOSE SETTINGS                     *
 *                           MAY BRAKE THE GAME                             *
 *                DO NOT TOUCH UNLESS YOU KNOW WHAT YOU DO                  *
 *                                                                          *
 *                                                                          *
 *                 THOSE PARAMETERS CAN BE EDITED IN GAMES                  *
 *                                                                          *
 ****************************************************************************/
const GameConfig = {
    //if the game will update at the next start
    willUpdate: false,
    //the fps the game will be running
    targetFps: 60,
    //always run enabled or disabled
    alwaysRun: false,
    //key input
    keyBoard: {
        //? See all KEY NAME here: https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/#a-full-list-of-key-event-values
        //! It is not recommended to put same keys at two different functionnality
        up: ["ArrowUp", "z"],
        down: ["ArrowDown", "s"],
        right: ["ArrowRight", "d"],
        left: ["ArrowLeft", "q"],
        run: ["Shift"],
        interaction: ["e", "Enter"], //in game, with the player
        debug: ["k"],
        pause: ["p"],
        back: ["Backspace", "x"],
        confirm: ["Enter"], //in menu
        inventory: ["c", "a"]
    }
};