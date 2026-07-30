import { ExternalsPlugin } from 'webpack';
import { reverseString } from './reverse.js';

test('Reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Converts a number into string and reverses it ', () => {
  expect(reverseString(1234)).toBe('4321');
});
