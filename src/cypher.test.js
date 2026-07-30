import { cypherShift } from './cypher.js';

const shiftedBythree =
  'XYZ .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVW';
const shiftByTen =
  'QRSTUVWXYZ .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOP';
test('Cypher shifts by three', () => {
  expect(
    cypherShift(
      ' .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      3
    )
  ).toBe(shiftedBythree);
});
test('Cypher shifts by ten', () => {
  expect(
    cypherShift(
      ' .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      10
    )
  ).toBe(shiftByTen);
});
