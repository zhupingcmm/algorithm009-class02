/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //定义一个map 对象 存储 元素和元素出现的次数
    let objNums = {};

    for(let num of nums){
        let val = objNums[num];
        if(val){
            objNums[num] = val++
        }
        objNums[num] = 1;

    }

};

let nums =  [1,1,1,2,2,3];
let k = 2;
topKFrequent(nums,k);