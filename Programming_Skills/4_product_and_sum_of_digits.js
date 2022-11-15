/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
*/

// 1st try -
var subtractProductAndSum = function(n) {
    let numArray = Array.from(String(n), Number);

    let sumOfDigits = numArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);

    let productOfDigits = numArray.reduce(
        (previousValue, currentValue) => previousValue * currentValue, 1);
    
    let difference = productOfDigits - sumOfDigits;

    return difference;
};

// Improvement -
var subtractProductAndSum = function(n) {
    const digits = Array.from(String(n), Number)
    const sum = digits.reduce((a,b) => a+b)
    const product = digits.reduce((a,b) => a*b)
    return product-sum
};

