/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //双指针夹逼
    // let max = 0;
    // for(let i = 0, j = height.length -1; i<j;){
    //     let  minHeight = height[i] < height[j] ? height[i++] : height[j--];

    //     let area =(j-i+1)* minHeight;

    //     max =Math.max(area,max);

    // }

    // console.log(max);
    // return max;

        let max = 0;
        let left = 0;
        let right= height.length -1;
        while(left < right){
            let minHeight = height[left] < height[right] ? height[left++] : height[right--];
            let area = (right-left+1)* minHeight;
            console.log(area)
            max = Math.max(area,max);
        }
    
        console.log(max)
        return max;
   
};

maxArea([1,8,6,2,5,4,8,3,7])