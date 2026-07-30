import { cypherShifter } from './cypher.js';
import { cypher } from './cypher.js';
import { decryptor } from './cypher.js';

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

//checking if we can decrypt cypher to get our original message

test('decryptor can decrypt cypher to show the original message', () => {
  expect(decryptor('1mfyafwja3tzaitnsld', 5)).toBe('what are you doing?');
});

//checking if decrypter can decrypt numbers

test('Decrypting numbers', () => {
  expect(decryptor(23456, 1)).toBe('12345');
});

//checking if decryptor can handle exception when input is not within cypher range

test('Input not within cypher range', () => {
  expect(() => decryptor('@{}', 3)).toThrow('Character not included in cypher');
});
