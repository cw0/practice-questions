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

    expect(result).toStrictEqual({
      val: 3,
      next: null,
    });
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
    expect(addTwoNumbers(l1, l2)).toStrictEqual({
      val: 4,
      next: {
        val: 4,
        next: {
          val: 4,
          next: null,
        },
      },
    });
  });

  it('should work for tricky digits that equal exactly 10 when added', () => {
    const l1 = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
        },
      },
    };
    const l2 = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
        },
      },
    };
    expect(addTwoNumbers(l1, l2)).toStrictEqual({
      val: 7,
      next: {
        val: 0,
        next: {
          val: 8,
          next: null,
        },
      },
    });
  });

  it('should work for really big mismatched sizes', () => {
    const l1 = {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: {
                val: 9,
                next: {
                  val: 9,
                  next: null,
                },
              },
            },
          },
        },
      },
    };
    const l2 = {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: null,
          },
        },
      },
    };
    expect(addTwoNumbers(l1, l2)).toStrictEqual({
      val: 8,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 1,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    });
  });
});
