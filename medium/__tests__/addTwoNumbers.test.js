const addTwoNumbers = require('../addTwoNumbers');

describe('addTwoNumbersTests', () => {
  it('should correctly add single node lists', () => {
    const l1 = {
      val: 1,
    };
    const l2 = {
      val: 2,
    };
    const result = addTwoNumbers(l1, l2);

    expect(result).toBe(3);
  });
  it('should correctly add multi node lists', () => {
    const l1 = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
        },
      },
    };
    const l2 = {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 1,
        },
      },
    };
    expect(addTwoNumbers(l1, l2)).toBe(444);
  });
});
