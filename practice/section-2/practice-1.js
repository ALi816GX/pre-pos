'use strict';

function countSameElements(collection) {


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
          result.push({key:key_value,count:count_value});
          break;
        }
        else{
          result.push({key:key_value,count:count_value});
          key_value = collection[i];
          count_value = 0;
          i--;
        }
    }

  }

  return result;
}
