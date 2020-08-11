/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    let res = [];
    nums.sort((a,b)=>a-b);
    console.log(nums)
    for(let i = 0;i <= nums.length - 2; i++){
        let left= i+1;
        let right = nums.length - 1;
        
        while(left < right){
            if(nums[i] + nums[left] + nums[right] === 0){
                let tmp = [];
                tmp.push(nums[i],nums[left],nums[right]);
                res.push(tmp);
                right = right -1;
            }else if(nums[i] + nums[left] + nums[right] > 0){
                right = right -1;
            }else{
                left = left + 1;
            }
        }
    }

    console.log(res)

    return res;
};

threeSum([-1, 0, 1, 2, -1, -4]);