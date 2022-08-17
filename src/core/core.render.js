/// <reference path="../../ts/type.d.ts"/>

/**
 * @param {GameScope} scope 
 * @returns {object}
 */
function GameRender(scope) {
    return function render() {

        var menus = scope.state.menu;
        //Loop through menu
        for (var menu in menus) {
            // Fire off each active menus `render` method
            const m = menus[menu];
            if (m.activated == true) {
                if (m.spawned === true && m.transitionSpawn) {
                    m.spawned = false;
                    TransitionEffectFade(scope, m.transitionSpawnDuration);
                    scope.cache.context[m.canvasGroup].fillStyle = "black";
                    scope.cache.context[m.canvasGroup].fillRect(0, 0, m.interfaceCanvas.width, m.interfaceCanvas.height);
                } else if (m.needsUpdate === true) m.render(scope);
            }
        }
    };
}