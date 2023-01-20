/**
 * @author Markitanov Vadim
 * @since 20.01.2023
 */

const index = require('../index');

const sum = index.getSum;

test('Adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Adds1 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
})