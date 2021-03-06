/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let gIndex=0,sIndex=0,res=0;
    let sortG=g.sort((a,b)=>a-b);
    let sortS=s.sort((a,b)=>a-b);
    while(gIndex<g.length&&sIndex<s.length){
        if(s[sIndex]>=g[gIndex]){
            res++;
            gIndex++;
        }
        sIndex++;
    }
    return res

作者：ahua-x
链接：https://leetcode-cn.com/problems/assign-cookies/solution/tan-xin-ce-lue-jie-he-shuang-zhi-zhen-92msbao-li-x/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

};

let g = [1,2,3];
let s = [1,1];
findContentChildren(g,s);
