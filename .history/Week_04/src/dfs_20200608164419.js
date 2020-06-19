
//实例代码
function dfs(node){
    if(node in visited){
        return;
    }

    visited.push(node);

    //process current 
    dfs(node.left);
    dfs(node.right);
}