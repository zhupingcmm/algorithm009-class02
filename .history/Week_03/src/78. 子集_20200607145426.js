/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    console.log
    let res = [];

    dps(res, nums, [], 0);
    return res;


    function dps(res, nums, list, index){
        if(index === nums.length){
            res.push(list);
            return 
        }

        //
        dps(res, nums, list, index+1);

        list.push(nums[index]);
        dps(res, nums, list, index + 1);

        //
        list = [];

    }

};

var nums = [1,2,3];
let result = subsets(nums);
console.log(result);