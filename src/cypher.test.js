import { cypherShift } from './cypher.js';

const shiftedBythree =
  'XYZ .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVW';
const shifterThreeArray = [...shiftedBythree];
const shiftByTen =
  'QRSTUVWXYZ .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOP';
const shifterTenArray = [...shiftByTen];
test('Cypher shifts by three', () => {
  expect(
    cypherShift(
      ' .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      3
    )
  ).toStrictEqual(shifterThreeArray);
});
test('Cypher shifts by ten', () => {
  expect(
    cypherShift(
      ' .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      10
    )
  ).toStrictEqual(shifterTenArray);
});
