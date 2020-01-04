const { permute } = require('../permutations');

describe('permutation tests:', () => {
  it('should work for arrays with one element', () => {
    const expected = [[1]];
    const result = permute([1]);
    expect(result).toStrictEqual(expected);
  });
  it('should work for arrays with 2 elements', () => {
    const expected = [[1, 2], [2, 1]];
    const result = permute([1, 2]);
    expect(result).toStrictEqual(expected);
  });
  it('should work for arrays with 3 elements', () => {
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
      [3, 1, 2],
    ];
    const result = permute([1, 2, 3]);
    expect(result).toStrictEqual(expected);
  });
});
