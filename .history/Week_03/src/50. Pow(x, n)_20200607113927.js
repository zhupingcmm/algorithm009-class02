/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
   return n >= 0 ? fastMul(x, n) : 1.0 / fastMul(x ,-n ); 

    function fastMul(x, n){
        if(n === 0){
            return 1.0;
        }

        let reuslt = fastMul(x,n/2);

        return n % 2 === 0 ? reuslt * reuslt : reuslt 
    }


};