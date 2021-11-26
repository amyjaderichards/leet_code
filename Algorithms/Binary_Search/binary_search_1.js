const search = function(nums, target) {
    let left = 0;
    let right = (nums.length)-1;

    while (left <= right) {
        let pivot = left + (right - left)
        if (nums[pivot] === target) {
            return pivot;
        }
        if (target < nums[pivot]) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
    }
    return -1
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // index of 9 is 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // 2 doesn't exist so return -1