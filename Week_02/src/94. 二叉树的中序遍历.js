/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    let res = [];
    _generate(root);

    function _generate(root){
        //terminal
        if(root === null){
            return;
        }

        
        _generate(root.left);
        res.push(root.val);
        _generate(root.right);
        
    }


    return res;



};