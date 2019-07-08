'use strict';

function countSameElements(collection) {

  // console.log(collection);
   //collection  改造
   for(let i = 0;i < collection.length; i++){
    if(collection[i].length != 1){
       var temp = collection[i];
       var key = temp[0];
       var times_str = collection[i].replace(/[^0-9]/ig,""); // 提取字符的数字 
       let times = parseInt(times_str);
       console.log(times);
       var k = i;
       collection.splice(i,1);
       for(let j = 0;j < times;j++){
         collection.splice(k,0,key);
         k++;
       }
    }
  }
  // console.log(collection);
  //collection  改造


 const result = [];

 var key_value = collection[0];
 var count_value = 0;
 for(let i = 0;i < collection.length;i++){
   
   if(key_value == collection[i] && i != collection.length - 1){
       key_value = collection[i];
       count_value++;
   }
   else{
       if(i == collection.length - 1){
         count_value++;
         result.push({name:key_value,summary:count_value});
         break;
       }
       else{
         result.push({name:key_value,summary:count_value});
         key_value = collection[i];
         count_value = 0;
         i--;
       }
   }

 }

 return result;
 
}
