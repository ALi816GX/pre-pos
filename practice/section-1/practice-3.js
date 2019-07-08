'use strict';

function collectSameElements(collectionA, objectB) {


     const collectionC = [];
     const values = objectB["value"];
     for(let i = 0;i< collectionA.length;i++){
       for(let j = 0;j < values.length;j++){
        if(collectionA[i] == values[j]){
           collectionC.push(collectionA[i]);
           continue;
          }
       }
     }

    return collectionC;

}
