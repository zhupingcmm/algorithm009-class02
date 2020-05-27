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
        if(objS[t[k]] === null){ 
            res = false;
            break;
        }

        if(objS[t[k]]){
            if(){
                
            }
            objS[t[k]] = objS[t[k]] -1;
        }
    }

    return res;

};


let s = "anagram", t = "nagaram";

console.log(isAnagram(s,t));