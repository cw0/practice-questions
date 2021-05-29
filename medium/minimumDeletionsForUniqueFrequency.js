const minDeletions = (string) => {
  const characterDictionary = {};
  const frequencyDictionary = {};
  const duplicateDictionary = {};
  const characters = string.split('');
  let count = 0;

  for (let i = 0; i < characters.length; i++) {
    characterDictionary[characters[i]]
      ? characterDictionary[characters[i]]++
      : 1;
  }

  const characterKeys = Object.keys(characterDictionary);

  for (let i = 0; i < characterKeys.length; i++) {
    const char = characterKeys[i];
    const freq = characterDictionary[char];
    if (!frequencyDictionary[freq]) {
      frequencyDictionary[freq] = char;
    } else {
      if (!duplicateDictionary[freq]) {
        duplicateDictionary[freq] = [char];
      } else {
        duplicateDictionary[freq].push(char);
      }
    }
  }

  // sort frequency keys
  // for each duplicate find the nearest gap
};

module.exports = minDeletions;
