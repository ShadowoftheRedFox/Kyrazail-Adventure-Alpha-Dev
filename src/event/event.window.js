/// <reference path="../../ts/type.d.ts"/>

document.onfullscreenchange = window.onresize = resize;

function resize() {
    const $ = ConfigConst.MAINCONTAINER;
    regenerateAllCanvas($.offsetWidth, $.offsetHeight);
    console.log("a");
}