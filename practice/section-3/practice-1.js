'use strict';

function createUpdatedCollection(collectionA, objectB) {

  
  const values = objectB["value"];
  for(let i = 0;i< values.length;i++){
    for(let j = 0;j < collectionA.length;j++){
     if(values[i] == collectionA[j]["key"]){
        collectionA[j]["count"]--;
        continue;
       }
    }
  }

  console.log(collectionA);

  return collectionA;
}
