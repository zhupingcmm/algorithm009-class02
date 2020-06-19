
//实例代码
function dfs(node){
    if(node in visited){
        //already 
        return;
    }

    visited.push(node);

    //process current node
    dfs(node.left);
    dfs(node.right);
}