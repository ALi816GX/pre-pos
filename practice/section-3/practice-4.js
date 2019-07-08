'use strict';

function createUpdatedCollection(collectionA, objectB) {


     //collection  改造
     for(let i = 0;i < collectionA.length; i++){
      if(collectionA[i].length != 1){
         var temp = collectionA[i];
         var key = temp[0];
         var times_str = collectionA[i].replace(/[^0-9]/ig,""); // 提取字符的数字 
         let times = parseInt(times_str);
         console.log(times);
         var k = i;
         collectionA.splice(i,1);
         for(let j = 0;j < times;j++){
          collectionA.splice(k,0,key);
           k++;
         }
      }
    }
    //collection  改造


//-------------------------------------

  const result = [];

  var key_value = collectionA[0];
  var count_value = 0;
  for(let i = 0;i < collectionA.length;i++){
    
    if(key_value == collectionA[i] && i != collectionA.length - 1){
        key_value = collectionA[i];
        count_value++;
    }
    else{
        if(i == collectionA.length - 1){
          count_value++;
          result.push({key:key_value,count:count_value});
          break;
        }
        else{
          result.push({key:key_value,count:count_value});
          key_value = collectionA[i];
          count_value = 0;
          i--;
        }
    }

  }

//-------------------------------------

  const values = objectB["value"];
  for(let i = 0;i< values.length;i++){
    for(let j = 0;j < result.length;j++){
     if(values[i] == result[j]["key"]){

        var temp =(result[j]["count"] - 3)/3;
        temp = parseInt(temp);
        result[j]["count"]--;
        result[j]["count"] = result[j]["count"] - temp;
        continue;
       
      }
    }
  }


  return result;
}
