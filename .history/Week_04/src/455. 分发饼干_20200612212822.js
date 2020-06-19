/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let result =0;
    let sIndex = 0;
    let gIndex = 0;

    let sortG = g.sort((a,b)=>a-b);

    let sortS = g.sort((a,b)=>a-b);

    while(gIndex <g.length && sIndex< s.length){
        if(g[gIndex] <= s[sIndex]){
            gIndex++;
            result ++
        }
        sIndex++;


    }
    return result;

};

let g = [1,2,3];
let s = [3];
findContentChildren(g,s);
