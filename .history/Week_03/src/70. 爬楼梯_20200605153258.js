/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let f1 = 1;
    let f2 = 2;
    let result = 0;

    if(n <=1) return f1;
    if(n <=2) return f2;

    for(let i = 3; i <= n; i++){
        result = f1 + f2;
        f1 = f2;
        f2 = result;
    }
    return result;

};