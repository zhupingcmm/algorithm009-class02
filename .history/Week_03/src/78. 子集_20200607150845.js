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

作者：fanzhanxiang
链接：https://leetcode-cn.com/problems/subsets/solution/zi-ji-by-fanzhanxiang/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var nums = [1,2,3];
let result = subsets(nums);
console.log(result);