/**
 * @author Markitanov Vadim
 * @since 21.01.2023
 */

const nativeNull = () => null;

/**
 * Function get sum numbers
 * @param a {Number} first number
 * @param b {Number} second number
 * @returns {Number} sum numbers
 */
const getSum = (a, b) => {
    return a + b;
}

module.exports = {
    getSum,
    nativeNull
}