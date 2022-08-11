/// <reference path="../../ts/type.d.ts"/>
class GameMainInterface extends GameInterfaces {
    constructor(scope) {
        super({
            asOwnCanvas: true,
            zindex: ConfigConst.ZINDEX.MAIN,
            canvasGroup: "GameMainGroup",
            requiredImage: ["Titles1/Landscape"],
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
    render(scope) {
        const ctx = scope.cache.context[this.canvasGroup];
        var w = scope.w,
            h = scope.h;

        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = "#fff";
        ctx.font = "32px Unreadable";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText("Main aozidbaz azdoi ahzdo", w / 2, h / 2, w);
        this.needsUpdate = false;
    }

    /**
     * @param {GameScope} scope 
     */
    update(scope) { }
}