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
            console.log(obj[key])
            obj[key].push(strs[i]);
        }else{
            let 
            obj[key] = [].push(strs[i]);
        }

    }

    console.log(obj)

};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(strs);