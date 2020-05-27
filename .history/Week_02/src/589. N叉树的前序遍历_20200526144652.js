/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let num = [];
    dfs(root)
    return num;
    function dfs(root){
        if(root === null) return;
        //
        num.push(root.val);
        for(let i = 0; i<= root.children.length -1; i++){
            dfs(root.children[i]);
        }
        
    }
};