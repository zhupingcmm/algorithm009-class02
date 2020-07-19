/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //子问题:
    //状态数组: dp = [m][n]
    //dp方程: dp[i][j] = dp[i][j-1] + dp[i-1][j]

    let dp = Array(m).fill(Array(n).fill(1));
    console.log(dp);

    for(let i = 0; i<m; i++){
        for(let j =0; j < n; j++){
            //top
            const top = dp[i] && dp[i][j-1];

            //left 
            const left = dp[i-1] && dp[i-1][j];

            if(top=== null || left === null){
                continue;
            }

            dp[i][j] = left + top;

        }
    }

    return dp[m-1][n-1];
};

uniquePaths(5,3);