const minDeletions = require('../minimumDeletionsForUniqueFrequency');

describe('minDelete tests', () => {
  it('should correctly remove with the minimum move count', () => {
    expect(minDeletions('aabb')).toBe(1);
    expect(minDeletions('aab')).toBe(0);
    expect(minDeletions('abcabc')).toBe(3);
    expect(minDeletions('adec')).toBe(3);
    expect(minDeletions('aaabbbcc')).toBe(2);
    expect(minDeletions('ceabaacb')).toBe(2);
  });
});
