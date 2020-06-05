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
        //停止条件，如果节点为null
        if(root === null){
            return;
        }
        //
        let temp = root.left;
        root.left = root.right;
        root.right= temp;
    
        if(root.left) _helper(root.left);
        if(root.right) _helper(root.right);
    }

};