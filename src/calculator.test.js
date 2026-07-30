import { experiments } from 'webpack';
import { calculator } from './calculator.js';
// addition of two numbers

//Sum
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

//multiplication
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
//Subtraction of two numbers

//Subtraction
test('Check for subtract', () => {
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
test('Check subtraction for floating points', () => {
  expect(calculator.subtract(1.1, 1.2)).toBe(-0.1);
});
//Division of two numbers

//division
test('Check for division', () => {
  expect(calculator.divide(5, 5)).toBe(1);
});
// division of floating points
test('Check for division of floating point numbers', () => {
  expect(calculator.divide(2.2, 3)).toBe(0.7);
});
// throw error if input is not a number
test('Input is not a number', () => {
  expect(() => calculator.divide('a', 'b')).toThrow(
    'Error input must be a number'
  );
});
test('Input is not a character', () => {
  expect(() => calculator.divide('.', ';')).toThrow(
    'Error input must be a number'
  );
});
//check for division with zero
test('Division with zero', () => {
  expect(() => calculator.divide(10, 0)).toThrow('Division by zero');
});
//check 0 divided by something
test('0 divided by number', () => {
  expect(calculator.divide(0, 100)).toBe(0);
});
