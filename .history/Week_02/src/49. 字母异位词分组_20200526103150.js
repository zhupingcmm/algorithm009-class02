/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    for(let i =0; i<strs.length -1;i++){
        strs[i].sort((a,b)=>a-b);
        console.log()

    }

};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(strs);