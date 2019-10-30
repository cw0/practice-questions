const travel = (solutionSet, inputArray, currentIndex, length) => {
  const newArray = [...inputArray];
  if (currentIndex === length) solutionSet.add(newArray);
  for (let i = currentIndex; i < length; i += 1) {
    [newArray[currentIndex], newArray[i]] = [newArray[i], newArray[currentIndex]];
    travel(solutionSet, newArray, currentIndex + 1, length);
  }
};
const permute = (numbers) => {
  if (numbers.length <= 1) return [numbers];
  const solutionSet = new Set();
  travel(solutionSet, numbers, 0, numbers.length);
  return [...solutionSet];
};

module.exports = {
  permute,
};
