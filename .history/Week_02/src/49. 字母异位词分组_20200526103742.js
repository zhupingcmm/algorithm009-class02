/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    for(let i =0; i<strs.length -1;i++){
        strs[i].sort();
        let strArr = strs[i].split('');
        strArr.sort((a,b)=a-b)
        console.log( strArr)

    }

};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(strs);