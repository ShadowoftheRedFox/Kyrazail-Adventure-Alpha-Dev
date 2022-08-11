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
                if (m.needsUpdate === true) m.render(scope);
                if (m.spawned === true) {
                    m.spawned = false;
                    TransitionEffectBuild(scope, m.transitionSpawnDuration);
                }
            }
        }
    };
}