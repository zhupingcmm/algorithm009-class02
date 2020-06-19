/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    if(nums.length === 0 || nums === null) return result;
    dps(nums,result,[],0);
    return result;

    function dps(nums,result,temp,index){

        if(index === nums.length){
            result.push(temp);
            return;
        }

        for(let i = 0; i< nums.length; i++){
            c
            if(temp.includes(nums[i])) continue;
            dps(nums,result, temp.push(nums[i]),index+1);

            temp.pop()

        }
    }

};


let nums =[1,2,3];

console.log(permute(nums))