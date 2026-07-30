const cypherString =
  ' .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const cypherArray = [...cypherString];

export function cypherShifter(key) {
  let cyphered = [...cypherString];
  for (let i = 0; i < key; i++) {
    for (let j = 0; j < cypherString.length + 1; j++) {
      cyphered.unshift(cyphered.pop());
    }
  }
  return cyphered.join('');
}

export function cypher(string, key) {
  const cypherArray = [...cypherString];
  let stringArray = [...string];
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
