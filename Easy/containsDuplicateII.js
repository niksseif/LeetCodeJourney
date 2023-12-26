// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
//---------------- Pseudocode 👇🏼

// Input: Array of integers 'nums'
// Output: Boolean value

// Initialize two variables, 'start' and 'end', both set to 0, to define the sliding window.
// Create a new set 'seen' to track the elements within the current window.

// Begin a while loop where 'end' is less than the length of the array 'nums'.
  // If 'nums[end]' is already present in the 'seen' set, return true.
  // Otherwise, add 'nums[end]' to the 'seen' set.

  // In a conditional statement, check if 'end - start' is greater than or equal to 'k'.
    // If true, remove 'nums[start]' from the 'seen' set and increment 'start' by 1.

  // Increment 'end' by 1 at the end of each loop iteration.

// If the loop completes without returning true, return false.



const containsNearByDuplicate = (nums, k) => {
    let start = 0;
    let end = 0; 
    let seen = new Set()
    while(end < nums.length){
        if(seen.has(nums[end])){
            return true
        }
        seen.add(nums[end]);
        if(end-start >= k){
            seen.delete(nums[start])
            start++
        }
        end++
    }
    return false
}
console.log(containsNearByDuplicate([1,2,3,1], 3))
console.log(containsNearByDuplicate([1,0,1,1], 1))
console.log(containsNearByDuplicate([1,2,3,1,2,3], 2))