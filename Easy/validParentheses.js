// @input: string
// @output: boolean

// 1 - Create an object with closing brackets as keys and corresponding opening brackets as values. 
// *** Reason: Immediate Matching ***
// Immediate Matching Explanation: When iterating through the string, you encounter a mix of opening and closing brackets. By setting the closing brackets as keys, you can immediately check if a bracket is a closing one and, if so, what its matching opening bracket should be. This is much more efficient than iterating through each character without a direct reference.

// 2 - Initialize a variable with an empty array to act as a stack.

// 3 - Start a for loop to iterate over each character of the string.
    // Inside the loop:
    // a. Check if the current character is a closing bracket by checking if it's a key in the object.
        // i. If it is a closing bracket:
            // - Pop the top element from the stack (this should be the corresponding opening bracket if the string is balanced).
            // - Check if this top element matches the object's value for the current closing bracket.
            // - If it doesn't match or if the stack was empty (no corresponding opening bracket), return false.
        // ii. If it is not a closing bracket (hence, an opening bracket):
            // - Push the opening bracket onto the stack.

// Example: If the string starts with "(", it is not a key in the object, so we add it to the stack. If we encounter a ")", we check if the top of the stack is "(". If it is, we pop from the stack; if not, return false.

// 4 - After the loop, check if the stack is empty.
    // - An empty stack indicates that all opening brackets were matched with closing brackets, and the string is balanced.
    // - Return true if the stack is empty, false otherwise.



function isValid(s) {
    var stack = [];
    var bracketMapping = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (bracketMapping[char]) {
            var topElement = (stack.length === 0) ? '#' : stack.pop();
            if (topElement !== bracketMapping[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
console.log(isValid("()[}{}"))