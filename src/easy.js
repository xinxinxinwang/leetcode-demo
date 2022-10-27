/**
 * Given an array of integers nums and an integer target,
     return indices of the two numbers such that they add up to target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums, target) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] = i;
    }
    for (var j = 0; j < nums.length; j++) {
        if (obj.hasOwnProperty(target - nums[j]) && obj[target - nums[j]] != j) {
            return [j, obj[target - nums[j]]];
        }
    }
};