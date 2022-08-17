/// <reference path="../../ts/type.d.ts"/>

const GameMainInterfaceTopBackground = [
    ["Battlebacks1/Ship", "Battlebacks2/Ship", "white"],
    ["Battlebacks1/Clouds", "Battlebacks2/Clouds", "black"],
    ["Battlebacks1/Sky", "Battlebacks2/Sky", "black"],
    ["Battlebacks1/Snowfield", "Battlebacks2/Snowfield", "black"],
    ["Battlebacks1/Snow", "Battlebacks2/Snowfield", "black"],
    ["Battlebacks1/Dirt1", "Battlebacks2/Cliff", "black"],
    ["Battlebacks1/Dirt2", "Battlebacks2/Port", "black"],
    ["Battlebacks1/Grassland", "Battlebacks2/Forest1", "black"],
    ["Battlebacks1/GrassMaze", "Battlebacks2/Forest2", "white"],
    ["Battlebacks1/Cobblestones4", "Battlebacks2/Bridge", "black"]
];
const GameMainInterfaceChoosen = GameMainInterfaceTopBackground[Math.floor(Math.random() * GameMainInterfaceTopBackground.length)];
class GameMainInterface extends GameInterfaces {
    /**
     * @param {GameScope} scope 
     */
    constructor(scope) {
        super({
            asOwnCanvas: true,
            zindex: ConfigConst.ZINDEX.MAIN,
            canvasGroup: "GameMainGroup",
            requiredImage: [GameMainInterfaceChoosen[0], GameMainInterfaceChoosen[1]],
            requiredAudio: ["MAIN/Adeste", "MAIN/Dramatic", "MAIN/Moon", "MAIN/Silence"],
            transitionLeave: true,
            transitionSpawn: true,
            activated: false,
            needsUpdate: true
        }, scope);

        this.choosen = GameMainInterfaceChoosen;
        this.menuButton = [
            {
                name: "New Game",
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                f: this.startNewGame
            }, {
                name: "Load",
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                f: this.loadGame
            }, {
                name: "Settings",
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                f: this.toSettings
            }, {
                name: "Quit Game",
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                f: WindowManager.closeGame
            }
        ];
        this.focused = 0;
    }

    /**
     * @param {GameScope} scope 
     */
    startNewGame(scope) {
        //TODO save the game in an auto save if a game is currently being played

        //TODO launch a new game

        //TODO also create on start 2 auto save files
    }
    /**
     * @param {GameScope} scope 
     */
    loadGame(scope) {
        this.activated = false;
        scope.state.menu.load.activated = true;
        scope.state.menu.load.needsUpdate = true;
    }
    /**
     * @param {GameScope} scope 
     */
    toSettings(scope) {
        this.activated = false;
        scope.state.menu.settings.activated = true;
        scope.state.menu.settings.needsUpdate = true;
    }
    /**
     * @param {GameScope} scope 
     */
    render(scope) {
        const ctx = scope.cache.context[this.canvasGroup],
            w = scope.w,
            h = scope.h;
        ctx.clearRect(0, 0, w, h);

        //TODO add social network button (git and discord)
        ctx.drawImage(scope.cache.image[this.choosen[0]].image, 0, 0, w, h);
        ctx.drawImage(scope.cache.image[this.choosen[1]].image, 0, 0, w, h);

        ctx.fillStyle = "#fff";
        ctx.font = '40px Azure';
        ctx.imageSmoothingQuality = "high";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        //background title
        ctx.globalAlpha = 0.9;
        RectangleCreator.roundRect(ctx, (w - (ctx.measureText("Kyrazail Adventure").width - 20)) / 2 - 40, h / 4 - 60, ctx.measureText("Kyrazail Adventure").width + 60, 100, 50, true, false);
        ctx.globalAlpha = 1;

        //create the gradient of title
        var gradient = ctx.createLinearGradient(w / 2 - 200, h / 3, w / 2 + 200, h / 3);
        gradient.addColorStop(0, "#F3C126");
        gradient.addColorStop(0.5, "#6FE0E1");
        gradient.addColorStop(1, "#3C1EEE");
        ctx.fillStyle = gradient;

        //write title
        ctx.fillText("Kyrazail Adventure", w / 2, h / 4);
        underline(ctx, "Kyrazail Adventure", w / 2, h / 4, gradient, "40px", ctx.textAlign);

        ctx.textBaseline = "middle";
        ctx.font = '32px Azure';

        gradient = ctx.createLinearGradient(w / 2 - 180, h / 1.8, w / 2 + 180, h / 1.8);
        gradient.addColorStop(0, (this.choosen[2] == "white" ? "#ffffff00" : "#00000000"));
        gradient.addColorStop(0.5, (this.choosen[2] == "white" ? "#ffffff" : "#000000"));
        gradient.addColorStop(1, (this.choosen[2] == "white" ? "#ffffff00" : "#00000000"));
        ctx.fillStyle = gradient;
        // ctx.fillStyle = "red";
        ctx.fillRect(w / 2 - 200, h / 1.8 + 52 * this.focused - 16, 400, 40);

        ctx.fillStyle = (this.choosen[2] == "white" ? "black" : "white");
        this.menuButton.forEach((button, index) => {
            ctx.fillText(button.name, w / 2, h / 1.8 + 52 * index, w);
            button.x = w / 2 - 200;
            button.y = h / 1.8 + 52 * index - 16;
            button.w = 400;
            button.h = 40;
        });

        if (ConfigConst.DEBUG) {
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(MouseTrackerManager.data.lastMove.x, MouseTrackerManager.data.lastMove.y, 10, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.closePath();
            ctx.fillStyle = "blue";
            ctx.beginPath();
            ctx.arc(MouseTrackerManager.data.click[MouseTrackerManager.data.click.length - 1].x, MouseTrackerManager.data.click[MouseTrackerManager.data.click.length - 1].y, 10, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.closePath();
        }

        // this.needsUpdate = false;
    }

    /**
     * @param {GameScope} scope 
     */
    update(scope) {
        const that = this,
            k = GameConfig.keyBoard;
        document.onkeydown = function (ev) {
            if (k.down.includes(ev.key) && that.focused < that.menuButton.length - 1) {
                that.focused++;
                that.f();
            }
            if (k.up.includes(ev.key) && that.focused > 0) {
                that.focused--;
                that.f();
            }
            if (k.confirm.includes(ev.key)) {
                that.menuButton[that.focused].f(scope);
            }
        };

        this.menuButton.forEach((b, idx) => {
            if (MouseTrackerManager.checkOver(b.x, b.y, b.w, b.h)) {
                this.focused = idx;
                this.f();
            }
            if (MouseTrackerManager.checkClick(b.x, b.y, b.w, b.h)) {
                b.f(scope);
                this.f();
            }
        });

        return scope.state;
    }

    f() { this.needsUpdate = true; }
}