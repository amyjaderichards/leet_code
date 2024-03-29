/*
A sequence of numbers is called an arithmetic progression if the difference between 
any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an 
arithmetic progression. Otherwise, return false.

e.g.
Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 
respectively, between each consecutive elements.
*/

// 1st try - 
var canMakeArithmeticProgression = function(arr) {
    let sortedArray = arr.sort(function (a, b) {  return a - b;  });
    let differences = sortedArray.slice(1).map((x,i)=> x-sortedArray[i]);
    return differences.every((val, i, x) => val === x[0]);
};