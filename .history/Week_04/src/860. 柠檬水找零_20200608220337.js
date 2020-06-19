/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    console.log(bills);

    let result = true;

    let objMap ={
        5:0,
        10:0,
        20:0
    };

    for(let item of bills){
        console.log(item);
        switch (item){
             case 5:
                
             break;
             case 10:

                objMap[10] =objMap[10] +1;
                objMap[5] =  objMap[5] - 1;
                if(objMap[5] < 0){
                    result = false;
                }
                break;
             case 20:
             objMap[20] =objMap[20] +1;
             if(objMap[10] >=1){
                 objMap[10] = objMap[10] -1;
                 objMap[5] =  objMap[5] - 1;
                if(objMap[5] < 0){
                    result = false;
                }
             }else{
                  objMap[5] =  objMap[5] - 3;
                   if(objMap[5] < 0){
                    result = false;
                    }
             }
             break;
        }
        if(!result){
            break;
        }
       
    }

    return result;

};