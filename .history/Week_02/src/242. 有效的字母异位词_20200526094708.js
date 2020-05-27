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
            val = 1;
        }
    }

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
            }
        }
    }

    for(let item of objS){
        console.log(item)

    }

    return res;

};


let s = "anagram", t = "nagaram";

console.log(isAnagram(s,t));