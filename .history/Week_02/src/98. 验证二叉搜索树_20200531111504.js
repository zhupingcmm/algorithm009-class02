/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let valid = true;
    _helper(root);

    return valid;

    function _helper(root){
        if(root === null){
            return;
        }

        if(root.left < root.val < root.right.val){

        }

        _helper(root.left);
        _helper(root.right);


    }

};