// remove duplicates from a sorted array in line.
// do not assign another array and return the length of the unique array.
// elements set after the length of the unique array do not matter.
const removeDuplicates = (input) => {
  let current = null;
  let lastSortedIndex = 0;

  for (let i = 0; i < input.length; i++) {
    if (current === null || current !== input[i]) {
      current = input[i];
      input[lastSortedIndex] = input[i];
      lastSortedIndex++;
    }
  }

  return lastSortedIndex;
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
