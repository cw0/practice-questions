// find the longest common prefix given an array of strings
const longestCommonPrefix = (input) => {
  if (input.length === 0) return '';
  if (input.length === 1) return input[0];

  const size = input.length;
  const prefixes = [];
  let shortest = Number.MAX_VALUE;

  for (let word of input) {
    if (word === '') return '';
    
    const letterArray = word.split('');
    if (letterArray.length < shortest) {
      shortest = letterArray.length;
    }

    letterArray.map((letter, index) => {
      prefixes[index] ? prefixes[index].push(letter) : prefixes[index] = [letter];
    });
  }

  let prefix = '';

  for (let i = 0; i < shortest; i++) {
    if (prefixes[i].reduce((a,b) => {
      return a === b ? a : NaN;
    })) {
      prefix = prefix + prefixes[i][0];
    } else {
      return prefix;
    }
  }

  return prefix;
}

longestCommonPrefix(['c', 'c']);

//console.log(longestCommonPrefix(["c","c"]));
