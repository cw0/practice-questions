const { rotateImage } = require('../rotateImage');

const oneByOneImage = [[1]];
const oneByOneImageSolution = [[1]];
const twoByTwoImage = [
  [1, 2],
  [3, 4],
];
const twoByTwoImageSolution = [
  [3, 1],
  [4, 2],
];

describe('it should rotate images 90 degrees', () => {
  it('should return the same image if 1x1', () => {
    const result = rotateImage(oneByOneImage);
    expect(result).toStrictEqual(oneByOneImageSolution);
  });
  it('should return the correct rotation for 2x2', () => {
    const result = rotateImage(twoByTwoImage);
    expect(result).toStrictEqual(twoByTwoImageSolution);
  });
});
