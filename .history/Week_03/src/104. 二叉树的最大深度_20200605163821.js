/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

    let maxDepth = 0;
    return dfs(root);

    function dfs(root){
        if(root === null){
            return maxDepth;
        }

        let leftLevel = dfs(root.left, maxDepth + 1);
        let rightLevel = dfs(root.right,maxDepth +1);

        return Math.max(rightLevel,)
    }

};