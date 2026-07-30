import { capitalize } from './capitalize.js';

// testing capitalize function
// function should take a string and then convert the first character of that string to upperCase
test('Capitalize first letter of the word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

//2nd Case checking if first letter of first word of a sentence is capitalized
test('Capitalize first letter of first word of a sentence', () => {
  expect(capitalize('what is your name')).toBe('What is your name');
});

//3rd case already capitalized word doesn't cause unexpected behavior
test('No unexpected behavior upon alread capitalized word', () => {
  expect(capitalize('Bromine')).toBe('Bromine');
});

//user passed a number instead of a string
test('Passing a number should throw an error', () => {
  expect(() => capitalize(11)).toThrow('Not a string!');
});

test('Passing a character should throw an error', () => {
  expect(() => capitalize('.')).toThrow('Not a string!');
});
