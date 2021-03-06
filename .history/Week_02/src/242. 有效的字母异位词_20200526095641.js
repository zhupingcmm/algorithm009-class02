/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let objS = {};
    let res = true;
    for(let i in s){
        let val = objS[s[i]];
        if(val){
            val = val + 1;
        }else{
           
            objS[s[i]] = 1;
        }
    }
    
    console.log(objS)
    for(let k in t){
        let val = objS[t[k]];
        if(val === null){ 
            res = false;
            break;
        }

        if(val){
            if(val === 0){
                res = false;
                break;
            }
            if(val >= 1 ){
                val = val -1;
                objS[t[k]] = val;
            }
        }
    }

    for(let item in objS){
        if(objS[item] !== 0){
            res = false;
            break;
        }
    }

    return res;
};


let s = "a", t = "ab";

console.log(isAnagram(s,t));