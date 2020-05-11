const { strStr } = require('../strStr');

describe('when recieving a string and a substring...', () => {
  it('should return 0 if the length of haystack = 0', () => {
    expect(strStr('', '')).toStrictEqual(0);
  });
  it('should return 0 if the length of the haystack is less than the length of the needle', () => {
    expect(strStr('hey', 'longboy')).toStrictEqual(0);
  });
});
