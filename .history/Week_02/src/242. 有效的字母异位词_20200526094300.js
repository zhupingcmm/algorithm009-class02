/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let objS = {};
    let res = false;
    for(let i in s){
        if(objS[s[i]]){
            objS[s[i]] = objS[s[i]] + 1;
        }else{
            objS[s[i]] = 1;
        }
    }

    for(let k in t){
        let val = objS[t[k]];
        if(val === null){ 
            res = false;
            break;
        }

        if(val){
            if(val > 1 ){
                val = objS[t[k]] -1;
            }
           
        }
    }

    return res;

};


let s = "anagram", t = "nagaram";

console.log(isAnagram(s,t));