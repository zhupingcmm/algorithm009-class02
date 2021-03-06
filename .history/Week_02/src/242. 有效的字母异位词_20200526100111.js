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
    
    for(let k in t){
        let val = objS[t[k]];
        if(val === undefined){ 
          return false;
        }

        if(val){
            if(val === 0){
                return false;
            }
            if(val >= 1 ){
                val = val -1;
                objS[t[k]] = val;
            }
        }
    }

    for(let item in objS){
        if(objS[item] !== 0){
           return false;
        }
    }

    return res;
};


let s = "aa", t = "ab";

console.log(isAnagram(s,t));