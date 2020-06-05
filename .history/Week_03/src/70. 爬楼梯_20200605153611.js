/**
 * @param {number} n
 * @return {number}
 */
//这个题目主要是归纳总结的办法
// f(n) = f(n-1) + f(n-2)
var climbStairs = function(n) {
    let f1 = 1;
    let f2 = 2;
    let result;

    if(n === 1) return f1;
    if (n === 2) return f2;

    for(let i = 3; i< n; i++){
        result = f1 + f2
    }

    return result;

};