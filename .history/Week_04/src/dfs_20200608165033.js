
//实例代码 
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


visited = [];

function dfs1(node, visited){
    visited.add(node);

    for(let next_node in node.children()){
        if(visited[ne]){

        }
    }
}