'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const values = objectB["value"];
  for(let i = 0;i< values.length;i++){
    for(let j = 0;j < collectionA.length;j++){
     if(values[i] == collectionA[j]["key"]){

        var temp =(collectionA[j]["count"] - 3)/3;
        temp = parseInt(temp);
        collectionA[j]["count"]--;
        collectionA[j]["count"] = collectionA[j]["count"] - temp;
        continue;
       
      }
    }
  }

  console.log(collectionA);

  return collectionA;
}
