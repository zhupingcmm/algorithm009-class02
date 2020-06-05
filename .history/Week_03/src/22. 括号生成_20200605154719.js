/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res =[];
    _generater(0,0,"");

    return [];

    function _generater(left, right, s){

        if(left === n && right === n){
            res.push(s);
            return;
        }

        if(left < n){

        }

        if(left > right){

        }
    }
};