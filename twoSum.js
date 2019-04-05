/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var originalIndex = nums.length - 1;
  var trial = nums.pop();
      
  for (var i = 0; i < nums.length; i++) {
      if (trial + nums[i] === target) {
          return [i, originalIndex];
      }
  }    

  return twoSum(nums, target);
};

console.log(twoSum([2,7,11,15], 9));

const twoSumMap = (nums, target) => {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const existingEntry = numsMap.get(target - nums[i]);
    if (typeof existingEntry !== 'undefined') {
      return [existingEntry, i];
    }
    numsMap.set(nums[i], i);    
  }
}

console.log(twoSumMap([3,3], 6));

const twoSumBestMap = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (typeof map[target - nums[i]] !== 'undefined') {
      return [map[target - nums[i]], i];
    }

    map[nums[i]] = i;
  }
}

console.log(twoSumBestMap([3,3], 6));