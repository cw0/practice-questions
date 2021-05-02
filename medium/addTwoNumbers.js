const recursionTime = (l1, l2, hasCarryOver) => {
  const sum = l1.val + l2.val + !!hasCarryOver;
  const remainder = sum % 10;
  hasCarryOver = sum > 9;
  const l3 = {
    val: hasCarryOver ? remainder : sum,
    next:
      l1.next || l2.next
        ? recursionTime(
            l1.next ? l1.next : { val: 0, next: null },
            l2.next ? l2.next : { val: 0, next: null },
            hasCarryOver
          )
        : hasCarryOver
        ? { val: 1, next: null }
        : null,
  };

  return l3;
};

const addTwoNumbers = (l1, l2) => {
  return recursionTime(l1, l2, false);
};

module.exports = addTwoNumbers;
