import { experiments } from 'webpack';
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
// addition for floating points
test('Check addition for floating points', () => {
  expect(calculator.sum(1.1, 1.2)).toBe(2.3);
});
// multiplication of two numbers
test('Check for multiplication', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});
// multiplication of floating points
test('Check for multiplication of floating point numbers', () => {
  expect(calculator.multiply(2.2, 3)).toBe(6.6);
});
// throw error if input is not a number
test('Input is not a number', () => {
  expect(() => calculator.multiply('a', 'b')).toThrow(
    'Error input must be a number'
  );
});
test('Input is not a character', () => {
  expect(() => calculator.multiply('.', ';')).toThrow(
    'Error input must be a number'
  );
});
test('Check for addition', () => {
  expect(calculator.subtract(5, 6)).toBe(-1);
});
// throw error if input is not a number
test('Input is not a number', () => {
  expect(() => calculator.subtract('a', 'b')).toThrow('Input is not a number!');
});
// throw error if input is a char
test('Input is a character', () => {
  expect(() => calculator.subtract('.', '/')).toThrow('Input is not a number!');
});
// addition for floating points
test('Check addition for floating points', () => {
  expect(calculator.subtract(1.1, 1.2)).toBe(-0.1);
});
