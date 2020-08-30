/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    //字迹 sub = min(sub[i][j-1], sub[i-1][j]) + num[i][j]
    //dp =[m][n]
    //dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grip[i][j]

    let m = grid.length;
    let n = grid[0].length;

    let dp = Array(m).fill(Array(n).fill(0));

    for(let i =0; i< m; i++){
        for(let j =0; j< n; j++){
            if(i===0 && j===0){
                dp[i][j] = grid[i][j]
            }else if(i !== 0 && j !== 0){
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
            }else if(i === 0 && j !== 0){
                dp[i][j] = dp[i-1][j] + grid[i][j];
            }else if(i !== 0 && j === 0){
                dp[i][j] = dp[i][j-1] + grid[i][j];   
            }
        }
    }


    return dp[m][n];

};

