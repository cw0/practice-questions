const minDeletions = (string) => {
  const characterDictionary = {};
  const frequencyDictionary = {};
  const characters = string.split('');
  let count = 0;

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    if (!characterDictionary[char]) {
      characterDictionary[char] = 1;
    } else {
      characterDictionary[char] += 1;
    }
  }

  const characterKeys = Object.keys(characterDictionary);

  for (let i = 0; i < characterKeys.length; i++) {
    const char = characterKeys[i];
    const freq = characterDictionary[char];
    if (!frequencyDictionary[freq]) {
      frequencyDictionary[freq] = [char];
    } else {
      frequencyDictionary[freq].push(char);
    }
  }

  Object.keys(frequencyDictionary).forEach((key) => {
    if (frequencyDictionary[key].length > 1) {
      let duplicates = frequencyDictionary[key].length;
      let nextLowestFreq = key - 1;

      while (duplicates > 1) {
        if (nextLowestFreq <= 0) {
          duplicates -= 1;
          count += ~~key;
        } else {
          if (!frequencyDictionary[nextLowestFreq]) {
            frequencyDictionary[nextLowestFreq] = [
              frequencyDictionary[key].pop(),
            ];
            duplicates -= 1;
            count += key - nextLowestFreq;
          }
          nextLowestFreq -= 1;
        }
      }
    }
  });

  return count;
};

module.exports = minDeletions;
