document.ondrag = document.ondragstart = document.oncontextmenu = function () { return false; };

var GameAudiosToLoad = [];
var GameImagesToLoad = [];

ScriptLoaderManager.setup(StackLoadPlugin, 0, () => {
    ScriptLoaderManager.setup(StackLoadBuild.concat(
        StackLoadClass, StackLoadConfig, StackLoadCore,
        StackLoadEntity, StackLoadEvent, StackLoadFunction,
        StackLoadGlobal, StackLoadInterface, StackLoadManager,
        StackLoadUtil
    ), 0, () => {
        DataLoaderManager.setup(StackLoadData, 0, () => {

        });
    });
});