/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let gIndex=0,sIndex=0,res=0;
    g.sort((a,b)=>a-b);
    let sortS=s.sort((a,b)=>a-b);
    console.log(g)
    while(gIndex<g.length&&sIndex<s.length){
        if(s[sIndex]>=g[gIndex]){
            res++;
            gIndex++;
        }
        sIndex++;
    }
    console.log(res)
    return res

};

let g = [1,2,3,21212,32,4,21,2,3,4,555554];
let s = [1,1];
findContentChildren(g,s);
