const fibonacci = (number) => {
  if (number === 0) return 0;
  if (number === 1) return 1;
  return fibonacci(number - 2) + fibonacci(number - 1);
};

const fibFast = (number) => {
  if (number === 0) return 0;
  if (number === 1) return 1;
  const fibSequence = [0, 1];
  for (let i = 2; i <= number; i += 1) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
  }
  return fibSequence[number];
};

module.exports = {
  fibonacci,
  fibFast,
};
