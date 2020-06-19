/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    if(nums.length === 0 || nums === null) return result;
    dps(nums,result,);
    return result;

    function dps(){

    }




};


let nums =[1,2,3];

console.log(permute(nums))