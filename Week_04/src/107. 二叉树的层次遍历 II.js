/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) return [];
  let res=[];
  let queue = [root];
  while(queue.length > 0){
     let currentLevel = [];
     let len = queue.length;
     while(len){
         let cur = queue.shift();
         currentLevel.push(cur.val);
         if(cur.left) queue.push(cur.left);
         if(cur.right) queue.push(cur.right);
         len--;
     }
     res.unshift(currentLevel);
  }

  return res;

};