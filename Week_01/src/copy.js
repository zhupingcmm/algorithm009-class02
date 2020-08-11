
let jack = {
    name : "jack.ma",
    age:40,
    like:{
        dog:{
            color:'black',
            age:3,
        },
        cat:{
            color:'white',
            age:2
        }
    }
}
function copy(src, dest){
    //实现拷贝代码，将src的值完整地拷贝给dest
   //在这里实现

   if(typeof src  !== "object" || typeof src === null) return Object;

   for(let key in src){
       if(src.hasOwnProperty(key)){
           if(typeof src[key] === "object"){
                dest[key] = Array.isArray(src[key]) ? [] : {};
                copy(src[key], dest[key])

           }else{
               dest[key] = src[key]
           }
       }

   }


   return dest;

    
}
let jack2 = copy(jack,{})

console.log(jack2)

//比如修改jack2中的内容，不会影响到jack中的值
jack2.like.dog.color = 'green'
console.log(jack.like.dog.color) //打印出来的应该是 "black"