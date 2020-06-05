/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    //对数组进行排序    
    arr.sort((a,b)=>a-b);
    //截取从第0位到第k位的数，形成一个新的数组
    let newArr = arr.splice(0,k);
    //返回新的数组
    return newArr;
};