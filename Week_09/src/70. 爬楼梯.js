/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //子问题： sub(n) = sub(n-1) + sub(n-2)
    //状态数组：dp=[] dp[0] =0 dp[1] = 1
    //dp方程: dp[i] = dp[i-1] + dp[i-2]

    if (n<=1) return n; 

    let dp =[];
    dp[0] = 1;
    dp[1] = 1;

    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    console.log(dp[n])
    return dp[n];


};


climbStairs(6);