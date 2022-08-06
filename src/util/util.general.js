/// <reference path="../../ts/type.d.ts"/>
/**
 * Return current date in dd/mm/yyyy format.
 * @returns {string}
 * @example "19/05/2022"
 */
function getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //januar = 0
    let yyyy = today.getFullYear();

    switch (ConfigConst.LANGUAGE) {
        case "fr":
            return dd + '/' + mm + '/' + yyyy;
        default:
            return mm + '/' + dd + '/' + yyyy;
    }
}

/**
 * Return the exact date in dd/mm/yyyy hh:mm:ss format
 * @returns {string} exact date
 * @example '05/17/2012 10:52:21'
 */
function getExactDate() {
    var date = new Date();

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    switch (ConfigConst.LANGUAGE) {
        case "fr":
            return ([padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear(),].join('/') + ' ' + [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes()), padTo2Digits(date.getSeconds()),].join(':'));
        default:
            return ([padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear(),].join('/') + ' ' + [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes()), padTo2Digits(date.getSeconds()),].join(':'));
    }
}

/**
 * Remove any duplicate from the array, so it has every item once.
 * @param {any[]} a The array we want to remove duplicates.
 * @return {any[]} The array without the duplicates.
 */
function RemoveDuplicate(a) {
    return [...new Set(a)];
}

/**
 * Return a random element of the array.
 * Return null if array is empty.
 * @returns {any} An element of the array.
 */
Array.prototype.random = function () {
    if (this.length === 0) return null;
    return this[Math.floor(Math.random() * this.length)];
};