/**
 * @author Markitanov Vadim
 * @since 20.01.2023
 */

const {getSum, nativeNull} = require('../src/common');

describe('Sum function:', () => {
    test('1 + 2 = 3', () => {
        expect(getSum(1, 2)).toBe(3);
        expect(getSum(1, 2)).toEqual(3);
    });

    test('0.1 + 0.2 = 0.3', () => {
        expect(getSum(0.1, 0.2)).toBeCloseTo(0.3);
    })
});

describe('Native null function:', () => {
    test('Check null', () => {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy(); // undefined, null, 0, ''
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy();
        expect(nativeNull()).not.toBeUndefined();
    });
});