/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let obj ={
        '(':')',
        '[':']',
        '{':'}'
    }

    let res = false;
    let stack =[];

    for(let i = 0; i< s.length; i++){
        //当前元素是左括号
        if(obj[s[i]]){
            //
            stack.unshift(s[i]);
        }else{
            if(obj[stack[0]] !== s[i] || stack.length===0){
                return false;
            }
            stack.shift();
        }
    }
   

    if (stack.length === 0) res = true;

    return res;
};

isValid("()")