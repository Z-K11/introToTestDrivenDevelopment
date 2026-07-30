import { cypherShifter } from './cypher.js';
import { cypher } from './cypher.js';

// const cypherString =
//   ' .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const shifterByThree =
  'XYZ .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVW';

test('Cypher Shifts by 3', () => {
  expect(cypherShifter(3)).toBe(shifterByThree);
});

test('String is cyphered', () => {
  expect(cypher('XYZ', 3)).toBe(' .,');
});
