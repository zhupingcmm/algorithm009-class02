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
        strArr.sort();
        let key = strArr.join("-");
        if(obj[key]){
            obj[key].push()
        }else{
            obj[key] = [].push(strs[i])
        }

    }

};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(strs);