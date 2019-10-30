const {
  climbStairsRecursively,
  climbStairsTab,
} = require('../climbingStairs');

describe('when testing climbStairs', () => {
  it('should return 1 when n=1', () => {
    expect(climbStairsRecursively(1)).toBe(1);
  });
  it('should return 2 when n=2', () => {
    expect(climbStairsRecursively(2)).toBe(2);
  });
  it('should return 3 when n=3', () => {
    expect(climbStairsRecursively(3)).toBe(3);
  });
  it('should return 5 when n=4', () => {
    expect(climbStairsRecursively(4)).toBe(5);
  });
  it('should return 8 when n=5', () => {
    expect(climbStairsRecursively(5)).toBe(8);
  });
  it('should work for n=35', () => {
    expect(climbStairsRecursively(35)).toBe(14930352);
  });
});

describe('when testing climbStairsTab', () => {
  it('should return 1 when n=1', () => {
    expect(climbStairsTab(1)).toBe(1);
  });
  it('should return 2 when n=2', () => {
    expect(climbStairsTab(2)).toBe(2);
  });
  it('should return 3 when n=3', () => {
    expect(climbStairsTab(3)).toBe(3);
  });
  it('should return 5 when n=4', () => {
    expect(climbStairsTab(4)).toBe(5);
  });
  it('should return 8 when n=5', () => {
    expect(climbStairsTab(5)).toBe(8);
  });
  it('should work for n=35', () => {
    expect(climbStairsTab(35)).toBe(14930352);
  });
});
