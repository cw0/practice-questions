const climbStairsRecursively = (n) => {
  if (n === 1) return 1;
  let permutations = 0;

  const climb = (max, currentStair) => {
    if (max === currentStair) {
      permutations += 1;
      return;
    }
    if (max - currentStair >= 2) {
      climb(max, currentStair + 2);
    }
    climb(max, currentStair + 1);
  };

  climb(n, 0);

  return permutations;
};

const climbStairsTab = (n) => {
  if (n === 1) return 1;

  const permutations = [1, 1];

  for (let i = 2; i <= n; i += 1) {
    permutations[i] = permutations[i - 1] + permutations[i - 2];
  }

  return permutations[n];
};

module.exports = {
  climbStairsRecursively,
  climbStairsTab,
};
