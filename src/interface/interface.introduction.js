/// <reference path="../../ts/type.d.ts"/>

class GameIntroductionInterface extends GameInterfaces {
    constructor(scope) {
        super({
            asOwnCanvas: true,
            zindex: ConfigConst.ZINDEX.INTRODUCTION,
            canvasGroup: "GameIntroductionGroup",
            requiredImage: ["Intro/Icon"],
            transitionLeave: true,
            transitionSpawns: true,
            activated: true,
            transitionLeaveDuration: 1000,
            transitionSpawnDuration: 1000,
            needsUpdate: true
        }, scope);
        this.stepDelay = [1000, 5000, 1000, 1000, 6000, 1000];
        this.started = 0;
        this.transitionNumber = 0;
        this.transitionStart = 0;
    }

    /**
     * @param {GameScope} scope 
     */
    render(scope) {
        const p = scope.constants.package;
        const ctx = scope.cache.context[this.canvasGroup];
        var w = scope.w,
            h = scope.h;

        // start the transition
        if (this.started == 0) {
            this.started = Date.now();
            // add time to each steps
            let c = 0;
            this.stepDelay.forEach((e, i) => { c += e; this.stepDelay[i] = c + this.started; });
        }

        ctx.clearRect(0, 0, w, h);
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        if (this.stepDelay[2] >= Date.now()) {
            // 1st phase of the transition
            const icon = scope.cache.image[this.requiredImage[0]];
            let imgDim = (w / 4 > h / 4 ? h / 4 : w / 4);
            if (icon) ctx.drawImage(icon.image, w / 2 - (imgDim / 2), h / 4 / 2, imgDim, imgDim);

            ctx.fillStyle = "#fff";
            ctx.font = "bold 40px Azure";
            ctx.fillText("Kyrazail team presents", w / 2, h / 3 + imgDim / 2);
        }

        if (this.stepDelay[2] <= Date.now()) {
            ctx.font = "1em Azure";
            // will scroll down text if needed
            if (200 + 24 * p.changelog.length >= h && this.stepDelay[3] <= Date.now()) {
                //scrolling down
                p.changelog.forEach(log => {
                    ctx.fillText(log, w / 2, 100 + p.changelog.indexOf(log) * 34 - Math.trunc(((this.stepDelay[4] - Date.now()) * p.changelog.length * 17) / 6000));
                });
            } else {
                // static
                p.changelog.forEach(log => {
                    ctx.fillText(log, w / 2, 100 + p.changelog.indexOf(log) * 34);
                });
            }
            //hide the bottom of the changelog text if changelogs slip under
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, w, 64);
            ctx.fillStyle = "#fff";
            ctx.font = "bold 32px Azure";
            ctx.fillText("Changelog", w / 2, 52);
        }

        if (this.stepDelay[5] < Date.now()) {
            this.activated = false;
            scope.state.menu.main.activated = true;
            return ctx.clearRect(0, 0, w, h);
        }

        ctx.fillStyle = "#000";
        // make the transition effect
        if (this.stepDelay[0] >= Date.now()) {
            // transition fades away
            if (this.transitionNumber != 1) {
                this.transitionStart = Date.now();
                this.transitionNumber = 1;
            }
            ctx.globalAlpha = 1 - ((Date.now() - this.transitionStart) / 1000);
            ctx.fillRect(0, 0, w, h);
            //! [1000, 5000, 1000, 1000, 6000, 1000];
        }
        if (this.stepDelay[1] <= Date.now() && this.stepDelay[2] >= Date.now()) {
            // transition builds up
            if (this.transitionNumber != 2) {
                this.transitionStart = Date.now();
                this.transitionNumber = 2;
            }
            ctx.globalAlpha = ((Date.now() - this.transitionStart) / 1000);
            ctx.fillRect(0, 0, w, h);
        }
        if ((this.stepDelay[2] <= Date.now() && this.stepDelay[3] >= Date.now())) {
            // transition fades away
            if (this.transitionNumber != 3) {
                this.transitionStart = Date.now();
                this.transitionNumber = 3;
            }
            ctx.globalAlpha = 1 - ((Date.now() - this.transitionStart) / 1000);
            ctx.fillRect(0, 0, w, h);
        }
        if (this.stepDelay[4] <= Date.now()) {
            // transition builds up
            if (this.transitionNumber != 4) {
                this.transitionStart = Date.now();
                this.transitionNumber = 4;
            }
            ctx.globalAlpha = ((Date.now() - this.transitionStart) / 1000);
            ctx.fillRect(0, 0, w, h);
        }

        //display version and release
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#fff";
        ctx.font = "12px Azure";
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
        ctx.fillText(`${p.releaseType} v${p.version} Last update: ${p.lastUpdate}`, 10, h - 10, w);
    }

    /**
     * @param {GameScope} scope 
     */
    update(scope) { return scope.state; }
}