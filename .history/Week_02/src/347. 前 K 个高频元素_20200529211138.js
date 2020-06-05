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
        // console.log(num)
        let val = objNums[num];
        console.log(val)
        if(val){
            objNums[num] = val + 1;
        }else{
            objNums[num] = 1;
        }
       
    }

    console.log(objNums);
    console.log(Object.keys(objNums))
    for(let key in Object.keys(objNums)){
        console.log("k::",key)
        if(objNums[key] >= k){
            result.push(k)
        }
    }

    console.log(result);
    return result;

};

let nums =  [1,1,1,2,2,3];
let k = 2;
topKFrequent(nums,k);