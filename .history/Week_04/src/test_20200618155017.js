/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    nums.sort((a,b)=>a-b);
    let res =[];
    console.log("nums:::",nums);
    for(let i = 0; i< nums.length -3; i++){
        for(let k = i+1; k <nums.length -2; k++){
            let size = nums.length;
            let frist = k + 1;
            let last = size -1;
            console.log("i::",i,"k::",k,"frist::",frist,"last::",last);
            while(nums[k] = nums[k+1])
            while(frist < last){
                let temp =  nums[i] + nums[k] + nums[frist] + nums[last];
                console.log('temp::',nums[i] , nums[k] , nums[frist] , nums[last]);
                if(target === temp){
                    res.push([nums[i], nums[k], nums[frist], nums[last]]);
                    while(nums[frist] === nums[frist+1]){frist++};
                    while(nums[last] === nums[last-1]){last--}
                    console.log("frist::",frist,"last::",last);
                }

                if(target > temp ){
                    frist++;
                }else{
                    last--;
                }
            } 
        }
    }
    console.log(res);
    return res;
};


let nums =  [-3,-2,-1,0,0,1,2,3];
fourSum(nums,0);