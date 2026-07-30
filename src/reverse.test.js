import { reverseString } from './reverse.js';

test('Reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
