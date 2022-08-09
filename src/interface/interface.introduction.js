/// <reference path="../../ts/type.d.ts"/>

class GameIntroductionInterface extends GameInterfaces {
    constructor(scope) {
        super({
            asOwnCanvas: true,
            zindex: ConfigConst.ZINDEX.INTRODUCTION,
            canvasGroup: "GameIntroductionGroup",
            requiredImage: ["Intro/Icon"],
            transitionLeave: true,
            transitionSpawns: true
        }, scope);
    }

    /**
     * @param {GameScope} scope 
     */
    render(scope) {
        /**@type {CanvasRenderingContext2D} */
        const ctx = this.ctx,
            p = scope.checkGameUpdate.lastCheck;
        var w = scope.constants.width, // largeur
            h = scope.constants.height; // hauteur

        //display version and release
        ctx.fillStyle = "#ffffff";
        ctx.font = "16px Azure";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(`${p.releaseType} v${p.version} Last update: ${p.lastUpdate}`, 10, h - 26);
        ctx.fillText("(.Y.)", w / 2, h / 2);
    }

    /**
     * @param {GameScope} scope 
     */
    update(scope) { }
}