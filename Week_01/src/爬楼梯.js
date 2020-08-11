/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //最优子结构: sub_p = sub_p[i-1] + sub_p[i-2];
    //状态数组: dp = [];
    //dp方程: dp[i] = dp[i-1] + dp[i-2];

    if(n<=1) return n;
    let dp = [];

    dp[0] = 1;
    dp[1] = 1;
    for(let i =2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n];
};


