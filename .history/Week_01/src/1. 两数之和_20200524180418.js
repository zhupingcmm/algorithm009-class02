/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let res = [];
    let obj = {};

    for (let key in nums){
        // console.log(key);
        let index = obj[target - nums[key]];
        if(index){
            res.push(index,key);
            break;
        }
        obj[nums[key]] = key;
    }
    return res;
};

let nums = [3,3], target =6;

twoSum(nums,target);