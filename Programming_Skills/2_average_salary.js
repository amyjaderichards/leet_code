/*
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

 
Example :
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
*/

/**
 * @param {number[]} salary
 * @return {number}
 */
 const average = function(salary) {
    // Sorting the array & removing first and last element
    let sortedSalary = salary.sort(function(a, b){return a - b}).slice(1, -1);    

    // Calculating average using reduce function
    let averageSalary = sortedSalary.reduce((a, b) => a + b, 0) / sortedSalary.length;

    return averageSalary;
};