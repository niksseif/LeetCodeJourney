// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// s consists of English letters, digits, symbols and spaces.

//--------
// the first thing comes to my mind after seeing no repeat is using set, as I know I can't have duplicates in a set. 
// looking at this prompt I see that I need find some sort of subrange in the string. so I think using sliding window technique would be a good idea. 

// @input : string
// @output : number 
// 1. Initialize three variables:
//    - Create a Set to store unique characters.
//    - Initialize 'left' with a value of 0.
//    - Initialize 'maxSize' with a value of 0.

// 2. Start a for loop:
//    - Within the for loop, perform the following actions:

//      a. Check if the set contains the current character (s[i]) using while loop.
//         - If it does, remove the character at the 'left' index from the set and increment 'left'.
//         - Otherwise, if it doesn't contain s[i], add s[i] to the set.

//      b. Update 'maxSize':
//         - Assign to 'maxSize' the larger value between the current 'maxSize' and the size of the set.

// 3. After completing the loop, return 'maxSize' as the output.

function lengthOfLongestSubstring(s){
    let set = new Set();
    let left = 0; 
    let maxSize = 0
    for(let i = 0; i < s.length; i++ ){
        while(set.has(s[i])){
            set.delete(s[left])
            left++
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, set.size)
    }
    return maxSize 
}
console.log(lengthOfLongestSubstring("abcabcbb"));