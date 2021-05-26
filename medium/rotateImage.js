const rotateImage = (image) => {
  let rotatedImage = [];
  let l = image.length - 1;
  for (let i = 0; i < image.length; i++) {
    let k = 0;
    for (let j = 0; j < image[i].length; j++) {
      if (!rotatedImage[k]) rotatedImage[k] = [];
      rotatedImage[k][l] = image[i][j];
      k += 1;
    }
    l -= 1;
  }
  return rotatedImage;
};

module.exports = {
  rotateImage,
};
