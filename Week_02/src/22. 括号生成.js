/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res =[];

    _generate(0, 0, n, "");
    return res;

    function _generate(left, right, n, s){
        if(left == n && right == n){
            res.push(s);
            return;
        }

        if(left < n){
            _generate(left + 1, right, n, s +"(");
        }

        if(left > right){
            _generate(left, right+1, n, s +")");
        }

    }
};

console.log(generateParenthesis(3));