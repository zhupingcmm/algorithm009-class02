/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

      let i = 0;
      //循环遍历倒数K个节点，并且把这些节点添加到数组的头部
      while (i < k){
          let temp = nums.pop();
          nums.unshift(temp);
          i++;
      }
};

let nums =  [1,2,3,4,5,6,7];
let k = 3;

rotate(nums,k);