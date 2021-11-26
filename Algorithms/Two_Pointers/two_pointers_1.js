const sortedSquares = function(nums) {
    const output = [];
    
    // define pointers
    let left = 0;
    let right = A.length - 1;

    // index in output array we will add values
    let i = right;
    while (left <= right) {
        // get squared values
        const leftVal = Math.pow(nums[left], 2);
        const rightVal = Math.pow(nums[right], 2);

        // compare squared values
        if (leftVal > rightVal) {
            // add element to output[i], then subtract 1 from i
            // move pointer closer to the opposite side
            output[i--] = leftVal;
            left ++;
        } else {
            output[i--] = rightVal;
            right--;
        }
    }
    return output;
}