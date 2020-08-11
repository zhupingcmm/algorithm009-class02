/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    
    // console.log(num);
    let res = false;
    dfs(num);

    function dfs(num){
        if(num === 1) {
            res = true;
            return; 
        };

        let tem = 0;
        if(num % 2 === 0){
            tem = num / 2;
            dfs(tem);
        }else if(num % 3 === 0){
            tem = num / 3;
            console.log(tem)
            dfs(tem);

        }else if(num % 5 === 0){
            tem = num / 5;
            dfs(tem);

        }else{
            res = false;
            return;
        }
    }

    return res;
    
};

console.log(isUgly(6))

