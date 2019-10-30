const climbStairs = (n) => {
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


module.exports = {
  climbStairs,
};
