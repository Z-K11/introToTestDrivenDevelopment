import { cypherShift } from './cypher.js';

const shiftedBythree =
  'XYZ .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVW';

test('Cypher shifts by three', () => {
  expect(
    cypherShift(
      ' .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      3
    )
  ).toBe(shiftedBythree);
});
