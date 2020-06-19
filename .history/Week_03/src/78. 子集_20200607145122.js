/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];

    dps(res, nums, [], 0);
    return res;


    function dps(res, nums, list, index){
        if(index === nums.length){
            res.push(list);
            return 
        }

        

    }

};

var nums = [1,2,3];

console.log(subsets(nums));