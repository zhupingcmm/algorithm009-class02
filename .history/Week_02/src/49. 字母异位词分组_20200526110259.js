/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let res = [];
    let obj = {};
    for(let i =0; i<strs.length -1;i++){
        let strArr = strs[i].split('');
        strArr.sort();
        let key = strArr.join("-");

        console.log()
        if(obj[key]){
            // console.log(obj[key])
            obj[key].push(strs[i]);
        }else{
            let val = [];
            val.push(strs[i])
            obj[key] = val;
        }

    }


    console.log(obj)
    for(let key in obj){
        res.push(obj[key])
    }

    console.log(res)
   
    return res;

};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(strs);