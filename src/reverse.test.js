import { reverseString } from './reverse.js';
// testing if the function successfuly reverses a string
test('Reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
// convert the number into string and reverse it
test('Converts a number into string and reverses it ', () => {
  expect(reverseString(1234)).toBe('4321');
});
test('Checking against characters', () => {
  expect(reverseString('./$')).toBe('$/.');
});
