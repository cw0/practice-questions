const multiply = require('../multiplyStrings');

describe('multiply strings tests', () => {
  it('should return 0 if any input is 0', () => {
    expect(multiply('100', '0')).toBe('0');
    expect(multiply('0', '100')).toBe('0');
  });
  it('should throw an exception for negative inputs', () => {
    expect(() => multiply('-1', '1')).toThrow('Negative input not allowed');
  });
  it('should multiply correctly', () => {
    expect(multiply('1', '1')).toBe('1');
    expect(multiply('123', '456')).toBe('56088');
    expect(multiply('123456789', '987654321')).toBe('121932631112635269');
  });
});
