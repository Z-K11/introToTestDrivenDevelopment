export function reverseString(string) {
  if (Number.isFinite(string)) {
    string = String(string);
  }
  let reversed = [];
  for (let j = string.length - 1; j >= 0; j--) {
    reversed.push(string[j]);
  }
  return reversed.join('');
}
