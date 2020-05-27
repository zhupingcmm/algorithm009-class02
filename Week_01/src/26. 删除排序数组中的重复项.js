/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i =0;
    while (i<nums.length){
        //判断当前的item 和下一个item是否相等

        //如果不相等啥事情都不做，往下一个item循环
        if(nums[i] !== nums[i+1]){
            i++;
        }else {
            //如果相等啥事情都不做，删除下一个节点
            nums.splice(i+1,1);
        }
    }

    return nums.length;
};

let nums = [0,0,1,1,1,2,2,3,3,4];

const length = removeDuplicates(nums);

console.log(length);