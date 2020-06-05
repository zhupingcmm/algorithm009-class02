/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //
    let result = new Set();
    nums.sort((a,b)=>a-b);
    result.add
    for(let i =0; i<= nums.length -1; i++){
        console.log(Array.from(result));
        console.log("size::",result.size)
        if(result.size > k){
            break;
        }
       

        result.add(nums[i]);
    }
    // console.log(Array.from(result));
    return result;
};

let nums =  [1,1,1,2,2,3];
let k = 2;
topKFrequent(nums,k);