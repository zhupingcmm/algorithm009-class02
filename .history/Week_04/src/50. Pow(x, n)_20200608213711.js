/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
   return n>=0 ? fast(x, n) : 1/fast(x,-n);

    function fast (x, n){
        if(n === 0){
            return 1;
        }

        fast(x,n/2);
        let y = 
        return n % 2===0 ?  
    }
    

};