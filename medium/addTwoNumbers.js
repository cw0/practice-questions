const dive = (list, accumulator, decimalPlace) => {
  return list.next
    ? dive(list.next, accumulator + list.val * decimalPlace, decimalPlace * 10)
    : accumulator + list.val * decimalPlace;
};

const addTwoNumbers = (l1, l2) => {
  return dive(l1, 0, 1) + dive(l2, 0, 1);
};

module.exports = addTwoNumbers;
