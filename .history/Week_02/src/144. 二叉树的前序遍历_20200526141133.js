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
var preorderTraversal = function(root) {
    let num =[];

    //
    dps(root,num);
    return num;

    function dps(root,num){
        if(root === null){
            return;
        }

        // 中间取值 遍历左边 遍历右边
        num.push(root.val);
        dps(root.left,num);
        dps(root.right, num);
    }


};