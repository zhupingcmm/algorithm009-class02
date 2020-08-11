/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res =[];
    for(let i = 0; i< nums.length - k; i++){
        let max = nums[i];
        for(let j = i; j <= i + k; j++){
            console.log(max)
            max = Math.max(nums[j],max);
        }
        res.push(max);
    }

    console.log(res)
    return res;

};


maxSlidingWindow([1,3,-1,-3,5,3,6,7],3);