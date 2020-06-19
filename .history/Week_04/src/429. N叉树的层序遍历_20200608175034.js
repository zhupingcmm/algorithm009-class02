/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    if(!root) return [];
    let queue = [root];

    while(queue){
        let currentLevel =[];

        let len = queue.length;

        while(len){

            let cur = queue.shift();
            currentLevel.push(cur.val);
            for(let i =0; i<= cur.children.length; i++ ){
                queue.push(cur.children[i]);
            }

            len --;
        }

        result.push(currentLevel);
    }

    

    
    
};