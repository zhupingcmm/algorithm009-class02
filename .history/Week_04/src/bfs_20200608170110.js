

function BFS(graph, start, end){
    queue = [];
    queue.push(start);
    visited.push(start);

    while(queue){
        node = queue.pop();
        visited.add(node);

        process(node);
        
    }
}