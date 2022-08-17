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

        this.needsUpdate = false;
    }
    /**
     * @param {GameScope} scope 
     */
    update(scope) { return scope.state; }

    f() { this.needsUpdate = true; }
}