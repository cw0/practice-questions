const { climbStairs } = require('../climbingStairs');

describe('when testing climbStairs', () => {
  it('should return 1 when n=1', () => {
    expect(climbStairs(1)).toBe(1);
  });
  it('should return 2 when n=2', () => {
    expect(climbStairs(2)).toBe(2);
  });
  it('should return 3 when n=3', () => {
    expect(climbStairs(3)).toBe(3);
  });
  it('should return 5 when n=4', () => {
    expect(climbStairs(4)).toBe(5);
  });
  it('should return 8 when n=5', () => {
    expect(climbStairs(5)).toBe(8);
  });
  it('should work for n=35', () => {
    expect(climbStairs(35)).toBe(14930352);
  });
});
