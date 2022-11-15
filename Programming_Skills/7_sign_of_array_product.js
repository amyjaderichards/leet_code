/*
There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var arraySign = function(nums) {
    if (nums.includes(0)) {
        return 0;
    }
    let arraySum = nums.reduce((a, b) => a*b, 1);
    return (arraySum > 0) ? 1 : -1;
};