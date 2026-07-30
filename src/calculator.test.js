import { calculator } from './calculator.js';
// addition of two numbers
test('Check for addition', () => {
  expect(calculator.sum(5, 6)).toBe(11);
});
// throw error if input is not a number
test('Input is not a number', () => {
  expect(() => calculator.sum('a', 'b')).toThrow('Input is not a number!');
});
// throw error if input is a char
test('Input is a character', () => {
  expect(() => calculator.sum('.', '/')).toThrow('Input is not a number!');
});
