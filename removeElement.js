// remove all instances from an array inline and return the length of the new array.
const removeElement = (input, value) => {
  let lastIndex = input.length - 1;
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === value) {
      count++;
      while (input[lastIndex] === value && lastIndex > 0) {
        lastIndex--;
      }
      input[i] = input[lastIndex];
      lastIndex--;
    }
  }

  return  input.length - count;
}

removeElement([1,1,2,3,4,1,1,4], 1);