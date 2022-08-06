// / <reference path="../ts/type.d.ts"/>
/**
 * Main function, it create every instances and object needed to start the game.
 * @param {number} w Width of the starting canvas .
 * @param {number} h Heigth of the starting canavs.
 * @param {number} targetFps Refresh speed of the canvas.
 */
class Game {
    constructor() {
        console.time("Started game in");

        // Instantiate an empty state object
        this.state = {};

        // get the current language from const
        this.language = ConfigConst.LANGUAGE;

        // declare session relativ constants
        this.constants = {
            isNodejs: typeof require === "function" && typeof process === 'object',
            platform: "Cloud",
            href: window.location.href,
            targetFps: GameConfig.targetFps,
            // for introduction information 
            package: DataLoaderManager._dataLoaded.package
        };

        // will be used to update the game if needed
        // may be removed in the future, and subject to change
        this.checkGameUpdate = {
            lastCheck: DataLoaderManager._dataLoaded.Update
        };

        // add an easy access to width and height property
        this.w = ConfigConst.MAINCONTAINER.offsetWidth;
        this.h = ConfigConst.MAINCONTAINER.offsetHeight;

        // check if the game is running online or in the app, to correctly get ressources.
        this.getGameMainPath();

        // add an property for all sounds
        this.soundsSettings = {
            volumeBGM: 0.5,
            volumeBGS: 0.5,
            volumeMAIN: 0.5,
            volumeME: 0.5,
            volumeSE: 0.5,
            playingBGM: null,
            playingBGS: null,
            playingMAIN: null,
            playingME: null,
            playingSE: null
        };

        //create a cache element where all data can be stored/erased
        this.cache = {
            image: {},
            audio: {},
            map: {},
            // we preloaded his data at the load of the dom
            data: DataLoaderManager._dataLoaded.Data
        };

        //TODO add a share method so that every rendering object in their creating function share the same canavs
        //add every rendering object to their current object
        this.state.entities = this.state.entities || {};
        // this.state.entities.player = new Player(this, Math.round(w / 2), Math.round(h / 3));
        // add a mob/NPC manager so it can be added anytime

        this.state.menu = this.state.menu || {};
        // this.state.menu.pause = new Pause(this);
        // this.state.menu.gameOver = new GameOver(this);

        this.state.welcome = this.state.welcome || {};
        // this.state.welcome.main = new Welcome(this);

        this.state.once = this.state.once || {};
        // this.state.once.intro = new Intro(this);
        //todo will be added later, because use a lot of data trafic and must manage the github API
        // this.state.once.checkUpdate = new updateMenu(this);
    }

    getGameMainPath() {
        const t = this.constants.href.split("index.html");
        if (t.length > 1) {
            this.constants.href = t.join("");
            console.log("Server detected, correcting source URL.");
        } else if (this.constants.isNodejs === true) {
            console.log("Running on app.");
            this.constants.platform = process.platform;
        } else {
            console.log("Server not detected. Giving vanilla URL.");
        }
    }
}