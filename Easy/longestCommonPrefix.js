// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// strs[i] consists of only lowercase English letters.

// @input : array of strings
// @output : string with the longest common prefix
// Here I need to use the first word as my prefix and compare it with the rest of items in the array
// Initiate a variable call prefix with  the first word of the array as it's value 
// The forloop starts from the second element
// Use While loop to trim the prefix, until it matched the start of the current string. 
// after we are done if the prefix becomes an empty string, the function returns an empty prefix

var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return ""
    }
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++){
        while( strs[i].indexOf(prefix) != 0){ // this will check if the current prefix is at the start of the string. if it's not the last char of prefix is removed.

            prefix = prefix.substring(0, prefix.length-1)
            if(prefix.length === 0){
                return "";
            }
        }
    }
    return prefix; 
}
console.log(longestCommonPrefix(["flower","flow","flight"]))