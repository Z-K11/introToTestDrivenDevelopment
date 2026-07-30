import { cypherShifter } from './cypher.js';
import { cypher } from './cypher.js';

// const cypherString =
//   ' .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const shifterByThree =
  'XYZ .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVW';

// testing if the sypherShifter can shift by 3
test('Cypher Shifts by 3', () => {
  expect(cypherShifter(3)).toBe(shifterByThree);
});

// checking if cyper is working
test('String is cyphered', () => {
  expect(cypher('XYZ', 3)).toBe(' .,');
});

// checking if cypher working with a more complex string
test('String is cyphered', () => {
  expect(cypher('what are you doing?', 5)).toBe('1mfyafwja3tzaitnsld');
});

//checking for case, when string has a character that is not included in the cypher

test('string contains character not present in cypher', () => {
  expect(() => cypher('@{}', 3)).toThrow('Character not included in cypher');
});

//checking for case when input is a number not a string

test('Cypher encrypts number', () => {
  expect(cypher(12345, 1)).toBe('23456');
});
