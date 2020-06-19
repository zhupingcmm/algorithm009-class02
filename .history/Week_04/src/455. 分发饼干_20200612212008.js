/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let result =0;
    if(!g || !s) return result;
    let sMap = {};

    for(let i = 0; i<s.length; i++){
        if(sMap[s[i]]){
            sMap[s[i]] =  sMap[s[i]] + 1;
        }else{
            sMap[s[i]] = 1;
        }
    }
    console.log("sMap::",sMap)

    for(let i =0; i<g.length; i++){
        console.log("sMap[g[i]]::",sMap[g[i]]);
        if(sMap[g[i]] && sMap[g[i]] >=1){
            console.log("111")
            sMap[g[i]] = sMap[g[i]] -1;
            result +=1;
        }else if(sMap){

        }else{
            // result = i ;
            break;
        }
    }

    function getMatchItem(obj){
        for(){
            
        }
    }

    console.log("result:::",result);
    return result;

};

let g = [1,2,3];
let s = [3];
findContentChildren(g,s);
