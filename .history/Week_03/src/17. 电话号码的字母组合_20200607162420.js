/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res = [];
    if(digits.length === 0) return [];
    let objMap ={};
    objMap[2] = "abc";
    objMap[3] = "def";
    objMap[4] = "ghi";
    objMap[5] = "jkl";
    objMap[6] = "mno";
    objMap[7] = "pqrs";
    objMap[8] = "tuv";
    objMap[9] = "wxyz";
    
    seacrh("", digits, 0, res, objMap);

    return res;

    function seacrh(s, digits, index, res, objMap){
        if(index === digits.length){
            res.push(s);
            return;
        }

        let letter = digits[index];
        console.log("letter::",letter);
        let letters = objMap[letter];
        for(let i = 0; i<letters.length; i++){
            // console.log(letters[i]);
            seacrh(s + letters[i], digits, index + 1, res, objMap);
        }

    }
    

};

let result = letterCombinations("23");
console.log(result)