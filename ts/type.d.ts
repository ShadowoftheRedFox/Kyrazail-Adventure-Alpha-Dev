export { }
declare global {
    const ConfigConst: {
        KEY: "9z$C&E)H@McQfTjWnZr4u7x!A%D*G-JaNdRgUkXp2s5v8y/B?E(H+MbPeShVmYq3t6w9z$C&F)J@NcRfTjWnZr4u7x!A%D*G-KaPdSgVkXp2s5v8y/B?E(H+MbQeThWmZq3t6w9z$C&F)J@NcRfUjXn2r5u7x!A%D*G-KaPdSgVkYp3s6v9y/B?E(H+MbQeThWmZq4t7w!z%C&F)J@NcRfUjXn2r5u8x/A?D(G-KaPdSgVkYp3s6v9y$B&E)H@MbQeThWmZq4t7w!z%C*F-JaNdRfUjXn2r5u8x/A?D(G+KbPeShVkYp3s6v9y$B&E)H@McQfTjWnZq4t7w!z%C*F-JaNdRgUkXp2s5u8x/A?D(G+KbPeShVmYq3t6w9y$B&E)H@McQfTjWnZr4u7x!A%C*F-JaNdRgUkXp2s5v8y/B?E(G+KbPeShVmYq3t6w9z$C&F)J@McQfTjWnZr4u7x!A%D*G-KaPdRgUkXp2s5v8y/B?E(H+MbQeThVmYq3t6",
        DISCORD: "https://discord.gg/5mF5AHnRCr",
        GITHUB: "https://github.com/ShadowoftheRedFox/Kyrazail-Adventure-Dev.git",
        LANGUAGE: GameLanguage,
        ZINDEX: {
            UNKNOWN: 0,
            MAP: 1,
            MAPANIMATED: 2,
            ENTITIES: 3,
            MAPOVER: 4,
            MAPEFFECT: 5,
            FIGHT: 6,
            PLAYERQUIPEMENT: 7,
            PAUSE: 8,
            INTRODUCTION: 998,
            LOADING: 999,
            ERROR: 1000
        },
        TIP: string[],
        CONTAINER: HTMLElement | null,
        MAINCONTAINER: HTMLElement | null,
        DEBUG: boolean
    };

    const GameConfig: {
        willUpdate: false,
        targetFps: 60,
        alwaysRun: false,
        /**
         * Combine KEYs name to a functionnality.
         * @see [all KEY name here](https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/#a-full-list-of-key-event-values)
         * @warn It is strongly not recommended to put same keys at two different functionnality, it may cause unexpected behaviors.
         */
        keyBoard: {
            up: string[],
            down: string[],
            right: string[],
            left: string[],
            run: string[],
            interaction: string[],
            debug: string[],
            pause: string[],
            back: string[],
            confirm: string[],
            inventory: string[]
        }
    };

    const LoadingScreenManager: {
        w: number;
        h: number;

        progress: number;
        interval: number;
        progressMax: number;
        progressLast: number;
        refreshSpeed: number;
        progressSmooth: number;
        progressAnimation: number;
        message: string;

        ctx: CanvasRenderingContext2D | null;
        viewport: HTMLCanvasElement | null;

        trailingStep: number;
        trailingCount: number;
        trailingSpeed: number;

        tipIndex: number;
        tipCount: number;
        tipSpeed: number;

        stripeStep: number;
        stripeSpeed: number;
        stripeAlpha: number;
        stripeColor: string;

        animationW: number;
        animationH: number;
        animationStep: number;
        animationImage: null;
        animationMargin: number;
        animationLastStep: number;
        animationStepCount: number;
        animationStepSpeed: number;
        animationStepSpeedDistance: number;
        animationPositionSpeed(w: number): number
        animationPosition: number;
        calledEqual: false;

        init(callWhenEqual: () => void): void
        end(): void
        edit(): void
        bar(): void
        animate(): void
        tip(): void
        title(): void
        addProgress(n: number): void
        setMaxProgress(n: number): void
        createPattern(color: string | "grey", alpha: number | 1): CanvasPattern
        progressFunction(): void
    };

    var GameAudiosToLoad: [];
    var GameImagesToLoad: [];

    type GameEntitiesOptions = {
        name: string | GameLanguageObject;
        /** If type is "hostile".*/
        stats: GameEntitiesStats
        /** If type is marchand.*/
        shop: {
            canPlayerSell: boolean,
            canPlayerBuy: boolean,
            canPlayerEquip: boolean,
            items: GameItemName[],
            welcomeMessage: GameLanguageCodedString[]
        };
        /** If type is npc.*/
        dialog: GameLanguageCodedString[] | ["..."];

        type: "hostile" | "npc" | "marchand" | "player";
        pattern: "follow" | "merge" | "idle" | "custom" | "player";

        spawnX: number | 0;
        spawnY: number | 0;
        spawnOrientation: GameOrientation | "south";

        character: {
            invisible: boolean | true,
            image: string | null,
            col: number | null,
            row: number | null
        };

        movementSpeed: number | 0;

        speakImage: string | null;
        speakRow: number | null;
        speakCol: number | null;
    };

    type GameStatusEffect = {
        /** In round.*/
        duration: number,
        /** Add the number for the target on his pv.*/
        pv: number,
        /** Add the number for the target on his mp.*/
        mp: number,
        /** Add the number for the target on his sp.*/
        sp: number,
        /** If the effect can cause death.*/
        canKill: boolean,
        /** The image displayed in the status.*/
        effectImage: string,
        effectRow: number,
        effectCol: number,
        /** If there is an animation each time the effect is inflicted.*/
        animationEffect: boolean,
        animationImage: string
    };

    type GameItem = {
        name: GameLanguageObject,
        image: string,
        col: number,
        rown: number,
        description: GameLanguageCodedString,
        special: boolean,
        usable: boolean,
        /** How many times can we use this item.*/
        usageAmount: number,
        helmet: boolean,
        torso: boolean,
        legging: boolean,
        boot: boolean,
        singleHanded: boolean,
        twoHanded: boolean,
        type: GameItemType[]
    };

    type GameRecipe = {
        name: GameLanguageObject,
        description: GameLanguageCodedString,
        /** Array of items names */
        recipeList: {
            /** Refers to an item name.*/
            item: string,
            amount: number
        }[],
        usageAmount: number | null,
        result: {
            /** Refers to an item name.*/
            item: string,
            amount: number
        }
    }

    type GameAttackType = "physical" | "magic" | "fire" | "water" | "ice" | "electricity" | "dark" | "holy";

    type GameOrientation = "east" | "south" | "west" | "north";

    /** A code that will be used in the language module to return the true string but translated in the wanted language.*/
    type GameLanguageCodedString = string;

    /** Refers to the name of an item. */
    type GameItemName = string;

    type GameItemType = "resource" | "equipement" | "potion";


    /**
     * Remove any duplicate from the array, so it has every item once.
     */
    function RemoveDuplicate(a: any[]): any[];

    type GameEntitiesStats = {
        pv: number,
        mp: number,
        sp: number,

        def: number,
        magicdef: number
        atk: number,
        magicatk: number
        agi: number,
        luck: number,

        special: GameSpecialAbility[],

        /** Regenerate by himself.*/
        regeneration: number,

        /** Reduce by 2 the damage taken.*/
        resistance: GameAttackType[],
        /** Increase by 2 the damage taken.*/
        weakness: GameAttackType[],

        status: GameStatusEffect[],
        loots: { item: GameItemName, amount: number }[],
        gold: number,
        exp: number,

        boss: boolean,
        bossLoot: { item: GameItemName, amount: number }[]
    };

    type GameSpecialAbility = {
        name: GameLanguageObject,
        mpCost: number,
        hpCost: number,
        spCost: number,
        /** When attacking. */
        animationImage: string | null,
        /** In menu. */
        skillImage: string | null,
        type: GameAttackType,
        /** Delay before using the skill again, in rounds.*/
        delay: number,
        /** If there is a max amount of user per battle.*/
        usePerBattle: number | null
    };

    type GameScope = {
        /**Width of the game screen.*/
        w: number,
        /**Height of the game screen.*/
        h: number,
        /**State of the game.*/
        state: {},
        /**The language wanted.*/
        language: GameLanguage,
        /**Game session relativ constants.*/
        constants: {
            /**If node js is present or not.*/
            isNodejs: boolean,
            /**What platform the game is currently running on.*/
            platform: "Cloud" | string,
            /**The url location of the game.*/
            href: string,
            /**The wanted fps of the game.*/
            targetFps: number,
            /**Package.json*/
            package: {
                name: "kyrazail-adventure",
                version: string,
                description: "Kyrazail adventure game.",
                author: "Shadow of the Red Fox#5881",
                lastUpdate: string,
                releaseType: "Dev/Alpha" | "Dev/Beta" | "Release",
                changelog: string[],
            }
        };
        checkGameUpdate: {
            lastCheck: {
                updateFound: boolean,
                versionFound: string,
                lastCheck: string
            }
        };
        soundsSettings: {
            volumeBGM: number,
            volumeBGS: number,
            volumeMAIN: number,
            volumeME: number,
            volumeSE: number,
            playingBGM: HTMLAudioElement | null,
            playingBGS: HTMLAudioElement | null,
            playingMAIN: HTMLAudioElement | null,
            playingME: HTMLAudioElement | null,
            playingSE: HTMLAudioElement | null
        };
        cache: {
            image: (name: string) => {
                image: HTMLImageElement,
                tileW?: number,
                tileH?: number,
                col?: number,
                row?: number
            },
            audio: (name: string) => HTMLAudioElement,
            map: (name: string) => GameMapPattern,
            // we preloaded his data at the load of the dom
            data: {
                names: {
                    malefirstnames: string[]
                    femalefirstnames: string[]
                    lastnames: string[]
                },
                item: (name: GameItemName) => GameItem,
                event: {},
                title: {},
                monsters: {},
                class: {},
                skills: (name: string) => GameSpecialAbility,
            },
            context: (name: string) => CanvasRenderingContext2D
        };
    };

    const GameGlobalEvent: {
        /** Will launch the given function when the given event is emited somewhere.*/
        on(event: string | any, listener: (...any: any[]) => {} | any): () => void;
        /** Will launch the given function when the given event is emited somewhere, one time.*/
        once(event: string | any, listener: (...any: any[]) => {} | any): void;
        /** Emit the given event, if there is a listener somewhere of the given event, he will fire.*/
        emit(event: string | any, ...args: any[]): void;
        /** Remove a listener from an event.*/
        removeListener(event: string | any, listener: () => {} | any): void;
        /** Remove all listener from an event is the event parameter is found, otherwise, delete all event.*/
        removeAllListener(event: string | any): void;
    }

    type GameLanguage = "fr" | "en";
    type GameLanguageObject = {
        fr: string,
        en: string
    }

    type GameInterfacesOptions = {
        asOwnCanvas: boolean,
        canvasGroup: string | "MainGameGroup",
        zindex: number,
        requiredImage: string[],
        requiredAudio: string[],

        transitionSpawn: boolean,
        transitionLeave: boolean
    }

    type GameMapPattern = {
        height: number,
        infinite: false,
        layers: [{
            data: number[],
            height: number,
            id: number,
            name: string,
            opacity: number,
            type: "tilelayer",
            visible: true,
            width: number,
            x: number,
            y: number
        }],
        orientation: "orthogonal",
        renderorder: "right-up",
        tileheight: number,
        tilesets: {
            firstgid: number,
            source: string
        }[],
        tilewidth: number,
        width: number,
        spawn: number[],
        colision: number[][]
    }

    /**
     * Edit the canvas element on the html page to the new dimension.
     * @param canvas canvas element
     * @param neww width of the canvas
     * @param newh heigth of the canvas
     */
    function regenerateCanvas(canvas: HTMLCanvasElement, neww: number, newh: number): void;

    /**
     * Edit the canvas element on the html page to the new dimension.
     * @param canvas canvas element
     * @param neww width of the canvas
     * @param newh heigth of the canvas
     */
    function regenerateCanvas(canvas: HTMLCanvasElement, neww: number, newh: number): void;

    /**
     * Create a canvas element on the html page.
     * @param w width of the canvas
     * @param h heigth of the canvas
     * @param i z-index of the canvas
     */
    function generateCanvas(w: number, h: number, i?: number): HTMLCanvasElement;

    /**
     * Get the pixel ratio depending of the current device.
     * @param context the wanted context ration
     */
    function getPixelRatio(context: CanvasRenderingContext2D): number;

    /**
     * Regenerate all canvas element to the given dimension.
     * @param neww The new window width
     * @param newh The new window height
     */
    function regenerateAllCanvas(neww: number, newh: number): void;

    /**
     * Remove an element off the dom.
     * @param id The id of the element to remove
     * @returns The success or not of the operation
     */
    function removeElement(id: string): boolean
}