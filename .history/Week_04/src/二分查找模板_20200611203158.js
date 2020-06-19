function demo(arr, target){
    let left = 0;
    let right = arr.length -1;
    let mid =0;
    while(left<=right){
        mid = (left + right)/2;
        if(arr[mid] === target){
            // find the result
            //break or return result;
        } 
        else if(arr[mid] < target){
            left = mid + 1;
        }
        else{
            
        }
    }

}