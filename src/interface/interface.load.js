class GameLoadInterface extends GameInterfaces {
    /**
     * @param {GameScope} scope 
     */
    constructor(scope) {
        super({
            canvasGroup: "GameMainGroupSubMenu",
            transitionLeave: false,
            transitionSpawn: false,
            activated: false,
            needsUpdate: true
        }, scope);

        this.checkSaveFile = false;
        this.files = [];
        this.savePath = "";
    }

    /**
     * @param {GameScope} scope 
     */
    render(scope) {
        const ctx = scope.cache.context[this.canvasGroup],
            w = scope.w,
            h = scope.h;
        ctx.clearRect(0, 0, w, h);

        // to keep the same background as the main menu
        ctx.drawImage(scope.cache.image[scope.state.menu.main.choosen[0]].image, 0, 0, w, h);
        ctx.drawImage(scope.cache.image[scope.state.menu.main.choosen[1]].image, 0, 0, w, h);

        ctx.fillStyle = scope.state.menu.main.choosen[2];
        ctx.font = '2em Azure';
        ctx.imageSmoothingQuality = "high";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Load a game save", w / 2, h / 6);
        ctx.font = '1.5em Azure';

        //if in app
        if (scope.constants.isNwjs) {
            const fs = require("fs"),
                path = require("path");
            this.savePath = path.resolve(path.resolve(), "save");

            if (!this.checkSaveFile) {
                fs.readdir(this.savePath, (err, f) => {
                    //handling error
                    if (err) {
                        this.files = err;
                    }
                    this.files = f.toString();
                });
                this.checkSaveFile = true;
            }
            if (this.files.length == 0) ctx.fillText("Loading files...", w / 2, h / 2);
        } else {
            //if online
            ctx.fillText("Choose a save file:", w / 2, h / 2);

            if (!this.checkSaveFile) {
                this.checkSaveFile = true;
                //add a input element and check it
                let inputs = document.createElement('input');
                inputs.type = 'file';
                inputs.hidden = true;
                inputs.accept = ".kyraadv,.kyraadvsave";
                inputs.id = "GameSaveInput";
                inputs.name = "GameSaveInput";
                // we want only one file
                inputs.multiple = false;

                //! because the page need a user interaction before firing it
                //_ document.onclick = () => inputs.click();

                inputs.click();
                const saveReader = new FileReader();
                inputs.onchange = ev => {
                    //file inputed
                    this.files = inputs.files[0]; //the first file inputed only
                    console.log(file);

                    //get the name and the ext of teh file
                    const fileName = ev.target.value.split('\\').pop();
                    console.log(fileName);

                    saveReader.readAsText(file, "UTF-8");
                    saveReader.onload = function (evt) {
                        console.log(evt.target.result);
                    };
                    saveReader.onerror = function (evt) {
                        console.log("error reading file");
                        console.log(evt);
                    };
                };
            }
        }

        // this.needsUpdate = false;
    }
    /**
     * @param {GameScope} scope 
     */
    update(scope) { return scope.state; }

    f() { this.needsUpdate = true; }
}