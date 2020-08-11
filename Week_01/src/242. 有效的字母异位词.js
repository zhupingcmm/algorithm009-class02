/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let obj = {};
    for(let i = 0; i< s.length; i++){
        if(obj[s[i]]){
            obj[s[i]] = obj[s[i]] + 1;
        }else{
            obj[s[i]] = 1;
        }
    }

    for(let j = 0; j < t.length; j++){
        if(!obj[t[j]]){
            return false;
        }
        obj[t[j]] = obj[t[j]] - 1;
    }

    for(let key in obj){
        // console.log(key)
        if(obj[key] !== 0){
            return false;
        }
    }
    

    // console.log(obj)

    return true;

};

isAnagram("anagram", "nagaram")