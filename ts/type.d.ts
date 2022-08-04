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

    var GameAudiosToLoad: [];
    var GameImagesToLoad: [];
}

