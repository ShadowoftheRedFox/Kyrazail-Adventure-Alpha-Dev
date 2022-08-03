/// <reference path="../ts/type.d.ts"/>
document.ondrag = document.ondragstart = document.oncontextmenu = function () { return false; };

// declare all needed global variables here
var GameAudiosToLoad = [];
var GameImagesToLoad = [];

window.onload = ScriptLoaderManager.setup(StackLoadPlugin, 0, () => {
    ScriptLoaderManager.setup(StackLoadBuild.concat(
        StackLoadClass, StackLoadConfig,
        StackLoadCore, StackLoadEntity,
        StackLoadEvent, StackLoadFunction,
        StackLoadGlobal, StackLoadInterface,
        StackLoadManager, StackLoadUtil
    ), 0, () => {
        DataLoaderManager.setup(StackLoadData, 0, () => {
            WindowManager.init();
            try {
                LoadingScreenManager.init();
                window.game = new Game();
            } catch (e) {
                WindowManager.fatal(e);
            }
        });
    });
});