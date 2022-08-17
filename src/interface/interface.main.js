/// <reference path="../../ts/type.d.ts"/>
class GameMainInterface extends GameInterfaces {
    /**
     * @param {GameScope} scope 
     */
    constructor(scope) {
        super({
            asOwnCanvas: true,
            zindex: ConfigConst.ZINDEX.MAIN,
            canvasGroup: "GameMainGroup",
            requiredImage: [],
            requiredAudio: ["MAIN/Adeste", "MAIN/Dramatic", "MAIN/Moon", "MAIN/Silence"],
            transitionLeave: true,
            transitionSpawns: true,
            activated: false,
            needsUpdate: true
        }, scope);
    }

    /**
     * @param {GameScope} scope 
     */
    startNewGame(scope) { }
    /**
     * @param {GameScope} scope 
     */
    newGameNo(scope) { }

    /**
     * @param {GameScope} scope 
     */
    render(scope) {
        const ctx = scope.cache.context[this.canvasGroup],
            w = scope.w,
            h = scope.h;
        ctx.clearRect(0, 0, w, h);

        //TODO add social network button (git and discord)
        ctx.fillStyle = "#fff";
        ctx.font = "32px Azure";
        ctx.textBaseline = "middle";
        ctx.imageSmoothingQuality = "high";
        ctx.textAlign = "center";

        //background title
        ctx.globalAlpha = 0.6;
        RectangleCreator.roundRect(ctx, (w - 590) / 2, (h - 100) / 3, 590, 100, 50, true, false);
        ctx.globalAlpha = 1;

        //create the gradient of title
        var gradient = ctx.createLinearGradient(w / 2 - 200, h / 3, w / 2 + 200, h / 3);
        gradient.addColorStop(0, "#F3C126");
        gradient.addColorStop(0.5, "#6FE0E1");
        gradient.addColorStop(1, "#3C1EEE");
        ctx.fillStyle = gradient;

        //write title
        ctx.textAlign = "center";
        ctx.font = '40px Azure';
        ctx.fillText("Kyrazail Adventure", w / 2, h / 3);
        underline(ctx, "Kyrazail Adventure", w / 2, h / 3, gradient, "40px", ctx.textAlign);

        // ctx.fillText("Main", w / 2, h / 2, w);
        this.needsUpdate = false;
    }

    /**
     * @param {GameScope} scope 
     */
    update(scope) { return scope.state; }
}