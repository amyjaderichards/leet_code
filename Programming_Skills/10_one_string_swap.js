/*
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string 
(not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. 
Otherwise, return false.

EXAMPLE
Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".

*/

const areAlmostEqual = (s1, s2) => {
    if (s1 === s2) return true;
    let res="";

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) res += s1[i]+s2[i];
    };

    return res.length === 4 && res[0]===res[3] && res[1]===res[2];
}