const romanToInt = (input) => {
  let answer = 0;

  if (input.match(/IV/)) {
    answer += 4;
    input = input.replace('IV', '');
  }

  if (input.match(/IX/)) {
    answer += 9;
    input = input.replace('IX', '');
  }

  if (input.match(/XL/)) {
    answer += 40;
    input = input.replace('XL', '');
  }

  if (input.match(/XC/)) {
    answer += 90;
    input = input.replace('XC', '');  
  }

  if (input.match(/CD/)) {
    answer += 400;
    input = input.replace('CD', '');
  }

  if (input.match(/CM/)) {
    answer += 900;
    input = input.replace('CM', '');
  }

  let i = input.length - input.replace(/I/g, '').length;
  let v = input.length - input.replace(/V/g, '').length;
  let x = input.length - input.replace(/X/g, '').length;
  let l = input.length - input.replace(/L/g, '').length;
  let c = input.length - input.replace(/C/g, '').length;
  let d = input.length - input.replace(/D/g, '').length;
  let m = input.length - input.replace(/M/g, '').length;

  answer = answer + (i * 1) + (v * 5) + (x * 10) + (l * 50) + (c * 100) + (d * 500) + (m * 1000);

  return answer;
}

console.log(romanToInt('MCIV'));