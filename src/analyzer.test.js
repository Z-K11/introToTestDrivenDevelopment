import { analyzer } from './analyzer.js';
const anaylyzerAns = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

//checking if function returns processed object

test('analyzer returns processed object', () => {
  expect(analyzer([1, 8, 3, 4, 2, 6])).toMatchObject(anaylyzerAns);
});
//arguement is a number
test('Check for when arguement is not an array', () => {
  expect(() => analyzer(10004324)).toThrow('Arguement is not an array');
});
//arguement is a string
test('Check for when arguement is not an array', () => {
  expect(() => analyzer('abv')).toThrow('Arguement is not an array');
});
//arguement is a boolean
test('Check for when arguement is not an array', () => {
  expect(() => analyzer(false)).toThrow('Arguement is not an array');
});
//argument is an array or non numerical data

test('Array of non numbers', () => {
  expect(() => analyzer(['a', 1, 'b', 'c', 0])).toThrow(
    'Array Elements are non numeric'
  );
});
