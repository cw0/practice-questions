const multiply = (number1, number2) => {
  if (number1 === '0' || number2 === '0') return '0';

  const number1Digits = number1.split('');
  const number2Digits = number2.split('');

  if (number1Digits.indexOf('-') !== -1 || number2Digits.indexOf('-') !== -1)
    throw new Error('Negative input not allowed');

  let answer = [];
  for (let i = number1Digits.length - 1; i >= 0; i--) {
    for (let j = number2Digits.length - 1; j >= 0; j--) {
      let product =
        number1Digits[i] * number2Digits[j] +
        (answer[i + j + 1] ? answer[i + j + 1] : 0);
      answer[i + j + 1] = product % 10;
      answer[i + j] = answer[i + j]
        ? answer[i + j] + ~~(product / 10)
        : ~~(product / 10);
    }
  }

  const stringAnswer = answer.join('').replace(/^0+/, '');
  return stringAnswer;
};

module.exports = multiply;
