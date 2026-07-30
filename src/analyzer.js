export function analyzer(arr) {
  if (!Array.isArray(arr)) throw new Error('Arguement is not an array');
  arr.forEach((e) => {
    if (!Number.isFinite(e)) throw new Error('Array Elements are non numeric');
  });
  let average = 0;
  const length = arr.length;
  let max = arr[0];
  let min = arr[0];
  average = arr.reduce((result, currentVal) => result + currentVal, average);
  average /= length;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return {
    average,
    min,
    max,
    length,
  };
}
