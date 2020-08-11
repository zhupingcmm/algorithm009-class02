/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // let lastZeroAt = 0;

    //第一种: 从数组后面最后往前遍历
    //遇到是0的项，直接删除，然后在数组的最后加上一个0
    //如果不是0的项，直接跳过这次操作

    // for(let i = nums.length - 1; i >= 0; i--){
    //     if(nums[i] === 0){
    //         nums.splice(i,1);
    //         nums.push(0);
    //     }
    // }

    //第二种：遍历数组
    //取出所有的非0的数
    //记住0出现的最后一位
    let lastZeroAt = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[lastZeroAt++]  = nums[i];
        }
    }

    for(let i = lastZeroAt; i< nums.length; i++){
        nums[i] = 0;
    }
    return nums;
};


moveZeroes([0,1,0,3,12])