/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];
    let path = [];
    dfs(ans,path,0,nums)
    return ans;
};
const dfs = function(ans,path,start,nums) {
    if(path.length > nums.length) return;
    ans.push(path);
    for(let i = start; i < nums.length; i++) {
        path.push(nums[i]);
        dfs(ans,path.slice(),i+1,nums);
        path.pop()
    }
}


var nums = [1,2,3];
let result = subsets(nums);
console.log(result);