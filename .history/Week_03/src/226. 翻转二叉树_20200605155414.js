/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    _helper(root);
    return root;

    function _helper(root){
        if(root === null){
            return;
        }

        let temp = 
    }
 
 };