/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // console.log(nums);
    let  majority = nums.length / 2;
    // console.log(majority);
    let objMap = {};
    let result = [];

    for(let i = 0; i<= nums.length -1; i++){
        if(!objMap[nums[i]]){
            console.log(nums[i])
            objMap[nums[i]] = 1;
        }else{
            // console.log(nums[i])

            objMap[nums[i]] = objMap[nums[i]] + 1;
        }

    }

    console.log("map::",objMap);
    for(let key in objMap){
        if(objMap[key] >= majority){
            result.push(key);
        }
    }
    console.log("res::::",result)
    return result;
};

let nums = [3,2,3];

console.log(majorityElement(nums));