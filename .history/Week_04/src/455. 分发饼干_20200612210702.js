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
    console.log("sMap::",s)

    for(let i =0;i<g.length; i++){
        if(sMap[g[i]] && sMap[s[i]] >=1){
            sMap[s[i]] = sMap[s[i]] -1;
        }else{
            result = i ;
            break;
        }
    }

    console.log("result:::",result);
    return result;

};

let g = [1,2];
let s = [1,2,3];
findContentChildren(g,s);
