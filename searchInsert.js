//given a sorted array and a target value, find the index of the value if it
//exists in the array or the index of where it would be inserted
//protip: turns out its the same index either way.

const searchInsert = (input, value) => {
  let i = 0;
  while (input[i] < value) i++; //undefined < value
  return i;
}

console.log(searchInsert([1,2,3,5], 8));