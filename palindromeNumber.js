// determine whether an integer is a palindrome

const isPalindrome = (x) => {
  let reverse = 0;
  const original = x;

  if (x < 0) return false;

  while (x !== 0) {
    reverse = reverse * 10 + x % 10;
    x = parseInt(x/10);
  }

  if (original === reverse) return true;
  return false;
}

console.log(isPalindrome(12321));