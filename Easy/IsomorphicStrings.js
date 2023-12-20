//@input : 2 strings 
//@output : Boolean
//----  Explanation 👇🏼
// Using a single map here might pass all the test cases from LeetCode.
// However, the problem with a single map becomes evident, for example, if s = "ab" and t = "cc".
// When I map s['a'] to c, since s['b'] does not exist in my map, b also gets the value c.
// This ensures that no two characters in s map to the same character in t, a necessary condition for isomorphism.
// ------------------- pseudocode 👇🏼
//- First, check if the lengths of s and t are unequal; if so, return false.
//- Initialize two objects: one for sToTMap and one for tToSMap
//- Initialize index with value 0
//- Start the while loop, while the index is less than the S length
//- Inside the while loop we make 2 variables one for sChar assign to s[index]
//- Create tChar and assign it to t[index]
//- In our if conditional, we check if sMap has the sChar key existed 
//- and sMap with the key sChar doesn't equal to tChar 
//- Or same for tMap as well if these conditionals are true we return false
//- Otherwise we assign tChar to sMap with the key sChar and tChar to the tMap.
//- add to index by one 
//- return true outside loop 
 var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let sToTMap = {}; // map for S to T
    let tToSMap = {};// map for T to S
    let index = 0;

    while (index < s.length) {
        const sChar = s[index];
        const tChar = t[index];

        // Check if there's a mapping established in sToTMap and tToSMap
        if ((sToTMap[sChar] && sToTMap[sChar] !== tChar) ||
            (tToSMap[tChar] && tToSMap[tChar] !== sChar)) {
            return false;
        }

        // Establish the mapping
        sToTMap[sChar] = tChar;
        tToSMap[tChar] = sChar;

        index++;
    }

    return true;
};