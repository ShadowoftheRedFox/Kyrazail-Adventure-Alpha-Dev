export { }
declare global {
    const ConfigConst: {
        KEY: "9z$C&E)H@McQfTjWnZr4u7x!A%D*G-JaNdRgUkXp2s5v8y/B?E(H+MbPeShVmYq3t6w9z$C&F)J@NcRfTjWnZr4u7x!A%D*G-KaPdSgVkXp2s5v8y/B?E(H+MbQeThWmZq3t6w9z$C&F)J@NcRfUjXn2r5u7x!A%D*G-KaPdSgVkYp3s6v9y/B?E(H+MbQeThWmZq4t7w!z%C&F)J@NcRfUjXn2r5u8x/A?D(G-KaPdSgVkYp3s6v9y$B&E)H@MbQeThWmZq4t7w!z%C*F-JaNdRfUjXn2r5u8x/A?D(G+KbPeShVkYp3s6v9y$B&E)H@McQfTjWnZq4t7w!z%C*F-JaNdRgUkXp2s5u8x/A?D(G+KbPeShVmYq3t6w9y$B&E)H@McQfTjWnZr4u7x!A%C*F-JaNdRgUkXp2s5v8y/B?E(G+KbPeShVmYq3t6w9z$C&F)J@McQfTjWnZr4u7x!A%D*G-KaPdRgUkXp2s5v8y/B?E(H+MbQeThVmYq3t6",
        DISCORD: "https://discord.gg/5mF5AHnRCr",
        GITHUB: "https://github.com/ShadowoftheRedFox/Kyrazail-Adventure-Dev.git",
        LANGUAGE: "en" | "fr",
        ZINDEX: {
            MAP: 0,
            MAPANIMATED: 1,
            ENTITIES: 2,
            MAPOVER: 3,
            MAPEFFECT: 4,
            FIGHT: 5,
            PLAYERQUIPEMENT: 6,
            PAUSE: 7,
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
        name: string | { en: string, fr: string };
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
        dialog: GameLanguageCodedString[];

        type: "hostile" | "npc" | "marchand" | "player";
        pattern: "follow" | "merge" | "idle" | "custom" | "player";

        spawnX: number;
        spawnY: number;
        spawnOrientation: GameOrientation;

        character: {
            invisible: boolean,
            image: string | null,
            col: number | null,
            row: number | null
        };

        movementSpeed: number;

        speakImage: string | null;
        speakRow: number;
        speakCol: number;
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
        name: { fr: string, en: string },
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
        name: { fr: string, en: string },
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
        name: { fr: string, en: string },
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
}