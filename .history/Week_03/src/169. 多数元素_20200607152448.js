/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let  majority = nums.length / 2;
    let result = {};

    for(let i = 0; i<= nums -1; i++){
        if(!result[nums[i]]){
            result[nums[i]] = 1;
        }else{
            if(result[nums[i]] >){

            }
            result[nums[i]] = result[nums[i]] + 1;
        }

    }

};

let nums = [2,2,1,1,1,2,2];

majorityElement(nums);