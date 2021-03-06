/**
 * @description Internal helper to check if parameter is a string
 * @function isString
 * @param {*} str
 * @returns {boolean}
 */
const isString = (str) => {
    return (typeof str === 'string' || str instanceof String);
};

/**
 * @description Internal helper to check if string is empty
 * @function isStringEmpty
 * @param {*} str
 * @returns {boolean}
 */
const isStringEmpty = (str) => {
    if (!isString(str)) return false;
    return (str.length == 0);
};

/**
 * @description Internal helper to check if parameter is an object
 * @function isObject
 * @param {*} obj
 * @returns {boolean}
 */
const isObject = (obj) => {
    if (isArray(obj)) return false;
    return (obj !== null && typeof obj === 'object');
};

/**
 * @description Internal helper to check if parameter is an array
 * @function isArray
 * @param {*} arr
 * @returns {boolean}
 */
const isArray = (arr) => {
    return Array.isArray(arr);
};

/**
 * @description Internal helper to emit a warning to the console
 * @function _WARN_
 * @param {string} title
 * @param {string} detail
 * @returns {boolean}
 */
const _WARN_ = (title = '', detail = '') => {
    process.emitWarning(title, {
        detail,
        code: 'Coinlib',
    });

    return true;
};

//

module.exports = {
    isString,
    isStringEmpty,
    isObject,
    isArray,
    _WARN_,
};