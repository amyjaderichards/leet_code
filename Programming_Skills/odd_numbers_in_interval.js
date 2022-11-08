/*
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
 

Example 1:
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

0 <= low <= high <= 10^9
*/

var countOdds = function(low, high) {
    let arr = [];
    for (let i = low; i <= high; i++) {
        arr.push(i);
    }

    return arr.filter(odd => odd % 2 == 1).length;
};

// I had a memory issue with the above solution when we got to the higher end of the constraints

// The below solution got around this
var countOdds = function(low, high) {
    return Math.floor((high - low)/2) + (low%2 || high%2 ? 1 : 0);
};