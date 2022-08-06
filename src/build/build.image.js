/// <reference path="../../ts/type.d.ts"/>

/**
 * 
 * @param {string[]} imageArray 
 * @param {()=>{}} callback 
 */
function GameLoadImage(imageArray, callback) {
    if (!imageArray) throw new ReferenceError("You must pass an array.");
    if (!Array.isArray(imageArray)) throw new TypeError("The imageArray must be a string array.");
    if (callback && typeof callback != "function") throw new TypeError("Callback must be a function");

    if (imageArray.length == 0) return callback();
    var imagesLeftToLoad = imageArray.length;

    imageArray.forEach(image => {
        if (window.game.cache.image[image]) console.log(`${image} is already loaded`);
        else {
            const i = new Image();
            i.onerror = function () {
                imagesLeftToLoad--;
                console.warn(`${i.src} failed`);
            };
            i.onload = function () {
                imagesLeftToLoad--;
                window.game.cache.image[image] = GameLoadImage.structure(i, image);
            };
            i.src = window.game.constants.href + "/" + image + ".png";
        }
    });
}

/**
 * 
 * @param {HTMLImageElement} image 
 * @param {string} n
 * @return {{}}
 */
GameLoadImage.structure = function (image, n) {
    const folder = n.split("/")[0],
        name = n.split("/")[1];
};