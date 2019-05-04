//given a string of parenthesis characters, determine if they are valid
const isValid = (input) => {
  let openingChars = [];
  let isValidParenthesis = true;
  const canClose = (char) => {
    if (openingChars.length === 0) return false;

    let openChar = openingChars.pop();
    switch (char) {
      case ')': {
        if (openChar === '(') return true;
        break;
      }
      case '}': {
        if (openChar === '{') return true;
        break;
      }
      case ']': {
        if (openChar === '[') return true;
        break;
      }
      default: {
        return false;
      }
    }
    return false;
  }
  const checkCharacter = (char) => {
    switch (char) {
      case '(': 
      case '[':
      case '{': {
        openingChars.push(char);
        break;
      }
      default: {
        isValidParenthesis = canClose(char);
        break;
      }
    }
  };

  let charArray = input.split('');
  let i = 0;

  while (i < charArray.length && isValidParenthesis) {
    checkCharacter(charArray[i]);
    i++;
  }

  if (openingChars.length > 0) return false;

  return isValidParenthesis;
}

const isValidHash = (input) => {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let item of input.split('')) {
    if (map.hasOwnProperty(item)) {
      stack.push(item);
    } else {
      let previous = stack.pop();
      if (map[previous] !== item) {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return true;
}

console.log(isValidHash("()"));