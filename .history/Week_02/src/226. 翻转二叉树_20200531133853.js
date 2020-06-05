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
        //停止条件，如果节点为null，直接停止
        if(root === null){
            return;
        }
        //左右节点互换  
        let temp = root.left;
        root.left = root.right;
        root.right= temp;
        //入遍历
        if(root.left) _helper(root.left);
        if(root.right) _helper(root.right);
    }

};