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

    return dd + '/' + mm + '/' + yyyy;
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

    return (
        [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-') +
        ' ' + [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
        ].join(':')
    );
}