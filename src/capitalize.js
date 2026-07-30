export function capitalize(string) {
  const checker = /^[a-zA-Z]+( [a-zA-z]+)*$/;
  if (!checker.test(string)) throw new Error('Not a string!');
  //check if the first letter is already uppercase
  if ([...string][0].toUpperCase() === string[0]) return string;
  //converting string to array
  let stringArray = [...string];
  // replacing first letter with the upperCase version of that letter .splice(indexForInsertion,HowManyIndicesToReplace,ReplaceWithWhat)
  stringArray.splice(0, 1, stringArray[0].toUpperCase());
  return stringArray.join('');
}
