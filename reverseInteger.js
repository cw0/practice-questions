//Reverse a given integer

const reverse = (integer) => {
  let answer = 0;
  
  const intArray = integer.toString().split('');
  while (intArray.length > 0 && intArray[intArray.length - 1] === '0') {
    intArray.pop();
  }
  
  if (intArray[0] === '-') {
    intArray.shift();
    intArray.reverse().unshift('-');
    answer = intArray.join('');
  } else {
    answer = intArray.reverse().join('');
  }  

  if (-(2**31) > Number(answer) | Number(answer) > (2**31 - 1)) return 0;
  return answer;
}

console.log(reverse(-123));

const reverseNoString = (integer) => {
  let output = 0;
  while (integer !== 0) {
    output = output * 10 + integer % 10;
    integer = parseInt(integer / 10);
  }

  if (-(2**31) > output | output > (2**31 -1)) return 0;

  return output;
}

console.log(reverseNoString(-123));