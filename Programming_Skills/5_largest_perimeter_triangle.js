/*
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, 
formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var compareFn = function(a, b){
    // Put larger element of the left hand side
    return b - a;    
}

var largestPerimeter = function(nums) {
    nums.sort( compareFn );
    
    for( let i = 0 ; i < nums.length-2 ; i++){
        if( nums[i] < ( nums[i+1] + nums[i+2]) ){
            
            // Accept: find the triangle with largest perimeter
            return ( nums[i] +  nums[i+1] + nums[i+2] )
        }
    }
    // Reject: impossible to make triangle
    return 0;
};