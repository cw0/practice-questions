const searchInsert = (input, value) => {
  let i = 0;
  while (input[i] < value) i++;
  return i;
}

console.log(searchInsert([1,2,3,5], 8));