const swap = (numbers, i, j) => {
  const temp = numbers[i];
  numbers[i] = numbers[j];
  numbers[j] = temp;
};

const travel = (solution, numbers, startIndex, endIndex) => {
  if (startIndex === endIndex) {
    solution.push([...numbers]);
  } else {
    for (let i = startIndex; i <= endIndex; i += 1) {
      swap(numbers, startIndex, i);
      travel(solution, numbers, startIndex + 1, endIndex);
      swap(numbers, startIndex, i);
    }
  }
};

const permute = (numbers) => {
  if (numbers.length <= 1) return [numbers];
  const solutionSet = [];
  travel(solutionSet, numbers, 0, numbers.length - 1);

  return solutionSet;
};

module.exports = {
  permute,
};
