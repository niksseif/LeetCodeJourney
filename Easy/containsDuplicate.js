// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109



// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  Just by reading the prompt, and knowing I can use set for duplicates, 
// initialized a set passing array of nums to it, since set removes duplicates 
// than I return comparing set size to the length of the array. 
// if the size is not equal to nums length, it returns false
var containsDuplicate = function(nums) {
    let set = new Set(nums)
    return set.size !== nums.length
};