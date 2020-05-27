/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    for(let i =0; i<strs.length -1;i++){
        // strs[i].sort();
        let strArr = strs[i].split('');
        console.log(strArr)
        strArr = strArr.sort()
        // console.log(strArr)

    }

};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(strs);