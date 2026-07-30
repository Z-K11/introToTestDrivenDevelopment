const cypherString =
  ' .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const cypherArray = [...cypherString];

export function cypherShifter(key) {
  let cyphered = cypherString;
  const length = cypherString.length;
  const shift = ((key % length) + length) % length;
  return cyphered.slice(length - shift) + cyphered.slice(0, length - shift);
}

export function cypher(string, key) {
  if (Number.isFinite(string)) string = String(string);
  const cypherArray = [...cypherString];
  let stringArray = [...string];
  stringArray.forEach((element) => {
    if (!cypherArray.includes(element))
      throw new Error('Character not included in cypher');
  });
  const shifter = cypherShifter(key);
  const result = stringArray.map((element) => {
    let index = shifter.indexOf(element);
    element = cypherArray[index];
    return element;
  });
  return result.join('');
}
export function decryptor(string, key) {
  return cypher(string, -key);
}
