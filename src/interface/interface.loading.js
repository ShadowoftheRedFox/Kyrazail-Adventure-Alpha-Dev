/// <reference path="../../ts/type.d.ts"/>
function LoadingScreenManager() {
    throw new Error("LoadingScreenmanager is a static class.");
}

LoadingScreenManager.w = 0;
LoadingScreenManager.h = 0;

LoadingScreenManager.progress = 0;
LoadingScreenManager.interval = 0;
LoadingScreenManager.progressMax = 1;
LoadingScreenManager.refreshSpeed = 20;
LoadingScreenManager.message = "Initialisation";

LoadingScreenManager.ctx = null;
LoadingScreenManager.viewport = null;

LoadingScreenManager.trailingStep = 0;
LoadingScreenManager.trailingCount = 0;
LoadingScreenManager.trailingSpeed = 250;

LoadingScreenManager.tipIndex = 0;
LoadingScreenManager.tipCount = 0;
LoadingScreenManager.tipSpeed = 15;

LoadingScreenManager.stripeStep = 0;
LoadingScreenManager.stripeSpeed = 20;

LoadingScreenManager.animationW = 0;
LoadingScreenManager.animationH = 0;
LoadingScreenManager.animationStep = 0;
LoadingScreenManager.animationImage = null;
LoadingScreenManager.animationMargin = 100;
LoadingScreenManager.animationStepSpeed = 200;
LoadingScreenManager.animationPosition = -LoadingScreenManager.animationMargin;


LoadingScreenManager.init = function (callOnEqual) { };
LoadingScreenManager.end = function () { };
LoadingScreenManager.edit = function () { };
LoadingScreenManager.bar = function () { };
LoadingScreenManager.animate = function () { };
LoadingScreenManager.tip = function () { };
LoadingScreenManager.addProgress = function () { };
LoadingScreenManager.setMaxProhress = function () { };
LoadingScreenManager.createPattern = function () { };

/**
 * Return a number between 0 and one, the next smoothing animation.
 * 
 * Goal: Smooth the effect when progress is added.
 * 
 * Requirement:
 * We want to fill in g frame the difference between a and p.
 * We also want the animation to go slower at the end.
 */
LoadingScreenManager.progressFunction = function () {
    /** The amount of frame for progressAnimation to reach progress. */
    var g = LoadingScreenManager.progressAnimationGoal,
        /** The max amount of progress. */
        m = LoadingScreenManager.maxProgress,
        /** The current progress. equal 0 <= x <= maxProgress */
        p = LoadingScreenManager.progress,
        /** The last amount of progress added. */
        d = LoadingScreenManager.lastProgress,
        /** The smoothing effect, equal 0 < x <= progress <= 100 */
        a = LoadingScreenManager.progressAnimation;

    // get the current pourcentage filled with the animation smoothing
    let $ = a;

    // add the travel part in one frame
    $ += d / g;

    // check if we reached the current progress
    if ($ >= p) {
        $ = p;
    }
    // in case something went wrong
    if (!ConfigConst.DEBUG && $ <= 0) $ = p;

    //update result
    LoadingScreenManager.progressAnimation = $;
};