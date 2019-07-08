'use strict';

function collectSameElements(collectionA, objectB) {
     const collectionC = [];
     const values = objectB["value"];
     
    
    for(let i = 0;i < collectionA.length;i++){
       var obj = collectionA[i];
       for(var k in obj) {
         for(let i = 0;i < values.length;i++){
            if(values[i] == obj[k]){
              collectionC.push(values[i]);
              continue;
            }
         }
      }
      
    }

    return collectionC;
}
