/// <reference path="../../ts/type.d.ts"/>

class GameEntitiesClass {
    /**
     * 
     * @param {GameEntitiesOptions} options 
     */
    constructor(options) {
        this.validateOptions(options);
        this.name = {};
        this.name.en = options.name.en || options.name;
        this.name.fr = options.name.fr || options.name;

        this.type = options.type;
        this.pattern = options.pattern;

        this.spawnX = options.spawnX;
        this.spawnY = options.spawnY;
        this.spawnOrientation = options.spawnOrientation;

        this.movementSpeed = options.movementSpeed;
        this.speakImage = options.speakImage;
        this.speakRow = options.speakRow;
        this.speakCol = options.speakCol;
    }

    /**
     * @param {GameEntitiesOptions} options 
     */
    validateOptions(options) {
        if (!options) throw new ReferenceError("You must pass options for the entity.");
        if (!options.name) throw new ReferenceError("You must pass a name for the entity.");

        if (options.type == "player" && options.pattern != "player") throw new Error("The given type is player but the movement is not.");

        if (options.type == "hostile" && !options.stats) throw new ReferenceError("You must pass stats for a hostile entity.");
        this.stats = options.stats;

        if (options.type == "marchand" && !options.shop) throw new ReferenceError("You must pass shop for a marchand entity.");
        this.shop = options.shop;

        if (options.type == "npc" && !options.dialog) throw new ReferenceError("You must pass dialog for a npc entity.");
        this.dialog = options.dialog;

        if (!this.render || typeof this.render != "function") throw new ReferenceError("You must pass a render method.");
        if (!this.update || typeof this.update != "function") throw new ReferenceError("You must pass an update method.");

        if (!options.character) throw new ReferenceError("You must pass a character object.");
        this.character = options.character;
        if (this.character.invisible == false) GameImagesToLoad.push(this.character.image);

        if (this.speakImage) GameImagesToLoad.push(this.speakImage);

        if (this.stats) this.stats.special.forEach(a => { if (a.animationImage) GameImagesToLoad.push(a.animationImage); if (a.skillImage) GameImagesToLoad.push(a.skillImage); });
    }
}