
//实例代码 深度优先
function dfs(node){
    if(node in visited){
        //already visited
        return;
    }

    visited.push(node);

    //process current node
    dfs(node.left);
    dfs(node.right);
}