/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let max = [];
    if(nums.length === 0) return [];
    for (let i = 0; i <= nums.length -k; i++){
        let temp = nums.slice(i, k + i);
        max.push(Math.max(...temp));
    }
    return max;
};


let nums = [1,3,-1,-3,5,3,6,7], k=3;

maxSlidingWindow(nums,k);
