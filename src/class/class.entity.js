/// <reference path="../../ts/type.d.ts"/>

class GameEntitiesClass {
    /**
     * 
     * @param {GameEntitiesOptions} options 
     */
    constructor(options) {
        this.name = {};
        this.name.en = options.name.en || options.name;
        this.name.fr = options.name.fr || options.name;
        this.stats = options.stats; 
        
        this.type = options.type;
        this.pattern = options.pattern;
    }

    validateOptions() { }
}