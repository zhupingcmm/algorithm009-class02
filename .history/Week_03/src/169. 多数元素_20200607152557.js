/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let  majority = nums.length / 2;
    let objMap = {};
    let res

    for(let i = 0; i<= nums -1; i++){
        if(!objMap[nums[i]]){
            objMap[nums[i]] = 1;
        }else{
            if(objMap[nums[i]] >= majority){

            }
            objMap[nums[i]] = objMap[nums[i]] + 1;
        }

    }

};

let nums = [2,2,1,1,1,2,2];

majorityElement(nums);