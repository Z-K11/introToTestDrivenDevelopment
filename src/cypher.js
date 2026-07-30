const cypherString =
  ' .,?!abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const cypherArray = [...cypherString];
export function cypherShift(cypher, key) {
  let cypherArray = [...cypher];
  for (let i = 0; i < key; i++) {
    for (let j = 0; j < cypher.length + 1; j++) {
      cypherArray.unshift(cypherArray.pop());
    }
  }
  return cypherArray.join('');
}
