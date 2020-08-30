/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //子问题: sub_problem = Math.max(sub[i-1], sub[i-2] + num[i]);
    //状态数组: dp =[] dp[0] =0 dp[1] = num[0]
    //dp方程: dp[i] = Math.max(dp[i-1],dp[i-2]+ num[i])

    if (nums === null) return 0;
    let dp = [];
    dp[0] = 0;
    dp[1] = nums[0];
    for(let i = 2; i<= nums.length; i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+ nums[i-1]);
    }
    return dp[nums.length];

};