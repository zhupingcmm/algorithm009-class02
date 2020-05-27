/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let obj = {};
    for(let i =0; i<strs.length -1;i++){
        // strs[i].sort();
        let strArr = strs[i].split('');
        // console.log(strArr)
        strArr.sort()
        console.log(strArr.join("-"))

    }

};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(strs);