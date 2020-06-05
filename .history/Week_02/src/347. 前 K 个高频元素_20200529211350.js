/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //
    let result = [];
    //定义一个map 对象 存储 元素和元素出现的次数
    let objNums = {};

    for(let num of nums){
        let val = objNums[num];
        console.log(val)
        if(val){
            objNums[num] = val + 1;
        }else{
            objNums[num] = 1;
        }
       
    }
    for(let key of Object.keys(objNums)){
        console.log("k::",key)
        if(objNums[key] >= k){
            result.push(key)
        }
    }

    console.log(result)

    return result;
};

let nums =  [1,2];
let k = 2;
topKFrequent(nums,k);