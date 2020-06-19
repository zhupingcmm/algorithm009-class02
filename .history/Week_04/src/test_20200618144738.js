/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    nums.sort((a,b)=>a-b);
    console.log(nums);
    for(let i = 0; i< nums.length -4; i++){
        for(let k = i+1; k <nums.length -3;k++){
            let size = nums.length;
            let frist = k + 1;
            let last = size -1;
            while(frist < last){
                if(target === nums[i] + nums[]){

                }
            } 
        }
    }

};


let nums =  [1, 0, -1, 0, -2, 2];
fourSum(nums,0);