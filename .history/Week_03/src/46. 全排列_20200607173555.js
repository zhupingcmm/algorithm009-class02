/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    if(nums.length === 0 || nums === null) return result;
    dps(nums, result, [], 0);
    return result;

    function dps(nums,result,temp,index){

        if(index === nums.length){
            console.log("temp::",temp)
            result.push(temp);
            console.log(result)
            return;
        }

        for(let i = 0; i< nums.length; i++){
            // console.log(temp);
            if(temp.includes(nums[i])) continue;
            temp.push(nums[i]);
            dps(nums, result, temp, index+1);

            // console.log(temp)
            temp.pop();
        }
    }

};


let nums =[1,2,3];

console.log(permute(nums))