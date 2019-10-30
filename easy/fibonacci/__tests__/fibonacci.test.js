const { fibonacci, fibFast } = require('../fibonacci');

describe('when testing the fibonacci function:', () => {
  it('should return 0 for f(0)', () => {
    expect(fibonacci(0)).toBe(0);
  });
  it('should return 1 for f(1)', () => {
    expect(fibonacci(1)).toBe(1);
  });
  it('should return 1 for f(2)', () => {
    expect(fibonacci(2)).toBe(1);
  });
  it('should return 3 for f(3)', () => {
    expect(fibonacci(3)).toBe(2);
  });
  it('should return 34 for f(9)', () => {
    expect(fibonacci(9)).toBe(34);
  });
});

describe('when testing the fibonacci function:', () => {
  it('should return 0 for f(0)', () => {
    expect(fibFast(0)).toBe(0);
  });
  it('should return 1 for f(1)', () => {
    expect(fibFast(1)).toBe(1);
  });
  it('should return 1 for f(2)', () => {
    expect(fibFast(2)).toBe(1);
  });
  it('should return 3 for f(3)', () => {
    expect(fibFast(3)).toBe(2);
  });
  it('should return 34 for f(9)', () => {
    expect(fibFast(9)).toBe(34);
  });
});
