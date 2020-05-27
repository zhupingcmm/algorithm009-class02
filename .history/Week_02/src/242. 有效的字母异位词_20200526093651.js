/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let objS = {};
    for(let i in s){
        // console.log(s[i])
        if(objS[s[i]]){

        }else{
            objS[s[i]] = 1;
        }
    }

};


let s = "anagram", t = "nagaram";

console.log(isAnagram(s,t));