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

        if(){
            result.push(temp);
        }


    }




};


let nums =[1,2,3];

console.log(permute(nums))