/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res =[];
    _generater(0,0,"");

    return res;

    function _generater(left, right, s){

        if(left == n && right == n){
            res.push(s);
            return;
        }

        if(left < n){
            _generater(left + 1, right, s + "(");
        }

        if(left > right){
            _generater(left, right + 1, s + ")");
        }
    }
};
let abc = generateParenthesis(3)

console.log(abc);