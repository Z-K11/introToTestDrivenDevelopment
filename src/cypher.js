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
  const cypherArray = [...cypherString];
  let stringArray = [...string];
  stringArray.forEach((element) => {
    if (!cypherArray.includes(element))
      throw new Error('Character not included in cypher');
  });
  const shifter = cypherShifter(key);
  console.log(shifter[0]);
  const result = stringArray.map((element) => {
    let index = shifter.indexOf(element);
    console.log(`Before = ${element}`);
    element = cypherArray[index];
    console.log(`After = ${element}`);
    return element;
  });
  return result.join('');
}
